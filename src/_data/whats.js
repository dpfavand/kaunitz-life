const client = require('../../sanityClient');

const query = `
  *[_type == 'toolIUse'] {
    title,
    shortDescription,
    'slug': slug.current
  }
`;

module.exports = client.fetch(query);
