const client = require('../../sanityClient');

const featuredTopicsSubquery = `
featuredTopics[]-> {
      'slug': slug.current,
      title,
      shortDescription,
      'logo': logo.asset ->,
      url,
    }
`;

const query = `
*[_id == 'siteStrings'] {
  siteTitle,
  whatIDo {
  	title,
  	${featuredTopicsSubquery}
	},
  toolsIUse,
  builtWith {
    title,
  	${featuredTopicsSubquery}
  },
}[0]
`;

module.exports = client.fetch(query);
