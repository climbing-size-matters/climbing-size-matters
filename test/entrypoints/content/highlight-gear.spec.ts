import { describe, it, expect } from 'vitest';
import { highlightCams } from '../../../src/entrypoints/content/highlight-gear';

// this creates a custom matcher so when we update what "highlighting" translates
// to we can update the logic in one place rather than in each test case
//
// right now it's a loose check on that the highlight color is contained in the string,
// we could improve this to add a special id indicating a highlight
expect.extend({
    toBeHighlightedWith(received, expected) {
        const { isNot } = this;
        return {
            pass: received.includes(expected),
            message: () =>
                `${received} should${isNot ? ' not' : ''} be highlighted with ${expected}`,
        };
    },
});

declare module 'vitest' {
    interface Assertion<T> {
        toBeHighlightedWith: (color: string) => T;
    }
}

describe('higlightCrackAndGearMentions', () => {
    describe('cams', () => {
        describe('finds', () => {
            it('singular', () => {
                expect(highlightCams('cam')).toBeHighlightedWith('#FF0000');
                expect(highlightCams('camalot')).toBeHighlightedWith('#FF0000');
                expect(highlightCams('cam-a-lot')).toBeHighlightedWith(
                    '#FF0000'
                );
            });

            it('plural', () => {
                expect(highlightCams('cams')).toBeHighlightedWith('#FF0000');
                expect(highlightCams('camalots')).toBeHighlightedWith(
                    '#FF0000'
                );
                expect(highlightCams('cam-a-lots')).toBeHighlightedWith(
                    '#FF0000'
                );
            });

            it('with trailing punctuation', () => {
                expect(highlightCams('cam,')).toBeHighlightedWith('#FF0000');
                expect(highlightCams('camalots.')).toBeHighlightedWith(
                    '#FF0000'
                );
                expect(highlightCams('cam-a-lots ')).toBeHighlightedWith(
                    '#FF0000'
                );
            });

            it('with initial capital (so Proper 💁🏼‍♂️)', () => {
                expect(highlightCams('Cams')).toBeHighlightedWith('#FF0000');
                expect(highlightCams('Camalots')).toBeHighlightedWith(
                    '#FF0000'
                );
                expect(highlightCams('Cam-a-lots')).toBeHighlightedWith(
                    '#FF0000'
                );
            });
        });

        describe('doesnt find', () => {
            it('mid-word', () => {
                expect(highlightCams('scam')).not.toBeHighlightedWith(
                    '#FF0000'
                );
                expect(highlightCams('camera')).not.toBeHighlightedWith(
                    '#FF0000'
                );
                expect(
                    highlightCams('Tengo la camisa negra')
                ).not.toBeHighlightedWith('#FF0000');
            });
        });
    });

    describe('cam sizes', () => {
        describe('finds', () => {
            it('sub-decimal sizes', () => {
                expect(highlightCams('#00')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0')).toBeHighlightedWith('#00FF00');
            });

            it('decimal sizes', () => {
                expect(highlightCams('#0.1')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0.2')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0.3')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0.4')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0.5')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#0.75')).toBeHighlightedWith('#00FF00');
            });

            it('sizes without decimals', () => {
                expect(highlightCams('#1')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#2')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#3')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#4')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#5')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#6')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#7')).toBeHighlightedWith('#00FF00');
                expect(highlightCams('#8')).toBeHighlightedWith('#00FF00');
            });
        });

        describe('doesnt find', () => {
            it('invalid decimal sizes', () => {
                expect(highlightCams('#0.6')).not.toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCams('#0.9')).not.toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCams('#1.2')).not.toBeHighlightedWith(
                    '#00FF00'
                );
            });
        });
    });

    describe('crack sizes', () => {
        describe('finds', () => {
            it('units', () => {
                expect(highlightCams('1"')).toBeHighlightedWith('#0000FF');
                expect(highlightCams('3cm')).toBeHighlightedWith('#0000FF');
                expect(highlightCams('5mm')).toBeHighlightedWith('#0000FF');
            });

            it('decimal sizes', () => {
                expect(highlightCams('1.5"')).toBeHighlightedWith('#0000FF');
            });

            it('size ranges', () => {
                expect(highlightCams('1-3"')).toBeHighlightedWith('#0000FF');
            });
        });

        describe('doesnt find', () => {
            it('numbers without units', () => {
                expect(highlightCams('1-3')).not.toBeHighlightedWith('#0000FF');
                expect(highlightCams('1.5')).not.toBeHighlightedWith('#0000FF');
            });
        });
    });
});
