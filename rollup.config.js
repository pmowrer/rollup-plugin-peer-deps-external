import babel from 'rollup-plugin-babel';

export default {
  entry: './src/index.js',
  plugins: [
    babel(),
  ],
  targets: [
    {
      dest: './dist/rollup-plugin-peer-deps-external.js',
      format: 'cjs',
    },
    {
      dest: './dist/rollup-plugin-peer-deps-external.module.js',
      format: 'es',
    }
  ],
}
