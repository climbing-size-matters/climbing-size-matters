import { describe, it, expect } from 'vitest';
import { highlightCams } from '../../../src/entrypoints/content/highlight-cam-objects';

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
    describe('bd c4', () => {
        describe('finds', () => {
            it('colors', () => {
                expect(highlightCams('blue bd')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('gray c4')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('purple cam')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('green cam')).toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                expect(highlightCams('red camalot')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('yellow cams')).toBeHighlightedWith(
                    'rgb(232, 199, 14)'
                );
                expect(highlightCams('blue camalots')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('#0.3')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('#0.5 c4')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('0.75 c4')).toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                expect(highlightCams('#1.0 cam')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('2.0 cam')).toBeHighlightedWith(
                    'rgb(232, 199, 14)'
                );
                expect(highlightCams('#3.0 cams')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
                expect(highlightCams('4.0 cams')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('#5.0 camalot')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('6.0 camalot')).toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
                expect(highlightCams('#7.0 camalots')).toBeHighlightedWith(
                    'rgb(203, 27, 49)'
                );
                expect(highlightCams('8.0 camalots')).toBeHighlightedWith(
                    'rgb(232, 199, 14)'
                );
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
    describe('bd c3', () => {
        describe('finds', () => {
            it('colors', () => {
                expect(highlightCams('gray c3')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('000 c3')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('#00 c3')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
            });
        });
        describe('doesnt find', () => {
            it('numbers', () => {
                expect(highlightCams('000')).not.toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('00')).not.toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('0')).not.toBeHighlightedWith(
                    'rgb(0, 158, 58)'
                );
            });
        });
    });
    describe('mt mc', () => {
        describe('finds', () => {
            it('colors', () => {
                expect(highlightCams('gray metolius')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('purple mc')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('blue mastercam')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('00 metolius')).toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('0 mc')).toBeHighlightedWith(
                    'rgb(117, 102, 201)'
                );
                expect(highlightCams('1 mastercam')).toBeHighlightedWith(
                    'rgb(17, 119, 204)'
                );
            });
        });
        describe('doesnt find', () => {
            it('numbers', () => {
                expect(highlightCams('0 metolius')).not.toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('0 mc')).not.toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
                expect(highlightCams('0 mastercam')).not.toBeHighlightedWith(
                    'rgb(155, 161, 183)'
                );
            });
        });
    });
});
