import React from 'react';
import { Page, Site } from './_includes/types/data';
import PageWrapper from './_includes/components/PageWrapper';
import TopicDirectory from './_includes/components/TopicDirectory';

// types are used instead of proptypes
// yay for provably correct templates
interface IndexProps {
  page: Page;
  site: Site;
}

// props are provided by Eleventy - they combine eleventy metadata
// and the data from _data/*.js
export default function Index({ page, site }: IndexProps) {
  return (
    <PageWrapper page={page} title={site.siteTitle} site={site}>
      <h1>{site.siteTitle}</h1>
      <h2>{site?.whatIDo?.title}</h2>
      <TopicDirectory items={site.whatIDo?.featuredTopics} pathPrefix="does" HeadingTag="h3" />
    </PageWrapper>
  );
}
