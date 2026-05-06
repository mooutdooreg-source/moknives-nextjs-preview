import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  globalIgnores([
    '.git/**',
    '.github/**',
    '.next/**',
    '.vscode/**',
    'assets/**',
    'node_modules/**',
    'out/**',
    'build/**',
    'partials/**',
    'public/**',
    'next-env.d.ts',
    '**/*.css',
    '**/*.html',
    '**/*.json',
    '**/*.md',
  ]),
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
