# Rollup Plugin Peer Deps External
Rollup plugin to automatically add a library's `peerDependencies` to the bundle's `external`.

## Motivation
When bundling a library using rollup, we generally want to keep from including 
[`peerDependencies`](https://nodejs.org/en/blog/npm/peer-dependencies/) since they are expected to be 
provided by the consumer of the library. By excluding these dependencies, we keep bundle size down and 
avoid bundling duplicate dependencies.

We can achieve this using the rollup [`external`](https://github.com/rollup/rollup/wiki/JavaScript-API#external)
configuration option, providing it a list of the peer dependencies to exclude from the bundle. 
This plugin automates the process, automatically adding a library's `peerDependencies` to the `external` configuration.

## Installation

### npm
```bash
npm install --save-dev rollup-plugin-peer-deps-external
```

### yarn
```bash
yarn add --dev rollup-plugin-peer-deps-external
```

## Usage
```javascript
// Add to plugins array in rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  plugins: [
    peerDeps(),
  ],
}
```
