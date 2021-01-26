import React from 'react';
import { Page, Post, Site } from './_includes/types/data';
import PageWrapper from './_includes/components/PageWrapper';
import TopicDirectory from './_includes/components/TopicDirectory';
import LatestPosts from './_includes/components/LatestPosts';

// types are used instead of proptypes
// yay for provably correct templates
interface IndexProps {
  page: Page;
  site: Site;
  posts: Post[];
}

// props are provided by Eleventy - they combine eleventy metadata
// and the data from _data/*.js
export default function Index(props: IndexProps) {
  const { page, site, posts } = props;

  return (
    <PageWrapper page={page} title={site.siteTitle} site={site}>
      <h1>{site.siteTitle}</h1>
      <h2>{site?.whatIDo?.title}</h2>
      <p>{site.whatIDo?.subtitle}</p>
      <TopicDirectory items={site.whatIDo?.featuredTopics} pathPrefix="does" HeadingTag="h3" />
      <LatestPosts posts={posts} />
    </PageWrapper>
  );
}
