import { isFunction } from 'lodash-es';

/**
 * Utility function mapping a Rollup config's `external` option into a function.

 * In Rollup, the `external` config option can be provided as "either a function
 * that takes an id and returns true (external) or false (not external), or an
 * Array of module IDs, or regular expressions to match module IDs, that should
 * remain external to the bundle. Can also be just a single ID or regular
 * expression." (https://rollupjs.org/guide/en/#external)
 *
 * An `external` configuration in string/regexp/array format can be represented
 * in the function format, but not vice-versa. This utility accepts either format
 * and returns the function representation such that we can easily retain the user's
 * configuration while simultaneously appending peer dependencies to it.
 *
 * @param {String|RegExp|Array|Function} external The `external` property from Rollup's config.
 * @returns {Function} Function equivalent of the passed in `external`.
 */
export default function externalToFn(external) {
  if (isFunction(external)) {
    return external;
  } else if (typeof external === 'string') {
    return id => external === id;
  } else if (external instanceof RegExp) {
    return id => external.test(id);
  } else if (Array.isArray(external)) {
    return id =>
      external.some(module =>
        module instanceof RegExp ? module.test(id) : module === id
      );
  } else {
    throw new Error(
      `rollup-plugin-peer-deps-external: 'external' option must be a function or an array.`
    );
  }
}
