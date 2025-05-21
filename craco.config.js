/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    configure: (webpackConfig) => {
      // Modify webpackConfig here if needed
      webpackConfig.watchOptions = {
        poll: 300, // Polling interval in milliseconds
      };

      return webpackConfig;
    },
  },
};
