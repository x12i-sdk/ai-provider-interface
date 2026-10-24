# @x12i/ai-provider-interface usage example

SDK-first Provider AI Interface for router-adapter architecture. Supports sync, streaming, and batch operations with lossless raw vendor responses.

This consuming application demonstrates **check a provider call envelope before dispatch** using the published npm package, pinned to `3.2.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Implement a provider adapter with the shared synchronous or streaming contract.
- Preserve raw vendor output while returning the normalized response to a router.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-provider-interface)
- [Implementation monorepo](https://github.com/x12i/ai-provider-interface)
- [Reviewed package source](https://github.com/x12i/ai-provider-interface/tree/6b833ff9e5256f88650c33f2cd270cb9b5d38788/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
