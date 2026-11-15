# Release notes

Release notes live on GitHub Releases.

## Goal

Adopt [Conventional Commits](https://www.conventionalcommits.org/) and generate release notes from them. That workflow isn't designed yet.

## Current state

Use GitHub's [automatically generated release notes](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes): pass `--generate-notes` to `gh release create`, or click "Generate release notes" in the web UI. They list the PRs merged since the previous release. Edit them by hand if needed.
