
require('dotenv').config();
const eleventyReact = require("eleventy-plugin-react");
const { PurgeCSS } = require('purgecss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyReact);

  eleventyConfig.addWatchTarget("./src/styles.css");


  eleventyConfig.addTransform("inline-css", async function (content, outputPath) {
    const results = await new PurgeCSS().purge({
      content: [{
        raw: content,
        extension: 'html',
      }],
      css: [
        './src/styles.css'
      ]
    });

    const newStyle = `
    <style type="text/css">
      ${results.map(result => result.css).join('\n')}
    </style>
    </head>
    `

    const newContent = content.replace('</head>', newStyle)

    return newContent;
  })

  return {
    dir: {
      input: "src",
    },
  };
};