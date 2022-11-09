// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src/pages'),
  publicDir: resolve(__dirname, 'public'),
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    outDir: resolve(__dirname, './lib'),
    rollupOptions: {
      input: {
        home: resolve(__dirname, './src/pages/home/index.html'),
        flavors: resolve(__dirname, './src/pages/flavors/index.html'),
        'create-flavor': resolve(__dirname, './src/pages/create-flavor/index.html'),
      },
    },
  },
});
