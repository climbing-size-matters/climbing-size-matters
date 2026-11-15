# Releases

What is a release?

Ultimately, a bundled browser extension (`.crx` file) that gets uploaded
to browser extension store.

How many versions do we need to support?

Since browsers generally only support an ever-increasing version, there is no need
to patch older versions, and therefore no need for branches for patching older versions.

We release directly from the main branch, using git tags to tag at which point
a version should be released with / was released with.

We have only fleshed out the full process for Chrome so far. Firefox is TBD, though we can
develop and upload manually as we see fit.

## Goal
1. version: semver e.g. `1.3.2`
1. git tag: `v1.3.2`
1. release candidate tag: `v1.3.0-rc.1` -> triggers CI -> automates gh release (not implemented yet)
1. github release with release notes
1. browser extension store release: automatically uploaded, manually reviewed + published

## Process

We follow [trunk-based development](https://trunkbaseddevelopment.com/) and release from tags on `main`.

- Everyone commits to `main` through PRs.
- `package.json` `version` is the only source of the version. WXT copies it into the manifest.
- `main` holds the version of the last release.

## Cutting a release

1. Open a PR on `main` that bumps the version:

    ```sh
    pnpm version X.Y.Z --no-git-tag-version
    ```

2. After it's merged, tag that commit and create the GitHub Release:

    ```sh
    git switch main
    git pull
    git tag vX.Y.Z
    git push origin vX.Y.Z
    pnpm zip
    gh release create vX.Y.Z dist/climbing-size-matters-X.Y.Z-chrome.zip
    ```

Patch releases work the same way: the next patch version, released from `main`.

## Release notes

See [release-notes.md](release-notes.md).

## Store upload

See [publishing.md](publishing.md).
