const sanity = require('@sanity/client');

const isProd = process.env.NODE_ENV === 'production';

const client = sanity({
  projectId: 'w22l13zm',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: isProd,
});

module.exports = client;
