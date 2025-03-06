import 'vitest'

// from https://vitest.dev/guide/extending-matchers
interface CustomMatchers<R = unknown> {
  toBeHighlightedWith: (color: string) => R
}

declare module 'vitest' {
  // TODO: avoid eslint disable?
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Assertion<T> extends CustomMatchers<T> { };
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers { };
}