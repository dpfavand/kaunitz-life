
require('dotenv').config();
// const eleventyReact = require("eleventy-plugin-react");
const { PurgeCSS } = require('purgecss');
const sass = require('sass')
// const postProcess = require('./template')

let css = "";

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(eleventyReact, { 
  //   exts: ["ts", "tsx"],
  //   postProcess,
  // });

  eleventyConfig.addShortcode("image", function (asset, altText = "") {
    return `
    <img 
        src="${asset.url}" 
        alt='${altText}' 
        width="${asset.metadata.dimensions.width}"
        height="${asset.metadata.dimensions.height}"
    />
    `
  })

  eleventyConfig.addWatchTarget("./src/scss");

  eleventyConfig.on('beforeBuild', () => {
    const result = sass.renderSync({
      file: './src/scss/styles.scss'
    })

    css = result.css.toString();
  });


  eleventyConfig.addTransform("inline-css", async function (content, outputPath) {
    const results = await new PurgeCSS().purge({
      content: [{
        raw: content,
        extension: 'html',
      }],
      css: [
        {
          raw: css
        }
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