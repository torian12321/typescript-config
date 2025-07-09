<p align="center">
  <a href="https://github.com/torian12321/typescript-config/actions/workflows/CI.yml"><img src="https://github.com/torian12321/typescript-config/actions/workflows/CI.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://github.com/torian12321/typescript-config/releases/latest" title="Latest Release">
  <img alt="GitHub release" src="https://img.shields.io/github/v/release/torian12321/typescript-config" />
  </a>
</p>

# Config Typescript

Shared configuration to use with [Typescript](https://www.typescriptlang.org/).

## Usage

To use Prettier rules in your project, follow [usage Examples](./doc/README.md)

## Typescript configurations

There are 3 available typescript configuration files:

- `base.json`: For a basic typescript project.
- `vite.json`: For a typescript project build with vite.
- `vite-react.json`: For a react typescript project build with vite.

All configurations inherit from `base.json` file, and `vite.json` is also the reference for `vite-react.json` as the diagram below shows:

<p align="center">
  <img src="./docs/ts-config.drawio.svg" alt='ts-config diagram' />
</p>

## Environment Setup

Copy `.npmrc.example` as `.npmrc` and replace 'YOUR_GITHUB_TOKEN_HERE' with your [GitHub personal access token](https://github.com/settings/tokens) to allow publishing.
