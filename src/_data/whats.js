const client = require('../../sanityClient');

const query = `
  *[_type == 'whatIDo'] {
    title,
    shortDescription,
    'slug': slug.current
  }
`;

module.exports = client.fetch(query);
