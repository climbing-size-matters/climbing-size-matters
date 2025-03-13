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
    describe('bd cam size', () => {
        describe('finds', () => {
            it('decimal sizes', () => {
                expect(highlightCams('#0.0')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#0.1')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#0.2')).toBeHighlightedWith('#C9AF19');
                expect(highlightCams('#0.3')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('#0.4')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('#0.5')).toBeHighlightedWith('#614FC8');
                expect(highlightCams('#0.75')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#1.0')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#2.0')).toBeHighlightedWith('#C9AF19');
                expect(highlightCams('#3.0')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('#4.0')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('#5.0')).toBeHighlightedWith('#614FC8');
                expect(highlightCams('#6.0')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#7.0')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#8.0')).toBeHighlightedWith('#C9AF19');
            });

            it('sizes without decimals', () => {
                expect(highlightCams('#1')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#2')).toBeHighlightedWith('#C9AF19');
                expect(highlightCams('#3')).toBeHighlightedWith('#1177CC');
                expect(highlightCams('#4')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('#5')).toBeHighlightedWith('#614FC8');
                expect(highlightCams('#6')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('#7')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('#8')).toBeHighlightedWith('#C9AF19');
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
            it('invalid decimal sizes', () => {
                const invalidSizes = [
                    '#0.6',
                    '#0.7',
                    '#0.8',
                    '#0.9',
                    '#1.1',
                    '#1.2',
                    '#1.3',
                    '#1.4',
                    '#1.5',
                    '#1.6',
                    '#1.7',
                    '#1.8',
                    '#1.9',
                    '#2.1',
                    '#2.2',
                    '#2.3',
                    '#2.4',
                    '#2.5',
                    '#2.6',
                    '#2.7',
                    '#2.8',
                    '#2.9',
                    '#3.1',
                    '#3.2',
                    '#3.3',
                    '#3.4',
                    '#3.5',
                    '#3.6',
                    '#3.7',
                    '#3.8',
                    '#3.9',
                    '#4.1',
                    '#4.2',
                    '#4.3',
                    '#4.4',
                    '#4.5',
                    '#4.6',
                    '#4.7',
                    '#4.8',
                    '#4.9',
                    '#5.1',
                    '#5.2',
                    '#5.3',
                    '#5.4',
                    '#5.5',
                    '#5.6',
                    '#5.7',
                    '#5.8',
                    '#5.9',
                    '#6.1',
                    '#6.2',
                    '#6.3',
                    '#6.4',
                    '#6.5',
                    '#6.6',
                    '#6.7',
                    '#6.8',
                    '#6.9',
                    '#7.1',
                    '#7.2',
                    '#7.3',
                    '#7.4',
                    '#7.5',
                    '#7.6',
                    '#7.7',
                    '#7.8',
                    '#7.9',
                    '#8.1',
                    '#8.2',
                    '#8.3',
                    '#8.4',
                    '#8.5',
                    '#8.6',
                    '#8.7',
                    '#8.8',
                    '#8.9',
                ];
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

    describe('metolius cam size', () => {
        describe('finds', () => {
            it('numbers', () => {
                expect(highlightCams('1 metolius')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('#1 metolius')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('2 master cam')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('#2 master cam')).toBeHighlightedWith(
                    '#1177CC'
                );
                expect(highlightCams('3 mc')).toBeHighlightedWith('#9BA1B7');
                expect(highlightCams('#3 mc')).toBeHighlightedWith('#9BA1B7');
            });

            it('colors', () => {
                expect(highlightCams('red metolius')).toBeHighlightedWith('#');
                expect(highlightCams('black master cam')).toBeHighlightedWith(
                    '#009E3A'
                );
                expect(highlightCams('green mc')).toBeHighlightedWith(
                    '#CB1B31'
                );
            });
        });

        describe('doesnt find', () => {
            it('numbers', () => {
                expect(highlightCams('9 metolius')).not.toBeHighlightedWith(
                    '#'
                );
                expect(highlightCams('9 master cam')).not.toBeHighlightedWith(
                    '#'
                );
                expect(highlightCams('9 mc')).not.toBeHighlightedWith('#');
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
                expect(highlightCams('1-2"')).toBeHighlightedWith('#614FC8');
                expect(highlightCams('1-2"')).toBeHighlightedWith('#009E3A');
                expect(highlightCams('1-2"')).toBeHighlightedWith('#CB1B31');
                expect(highlightCams('1-2"')).toBeHighlightedWith('#C9AF19');
            });
        });
    });
});
