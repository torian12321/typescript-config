# Usage Examples

This directory contains examples of how to use the different TypeScript configurations.

## Basic TypeScript Project

Create a `tsconfig.json` in your project root:

```json
{
  "extends": "@torian12321/typescript-config/base.json",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Vite Project

Create a `tsconfig.json` in your project root:

```json
{
  "extends": "@torian12321/typescript-config/vite.json",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Vite + React Project

Create a `tsconfig.json` in your project root:

```json
{
  "extends": "@torian12321/typescript-config/vite-react.json",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Customization

You can override any settings from the base configurations:

```json
{
  "extends": "@torian12321/typescript-config/vite-react.json",
  "include": ["src/**/*", "tests/**/*"],
  "exclude": ["node_modules", "dist"],
  "compilerOptions": {
    "strict": false,
    "outDir": "./build"
  }
}
```
