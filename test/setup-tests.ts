import { expect } from "vitest";

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
        `${received} should${isNot ? " not" : ""} be highlighted with ${expected}`,
    };
  },
});
