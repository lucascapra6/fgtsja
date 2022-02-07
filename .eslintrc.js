module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:vue/essential", "standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    parser: "babel-eslint",
  },
  plugins: ["vue", "prettier"],

  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    semi: ["error", "always"],
    camelcase: ["off"],
    "vue/no-mutating-props": "off",
    "vue/valid-v-bind-sync": "off",
    "vue/comment-directive": "off",
    "vue/valid-v-slot": "off",
    "no-debugger": "off",
    "linebreak-style": 0,
  },
};
