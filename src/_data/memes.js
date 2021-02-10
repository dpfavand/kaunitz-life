const client = require('../../sanityClient');

const query = `
  *[_type == 'kaunitzMeme'] {
    title,
    'slug': slug.current,
    'image': image.asset ->,
    'altText': image.alt,
    publishedAt
  }
`;

module.exports = client.fetch(query);
