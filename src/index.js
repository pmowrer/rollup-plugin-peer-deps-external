import { either, pipe } from 'ramda';
import externalToFn from './external-to-fn';
import getModulesMatcher from './get-modules-matcher';
import getPeerDeps from './get-peer-deps';

export default function PeerDepsExternalPlugin({packageJsonPath} = {}) {
  return {
    name: 'peer-deps-external',
    options: opts => {
      opts.external = either(
        // Retain existing `external` config
        externalToFn(opts.external),
        // Add `peerDependencies` to `external` config
        getModulesMatcher(getPeerDeps(packageJsonPath))
      );

      return opts;
    },
  };
}
