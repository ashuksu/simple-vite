import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default defineConfig([
    ...pluginQuery.configs['flat/recommended'],
    globalIgnores(['dist', '.tanstack']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
    },
    // Disable the Fast Refresh rule for TanStack route files
    {
        files: ['src/routes/**/*.{ts,tsx}'],
        rules: {
            'react-refresh/only-export-components': 'off',
        },
    },
])
