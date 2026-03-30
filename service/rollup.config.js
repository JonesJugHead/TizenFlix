import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'service.js',
  output: {
    file: '../dist/service.js',
    format: 'cjs',
  },
  plugins: [nodeResolve(), commonjs()],
  external: ['tizen', 'webapis'],
};
