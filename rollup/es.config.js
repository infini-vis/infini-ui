import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './esm/index.js',
  plugins: [
    resolve({ module: true }),
    terser(),
    postcss({
      plugins: [
        require('postcss-nested'),
        require('cssnano')({
          preset: 'default',
        }),
      ],
      modules: true,
      extract: true,
      extract: 'style.css',
    }),
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    exports: 'named',
    file: './es.js',
    format: 'iife',
    name: 'iui',
  },
};
