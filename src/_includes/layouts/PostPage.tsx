import React from 'react';
import PageWrapper from '../components/PageWrapper';

interface PostPageProps {
  post: {
    title: string;
    body: string;
  };
  pagination: {
    nextPageHref?: string;
    previousPageHref?: string;
    page: {
      next?: {
        title: string;
      };
      previous?: {
        title: string;
      };
    };
  };
}

export default function PostPage(props: PostPageProps) {
  const {
    post,
    pagination: { nextPageHref, previousPageHref, page: relatedPages },
  } = props;

  // console.log(relatedPages);

  return (
    <PageWrapper>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <nav>
        <ul>
          {relatedPages.next && (
            <li>
              <a href={nextPageHref}>Next: {relatedPages.next.title}</a>
            </li>
          )}
          {relatedPages.previous && (
            <li>
              <a href={previousPageHref}>Previous: {relatedPages.previous.title}</a>
            </li>
          )}
        </ul>
      </nav>
    </PageWrapper>
  );
}
