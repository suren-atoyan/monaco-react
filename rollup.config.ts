import { type RollupOptions } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { swc } from "rollup-plugin-swc3";

const extensions = [".ts", ".tsx"];

const commonPlugins = [
  nodeResolve({ extensions }),
  commonjs(),
  swc({
    tsconfig: false,
    jsc: {
      target: "es2020",
      transform: {
        react: {
          useBuiltins: true,
        },
      },
      externalHelpers: true,
    },
  }),
];

const external = ["@monaco-editor/loader", "react"];
const globalsForUMD = {
  react: "React",
  "@monaco-editor/loader": "monaco_loader",
};

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    external,
    output: {
      exports: "named",
      dir: "lib/cjs/",
      format: "cjs",
      preserveModules: true,
    },
    plugins: commonPlugins,
  },
  {
    input: "src/index.ts",
    external,
    output: {
      exports: "named",
      dir: "lib/es/",
      format: "es",
      preserveModules: true,
    },
    plugins: commonPlugins,
  },
  {
    input: "src/index.ts",
    external,
    output: {
      exports: "named",
      file: "lib/umd/monaco-react.js",
      format: "umd",
      globals: globalsForUMD,
      name: "monaco_react",
    },
    plugins: [
      ...commonPlugins,
      replace({
        "process.env.NODE_ENV": `"development"`,
        preventAssignment: true,
      }),
    ],
  },
  {
    input: "src/index.ts",
    external,
    output: {
      exports: "named",
      file: "lib/umd/monaco-react.min.js",
      format: "umd",
      globals: globalsForUMD,
      name: "monaco_react",
    },
    plugins: [
      ...commonPlugins,
      replace({
        "process.env.NODE_ENV": `"production"`,
        preventAssignment: true,
      }),
      terser({ mangle: false }),
    ],
  },
];

export default config;
