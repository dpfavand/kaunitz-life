import React from 'react';
import { Page, Post } from '../_includes/types/data';
import PageWrapper from '../_includes/components/PageWrapper';

// types are used instead of proptypes
// yay for provably correct templates
interface IndexProps {
  // whats: Topic[];
  page: Page;
  // site: Site;
  posts: Post[];
}

// props are provided by Eleventy - they combine eleventy metadata
// and the data from _data/*.js
export default function Index({ page, posts }: IndexProps) {
  return (
    <PageWrapper page={page} title="Posts">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
