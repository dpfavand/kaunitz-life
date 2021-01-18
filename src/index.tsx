import React from 'react';
import { Page, Post, Site } from './_includes/types/data';
import PageWrapper from './_includes/components/PageWrapper';
import TopicDirectory from './_includes/components/TopicDirectory';

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

  const last5Posts = posts.filter((_, index) => index < 5);
  return (
    <PageWrapper page={page} title={site.siteTitle} site={site}>
      <h1>{site.siteTitle}</h1>
      <h2>{site?.whatIDo?.title}</h2>
      <p>{site.whatIDo?.subtitle}</p>
      <TopicDirectory items={site.whatIDo?.featuredTopics} pathPrefix="does" HeadingTag="h3" />

      <h2>Recent Posts</h2>
      <ul>
        {last5Posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.promo?.heading || post.title}</a>
          </li>
        ))}
        <li>
          <a href="/posts">All posts</a>
        </li>
      </ul>
    </PageWrapper>
  );
}
