import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './esm/index.js',
  plugins: [
    includePaths({
      include: {},
    }),
    resolve({ module: true }),
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
    babel({ presets: ['@babel/preset-env'] }),
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    exports: 'named',
    file: './index.js',
    format: 'iife',
    name: 'iui',
  },
};
