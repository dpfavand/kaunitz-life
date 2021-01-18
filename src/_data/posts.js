const client = require('../../sanityClient');

const query = `
  *[_type == 'post'] {
    title,
    'slug': slug.current,
    introduction,
    'hero': hero.asset ->,
    body[] {
      ...,
      _type == "reference" => ^-> {
        ...,
        'slug': slug.current
      }
    },
    publishedAt,
    promo
  }
`;

module.exports = client.fetch(query);
