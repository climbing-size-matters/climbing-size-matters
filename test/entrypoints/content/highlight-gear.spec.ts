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
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('gray c4')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('purple cam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('green cam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('red camolot')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('yellow cams')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('blue camolots')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('#0.3')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#0.5 c4')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('0.75 c4')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#1.0 cam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('2.0 cam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#3.0 cams')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('4.0 cams')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#5.0 camolot')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('6.0 camolot')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#7.0 camolots')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('8.0 camolots')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
        });
        describe('doesnt find', () => {
            it('invalid bd cams', () => {
                const invalidSizes = ['#0.6', '#0.7', '#0.8', '#0.9'];
                invalidSizes.forEach((size) => {
                    expect(highlightCams(size)).not.toBeHighlightedWith(
                        'rgb(255, 245, 245)'
                    );
                });
            });
        });
    });
    describe('bd c3', () => {
        describe('finds', () => {
            it('colors', () => {
                expect(highlightCams('gray c3')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('000 c3')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('#00 c3')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
        });
        describe('doesnt find', () => {
            it('numbers', () => {
                expect(highlightCams('000')).not.toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('00')).not.toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('0')).not.toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
        });
    });
    describe('mt mc', () => {
        describe('finds', () => {
            it('colors', () => {
                expect(highlightCams('gray metolius')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('purple mc')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('blue mastercam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
            it('numbers', () => {
                expect(highlightCams('00 metolius')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('0 mc')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
                expect(highlightCams('1 mastercam')).toBeHighlightedWith(
                    'rgb(255, 245, 245)'
                );
            });
        });
    });
});
