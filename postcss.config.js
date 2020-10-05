const atImport = require("postcss-import");
const presetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    "postcss-import",
    [
      "postcss-preset-env",
      {
        features: {
          "custom-properties": false,
        },
        stage: 1,
      },
    ],
  ],
};
