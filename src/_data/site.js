const client = require('../../sanityClient');

// break out a subquery for reuse. This one matches
// a featuredTopics field that can appear on multiple other types
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
    subtitle,
  	${featuredTopicsSubquery}
	},
  toolsIUse {
    title,
    subtitle,
  	${featuredTopicsSubquery}
	},
  builtWith {
    title,
  	${featuredTopicsSubquery}
  },
}[0]
`;

module.exports = client.fetch(query);
