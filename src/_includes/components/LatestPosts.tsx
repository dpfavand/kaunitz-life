import React from 'react';
import { Post } from '../types/data';

interface LatestPostProps {
  posts: Post[];
}

export default function LatestPosts({ posts }: LatestPostProps) {
  const last5Posts = posts.filter((_, index) => index < 5);

  if (!last5Posts.length) return null;

  return (
    <>
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
    </>
  );
}
