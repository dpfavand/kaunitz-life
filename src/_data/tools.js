const client = require('../../sanityClient');

const query = `
  *[_type == 'topic' && kind == 'tool'] {
    title,
    shortDescription,
    'slug': slug.current,
    'logo': logo.asset ->
  }
`;

module.exports = client.fetch(query);
