import React from 'react';
import { What, Page, Site } from './_includes/types/data';
import PageWrapper from './_includes/components/PageWrapper';

// types are used instead of proptypes
// yay for provably correct templates
interface IndexProps {
  whats: What[];
  page: Page;
  site: Site;
}

// props are provided by Eleventy - they combine eleventy metadata
// and the data from _data/*.js
export default function Index({ whats, page, site }: IndexProps) {
  return (
    <PageWrapper page={page}>
      <h1>{site.siteTitle}</h1>
      <h2>{site?.whatIDo?.title}</h2>
      <ul>
        {whats.map((what) => (
          <li>
            <h3>{what.title}</h3>
            <p>{what.shortDescription}</p>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
