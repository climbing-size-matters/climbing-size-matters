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
                expect(highlightCams('#0.0')).toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                expect(highlightCams('#0.1')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('#0.2')).toBeHighlightedWith(
                    'rgb(201, 175, 25)'
                );
                // expect(highlightCams('#0.5')).toBeHighlightedWith('rgb(97, 79, 200)');
                expect(highlightCams('#0.75')).toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                // expect(highlightCams('#4.0')).toBeHighlightedWith('rgb(155, 161, 183)');
                expect(highlightCams('#8.0')).toBeHighlightedWith(
                    'rgb(201, 175, 25)'
                );
                expect(highlightCams('#3')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('#7')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
            });
            it('colors', () => {
                expect(highlightCams('red camalot')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('blue c4')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                // expect(highlightCams('gray bd')).toBeHighlightedWith('rgb(155, 161, 183)');
                // expect(highlightCams('purple camalots')).toBeHighlightedWith(
                //     'rgb(97, 79, 200)'
                // );
            });
        });
        describe('doesnt find', () => {
            it('invalid bd cams', () => {
                const invalidSizes = ['#0.6', '#0.7', '#0.8', '#0.9'];
                const validColors = [
                    'rgb(0, 158, 58)',
                    'rgb(203, 27, 49)',
                    'rgb(201, 175, 25)',
                    'rgb(17, 119, 204)',
                    'rgb(155, 161, 183)',
                    'rgb(97, 79, 200)',
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
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('#1 metolius')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                // expect(highlightCams('1 master cam')).toBeHighlightedWith(
                //     'rgb(17, 119, 204)'
                // );
                // expect(highlightCams('#1 master cam')).toBeHighlightedWith(
                //     'rgb(17, 119, 204)'
                // );
                expect(highlightCams('1 mc')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('#1 mc')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
            });

            it('totem', () => {
                expect(highlightCams('black totem')).toBeHighlightedWith(
                    'rgb(201, 175, 25)'
                );
            });
            it('fixe', () => {
                expect(highlightCams('green alien')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
            });
            it('wild country', () => {
                // expect(highlightCams('purple friend')).toBeHighlightedWith(
                //     'rgb(97, 79, 200)'
                // );
                // expect(highlightCams('purple wc')).toBeHighlightedWith(
                //     'rgb(97, 79, 200)'
                // );
                // expect(highlightCams('0.5 friend')).toBeHighlightedWith(
                //     'rgb(97, 79, 200)'
                // );
                // expect(highlightCams('0.5 wc')).toBeHighlightedWith('rgb(97, 79, 200)');
            });
            it('dmm', () => {
                expect(highlightCams('red dragon')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('3 dragon')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('red dmm')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('3 dmm')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('red dragonfly')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('2 dragonfly')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
            });
        });
        describe('doesnt find', () => {
            it('numbers', () => {
                const validColors = [
                    'rgb(0, 158, 58)',
                    'rgb(203, 27, 49)',
                    'rgb(201, 175, 25)',
                    'rgb(17, 119, 204)',
                    'rgb(155, 161, 183)',
                    'rgb(97, 79, 200)',
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
                expect(highlightCams('0.6"')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                // expect(highlightCams('0.7in')).toBeHighlightedWith('rgb(155, 161, 183)');
                // expect(highlightCams('0.7 in')).toBeHighlightedWith('rgb(155, 161, 183)');
            });
        });
        describe('doesnt find', () => {
            it('numbers without units', () => {
                expect(highlightCams('1-3')).not.toBeHighlightedWith(
                    'rgb(97, 79, 200)'
                );
                expect(highlightCams('1.5')).not.toBeHighlightedWith(
                    'rgb(97, 79, 200)'
                );
            });
            it('size ranges', () => {
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    'rgb(97, 79, 200)'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('1-2"')).not.toBeHighlightedWith(
                    'rgb(201, 175, 25)'
                );
            });
        });
    });
});
