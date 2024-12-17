
import { describe, it, expect } from 'vitest'
import { highlightCrackAndGearMentions } from "../../../src/entrypoints/content/highlight-gear";

// this creates a custom matcher so when we update what "highlighting" translates
// to we can update the logic in one place rather than in each test case
//
// right now it's a loose check on that the string is contained, we could improve this
// to add a special id to the element or something
expect.extend({
  toBeHighlightedWith(received, expected) {
    const { isNot } = this;
    return {
      pass: received.includes(expected),
      message: () => `${received} should${isNot ? ' not' : ''} be highlighted with ${expected}`
    }
  }
});

describe('higlightCrackAndGearMentions', () => {
  describe('cams', () => {
    describe('finds', () => {
      it('singular', () => {
        expect(highlightCrackAndGearMentions('cam')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('camalot')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('cam-a-lot')).toBeHighlightedWith('#FF0000');
      });

      it('plural', () => {
        expect(highlightCrackAndGearMentions('cams')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('camalots')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('cam-a-lots')).toBeHighlightedWith('#FF0000');
      });

      it('with trailing punctuation', () => {
        expect(highlightCrackAndGearMentions('cam,')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('camalots.')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('cam-a-lots ')).toBeHighlightedWith('#FF0000');
      });

      it('with initial capital (so Proper 💁🏼‍♂️)', () => {
        expect(highlightCrackAndGearMentions('Cams')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('Camalots')).toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('Cam-a-lots')).toBeHighlightedWith('#FF0000');
      });
    });

    describe('doesnt find', () => {
      it('mid-word', () => {
        expect(highlightCrackAndGearMentions('scam')).not.toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('camera')).not.toBeHighlightedWith('#FF0000');
        expect(highlightCrackAndGearMentions('Tengo la camisa negra')).not.toBeHighlightedWith('#FF0000');
      });
    });
  });
});