/// <reference types="vite/client" />
import { defineConfig } from "vite";
import Checker from 'vite-plugin-checker'
import react from "@vitejs/plugin-react";
import { resolve } from 'path'
import fs from 'fs/promises'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

export default defineConfig({
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  server: {
    port: 4000,
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  plugins: [
    react(),
    // Checker({
    //   typescript: true,
    //   overlay: true,
    //   // eslint: {
    //   //   files: 'src',
    //   //   extensions: ['.ts', '.tsx']
    //   // }
    // })
  ],
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.jsx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [
  //       {
  //         name: 'load-js-files-as-jsx',
  //         setup(build) {
  //           build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
  //             loader: 'jsx',
  //             contents: await fs.readFile(args.path, 'utf8'),
  //           }))
  //         },
  //       },
  //     ],
  //   },
  // },
});
