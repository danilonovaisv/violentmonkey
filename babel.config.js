module.exports = {
  extends: require.resolve('@gera2ld/plaid/config/babelrc'),
  presets: [
    ['@babel/preset-env', {
      ...process.env.BABEL_ENV !== 'test' && {
        modules: false,
      },
      useBuiltIns: false,
      bugfixes: true,
      // debug: true,
      loose: true,
    }],
  ],
  plugins: [
    './scripts/babel-plugin-safe-bind.js',
    ['@babel/plugin-transform-for-of', { assumeArray: true }],
    ['transform-modern-regexp', { useRe: true }],
  ],
};
