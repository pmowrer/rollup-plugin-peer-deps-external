export default function PeerDepsExternalPlugin(options = {}) {
  return {
    name: 'peer-deps-external',
    options: opts => {
      opts.external = getPeerDependencies().concat(opts.external);
      return opts;
    },
  };
}

function getPeerDependencies() {
  try {
    const { resolve } = require('path');
    const pkg = require(resolve(process.cwd(), 'package.json'));
    return Object.keys(pkg.peerDependencies);
  } catch(err) {
    return [];
  }
}
