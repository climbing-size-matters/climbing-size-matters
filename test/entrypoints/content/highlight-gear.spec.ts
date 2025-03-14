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

describe('higlightCams', () => {
    describe('bd cams', () => {
        describe('finds', () => {
            it('numbers', () => {
                expect(highlightCams('#0.0')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#0.1')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#0.2')).toBeHighlightedWith('#C9AF19');
                expect(highlightCams('#0.5')).toBeHighlightedWith('#614FC8');
                expect(highlightCams('#0.75')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#4.0')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('#8.0')).toBeHighlightedWith('#C9AF19');
                expect(highlightCams('#3')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('#7')).toBeHighlightedWith('#CB1B31');
            });
            it('colors', () => {
                expect(highlightCams('red camalot')).toBeHighlightedWith(
                    '#CB1B31'
                );
                expect(highlightCams('blue c4')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('gray bd')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('purple camalots')).toBeHighlightedWith(
                    '#614FC8'
                );
            });
        });
        describe('doesnt find', () => {
            it('invalid bd cams', () => {
                const invalidSizes = ['#0.6', '#0.7', '#0.8', '#0.9'];
                const validColors = [
                    '#009E3A',
                    '#CB1B31',
                    '#C9AF19',
                    '#1177CC',
                    '#9BA1B7',
                    '#614FC8',
                ];
                invalidSizes.forEach((size) => {
                    validColors.forEach((color) => {
                        expect(highlightCams(size)).not.toBeHighlightedWith(
                            color
                        );
                    });
                });
            });
        });
    });

    describe('non bd cam', () => {
        describe('finds', () => {
            it('metolius', () => {
                expect(highlightCams('1 metolius')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('#1 metolius')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('1 master cam')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('#1 master cam')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('1 mc')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('#1 mc')).toBeHighlightedWith('#1177CC');
            });

            it('totem', () => {
                expect(highlightCams('black totem')).toBeHighlightedWith(
                    '#C9AF19'
                );
            });
            it('fixe', () => {
                expect(highlightCams('green alien')).toBeHighlightedWith(
                    '#1177CC'
                );
            });
            it('wild country', () => {
                expect(highlightCams('purple friend')).toBeHighlightedWith(
                    '#614FC8'
                );
                expect(highlightCams('purple wc')).toBeHighlightedWith(
                    '#614FC8'
                );
                expect(highlightCams('0.5 friend')).toBeHighlightedWith(
                    '#614FC8'
                );
                expect(highlightCams('0.5 wc')).toBeHighlightedWith('#614FC8');
            });
            it('dmm', () => {
                expect(highlightCams('red dragon')).toBeHighlightedWith(
                    '#CB1B31'
                );
                expect(highlightCams('3 dragon')).toBeHighlightedWith(
                    '#CB1B31'
                );
                expect(highlightCams('red dmm')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('3 dmm')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('red dragonfly')).toBeHighlightedWith(
                    '#CB1B31'
                );
                expect(highlightCams('2 dragonfly')).toBeHighlightedWith(
                    '#CB1B31'
                );
            });
        });
        describe('doesnt find', () => {
            it('numbers', () => {
                const validColors = [
                    '#009E3A',
                    '#CB1B31',
                    '#C9AF19',
                    '#1177CC',
                    '#9BA1B7',
                    '#614FC8',
                ];
                validColors.forEach((color) => {
                    expect(highlightCams('9 metolius')).not.toBeHighlightedWith(
                        color
                    );
                    expect(
                        highlightCams('9 master cam')
                    ).not.toBeHighlightedWith(color);
                    expect(highlightCams('9 mc')).not.toBeHighlightedWith(
                        color
                    );
                    expect(highlightCams('red fly')).not.toBeHighlightedWith(
                        color
                    );
                });
            });
        });
    });

    describe('crack sizes', () => {
        describe('finds', () => {
            it('units', () => {
                expect(highlightCams('0.6"')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('0.7in')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('0.7 in')).toBeHighlightedWith('#9BA1B7');
            });
        });
        describe('doesnt find', () => {
            it('numbers without units', () => {
                expect(highlightCams('1-3')).not.toBeHighlightedWith('#614FC8');
                expect(highlightCams('1.5')).not.toBeHighlightedWith('#0000FF');
            });
            it('size ranges', () => {
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    '#614FC8'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    '#009E3A'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    '#CB1B31'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    '#C9AF19'
                );
            });
        });
    });
});
