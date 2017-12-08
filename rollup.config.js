import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  plugins: [
    babel(),
  ],
  output: [
    {
      file: './dist/rollup-plugin-peer-deps-external.js',
      format: 'cjs',
    },
    {
      file: './dist/rollup-plugin-peer-deps-external.module.js',
      format: 'es',
    }
  ],
}
