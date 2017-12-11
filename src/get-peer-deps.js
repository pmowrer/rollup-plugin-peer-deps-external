export default function getPeerDeps() {
  try {
    const { resolve } = require('path');
    const pkg = require(resolve(process.cwd(), 'package.json'));
    return Object.keys(pkg.peerDependencies);
  } catch (err) {
    return [];
  }
}
