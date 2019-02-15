module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    "prettier/vue"
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    $nuxt: true
  },
  // add your custom rules here
  rules: {
    'no-console': 'off'
  }
}
