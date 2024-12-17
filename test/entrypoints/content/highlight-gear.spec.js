
import { describe, it, expect } from 'vitest'
import { highlightCrackAndGearMentions } from "../../../src/entrypoints/content/highlight-gear";

const capitalizeFirstLetter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

describe('higlight gear words', () => {
  it('finds cams', () => {
    expect(highlightCrackAndGearMentions('cam')).toEqual(expect.stringContaining('#FF0000'));
    expect(highlightCrackAndGearMentions('camalot')).toEqual(expect.stringContaining('#FF0000'));
    expect(highlightCrackAndGearMentions('cam-a-lot')).toEqual(expect.stringContaining('#FF0000'));
  })
})