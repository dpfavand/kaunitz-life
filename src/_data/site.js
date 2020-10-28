const client = require('../../sanityClient');

const query = `
*[_id == 'siteStrings'] {
  siteTitle,
  whatIDo,
  toolsIUse,
  builtWith {
    title,
    logos[] {
      alt,
      asset->
    }
  },
}[0]
`;

module.exports = client.fetch(query);
