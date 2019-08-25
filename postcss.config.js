const atImport = require("postcss-import");
const presetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    atImport(),
    presetEnv({
      stage: 1,
      features: {
        "custom-properties": false,
      },
    }),
  ],
};
