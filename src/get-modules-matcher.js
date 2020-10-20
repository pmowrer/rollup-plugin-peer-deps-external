import { memoize } from 'ramda';

/**
 * Creates a test function from a list of module names. The resulting function
 * accepts a string id and returns whether it matches a module in the list.
 *
 * The string id can be a module name (e.g. `lodash`) or a
 * "module path" (e.g. `lodash/map`).
 *
 * @param {Array} modulesNames Array of module names to match against.
 * @returns {function(String): (boolean)} Predicate function accepting a string id.
 */
export default function getModulesMatcher(modulesNames) {
  const modulesPattern = new RegExp(`^(${modulesNames.join("|")})($|/)`);
  return memoize(id => modulesPattern.test(id));
}
