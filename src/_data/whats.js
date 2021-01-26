const client = require('../../sanityClient');

const query = `
  *[_type == 'topic' && kind == 'does'] {
    title,
    introduction,
    'slug': slug.current,
    'logo': logo.asset ->,
    promo 
  }
`;

module.exports = client.fetch(query);
