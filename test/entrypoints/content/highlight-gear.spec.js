import { describe, it, expect } from 'vitest';
import { highlightCrackAndGearMentions } from '../../../src/entrypoints/content/highlight-gear';

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

describe('higlightCrackAndGearMentions', () => {
    describe('cams', () => {
        describe('finds', () => {
            it('singular', () => {
                expect(
                    highlightCrackAndGearMentions('cam')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('camalot')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('cam-a-lot')
                ).toBeHighlightedWith('#FF0000');
            });

            it('plural', () => {
                expect(
                    highlightCrackAndGearMentions('cams')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('camalots')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('cam-a-lots')
                ).toBeHighlightedWith('#FF0000');
            });

            it('with trailing punctuation', () => {
                expect(
                    highlightCrackAndGearMentions('cam,')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('camalots.')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('cam-a-lots ')
                ).toBeHighlightedWith('#FF0000');
            });

            it('with initial capital (so Proper 💁🏼‍♂️)', () => {
                expect(
                    highlightCrackAndGearMentions('Cams')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('Camalots')
                ).toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('Cam-a-lots')
                ).toBeHighlightedWith('#FF0000');
            });
        });

        describe('doesnt find', () => {
            it('mid-word', () => {
                expect(
                    highlightCrackAndGearMentions('scam')
                ).not.toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('camera')
                ).not.toBeHighlightedWith('#FF0000');
                expect(
                    highlightCrackAndGearMentions('Tengo la camisa negra')
                ).not.toBeHighlightedWith('#FF0000');
            });
        });
    });

    describe('cam sizes', () => {
        describe('finds', () => {
            it('sub-decimal sizes', () => {
                expect(
                    highlightCrackAndGearMentions('#00')
                ).toBeHighlightedWith('#00FF00');
                expect(highlightCrackAndGearMentions('#0')).toBeHighlightedWith(
                    '#00FF00'
                );
            });

            it('decimal sizes', () => {
                expect(
                    highlightCrackAndGearMentions('#0.1')
                ).toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.2')
                ).toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.3')
                ).toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.4')
                ).toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.5')
                ).toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.75')
                ).toBeHighlightedWith('#00FF00');
            });

            it('sizes without decimals', () => {
                expect(highlightCrackAndGearMentions('#1')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#2')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#3')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#4')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#5')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#6')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#7')).toBeHighlightedWith(
                    '#00FF00'
                );
                expect(highlightCrackAndGearMentions('#8')).toBeHighlightedWith(
                    '#00FF00'
                );
            });
        });

        describe('doesnt find', () => {
            it('invalid decimal sizes', () => {
                expect(
                    highlightCrackAndGearMentions('#0.6')
                ).not.toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#0.9')
                ).not.toBeHighlightedWith('#00FF00');
                expect(
                    highlightCrackAndGearMentions('#1.2')
                ).not.toBeHighlightedWith('#00FF00');
            });
        });
    });

    describe('crack sizes', () => {
        describe('finds', () => {
            it('units', () => {
                expect(highlightCrackAndGearMentions('1"')).toBeHighlightedWith(
                    '#0000FF'
                );
                expect(
                    highlightCrackAndGearMentions('3cm')
                ).toBeHighlightedWith('#0000FF');
                expect(
                    highlightCrackAndGearMentions('5mm')
                ).toBeHighlightedWith('#0000FF');
            });

            it('decimal sizes', () => {
                expect(
                    highlightCrackAndGearMentions('1.5"')
                ).toBeHighlightedWith('#0000FF');
            });

            it('size ranges', () => {
                expect(
                    highlightCrackAndGearMentions('1-3"')
                ).toBeHighlightedWith('#0000FF');
            });
        });

        describe('doesnt find', () => {
            it('numbers without units', () => {
                expect(
                    highlightCrackAndGearMentions('1-3')
                ).not.toBeHighlightedWith('#0000FF');
                expect(
                    highlightCrackAndGearMentions('1.5')
                ).not.toBeHighlightedWith('#0000FF');
            });
        });
    });
});
