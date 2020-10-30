const client = require('../../sanityClient');

const query = `
  *[_type == 'topic' && kind == 'does'] {
    title,
    shortDescription,
    'slug': slug.current,
    'logo': logo.asset ->
  }
`;

module.exports = client.fetch(query);
