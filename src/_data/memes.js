const client = require('../../sanityClient');

const query = `
  *[_type == 'kaunitzMeme'] {
    title,
    'slug': slug.current,
    'image': image.asset ->
    publishedAt
  }
`;

module.exports = client.fetch(query);
