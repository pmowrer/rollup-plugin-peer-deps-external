const { resolve } = require('path');

export default function getPeerDeps(path = resolve(process.cwd(), 'package.json')) {
  try {
    const pkg = require(path);
    return Object.keys(pkg.peerDependencies);
  } catch (err) {
    return [];
  }
}
