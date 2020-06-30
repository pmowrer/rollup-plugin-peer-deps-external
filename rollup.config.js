import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from './dist/rollup-plugin-peer-deps-external.module.js';

export default {
  input: './src/index.js',
  plugins: [
    external(),
    resolve(),
    babel({
      include: 'src/**/*.js',
      exclude: 'node_modules/**',
    }),
  ],
  output: [
    {
      file: './dist/rollup-plugin-peer-deps-external.js',
      format: 'cjs',
    },
    {
      file: './dist/rollup-plugin-peer-deps-external.module.js',
      format: 'es',
    },
  ],
};
