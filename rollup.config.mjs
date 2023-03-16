import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
  input: "./editor.mjs",
  output: {
    file: "./editor.bundle.js",
    format: "iife"
    //format: 'es'
  },
  plugins: [nodeResolve( { dedupe: ["@codemirror/state"] } )]
}

