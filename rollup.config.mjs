import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const defaultNodeResolveConfig = {};
const nodeResolvePlugin = nodeResolve(defaultNodeResolveConfig);

const commonPlugins = [
  nodeResolvePlugin,
  babel.default({
    presets: [['@babel/preset-env', { targets: '> 2%, not dead' }], '@babel/preset-react'],
    babelHelpers: 'bundled',
  }),
  commonjs(),
];

const developmentPlugins = [
  ...commonPlugins,
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

const productionPlugins = [
  ...commonPlugins,
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser({ mangle: false }),
];

const external = ['@monaco-editor/loader', 'react', 'prop-types'];
const globalsForUMD = {
  'react': 'React',
  'prop-types': 'PropTypes',
  '@monaco-editor/loader': 'monaco_loader',
};

export default [
  {
    input: 'src/index.js',
    external,
    output: {
      exports: 'named',
      dir: 'lib/cjs/',
      format: 'cjs',
      preserveModules: true,
    },
    plugins: commonPlugins,
  },
  {
    input: 'src/index.js',
    external,
    output: {
      exports: 'named',
      dir: 'lib/es/',
      format: 'es',
      preserveModules: true,
    },
    plugins: commonPlugins,
  },
  {
    input: 'src/index.js',
    external,
    output: {
      exports: 'named',
      file: 'lib/umd/monaco-react.js',
      format: 'umd',
      globals: globalsForUMD,
      name: 'monaco_react',
    },
    plugins: developmentPlugins,
  },
  {
    input: 'src/index.js',
    external,
    output: {
      exports: 'named',
      file: 'lib/umd/monaco-react.min.js',
      format: 'umd',
      globals: globalsForUMD,
      name: 'monaco_react',
    },
    plugins: productionPlugins,
  },
];
