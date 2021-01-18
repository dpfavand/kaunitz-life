const { Helmet } = require('react-helmet');

function removeHelmetDataAttribute(str) {
  return str.replace(/data-react-helmet="true"/g, '').replace(/ {2,}/g, ' ');
}

function postProcess({ html }) {
  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html ${removeHelmetDataAttribute(helmet.htmlAttributes.toString())}>
      <head>
        ${removeHelmetDataAttribute(helmet.title.toString())}
        ${removeHelmetDataAttribute(helmet.meta.toString())}
        ${removeHelmetDataAttribute(helmet.link.toString())}
      </head>
      <body ${removeHelmetDataAttribute(helmet.bodyAttributes.toString())}>
        <div id="content">
          ${html}
        </div>
      </body>
    </html>
  `;
}

module.exports = postProcess;
