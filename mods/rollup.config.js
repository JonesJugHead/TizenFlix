import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { string } from 'rollup-plugin-string';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'userScript.js',
  output: {
    file: '../dist/userScript.js',
    format: 'iife',
    name: 'FlemmixTV',
    sourcemap: !production,
  },
  plugins: [
    string({
      include: ['**/*.css'],
    }),
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              // Tizen 5.0+ (Chromium 56+)
              chrome: '56',
            },
            modules: false,
          },
        ],
      ],
      exclude: 'node_modules/**',
    }),
    production && terser(),
  ].filter(Boolean),
};
