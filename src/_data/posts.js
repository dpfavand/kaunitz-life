function generatePost(id) {
  return {
    slug: id,
    title: `${id} Title`,
    body: `${id} body`,
  };
}

async function getPosts() {
  return ['First', 'Second', 'Third'].map(generatePost);
}

module.exports = getPosts;
