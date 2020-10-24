
const eleventyReact = require("eleventy-plugin-react");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyReact
    , {
      babelConfig({ isBrowser }) {
        return {
          presets: [
            ["@babel/preset-react"],
            ["@babel/preset-typescript"],
            [
              "@babel/preset-env",
              isBrowser
                ? {
                  modules: false,
                  targets: "> 0.25%, not dead",
                }
                : {
                  modules: "commonjs",
                  targets: {
                    node: process.versions.node,
                  },
                },
            ],
          ],
        };
      },
    }
  );

  return {
    dir: {
      input: "src",
    },
  };
};