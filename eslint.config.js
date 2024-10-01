import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser"; // Добавляем парсер для TypeScript

// export default {
//   ignores: ["dist"], // Список игнорируемых директорий
//   extends: [
//     "eslint:recommended", // Рекомендуемые правила ESLint
//     "plugin:@typescript-eslint/recommended", // Рекомендуемые правила TypeScript
//     "plugin:react/recommended", // Рекомендуемые правила для React
//     "plugin:react-hooks/recommended", // Рекомендуемые правила для React Hooks
//   ],
//   files: ["**/*.{ts,tsx}"], // Применение к файлам TypeScript
//   parser: tsParser, // Указываем парсер для TypeScript
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true, // Поддержка JSX
//     },
//   },
//   settings: {
//     react: {
//       version: "detect", // Автоматическое определение версии React
//     },
//   },
//   env: {
//     browser: true, // Окружение браузера
//     es2020: true,
//   },
//   plugins: ["react-hooks", "react-refresh", "@typescript-eslint"],
//   rules: {
//     ...reactHooks.configs.recommended.rules, // Правила для React Hooks
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//     "@typescript-eslint/no-unused-vars": ["error"], // Правило для TypeScript
//     "react/prop-types": "off", // Отключение проверки prop-types для TypeScript
//   },
// };
