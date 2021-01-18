import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import PageWrapper from '../components/PageWrapper';
import { Post, Page } from '../types/data';
import TopicInlineCard from '../components/TopicInlineCard';

interface PostPageProps {
  page: Page;
  post: Post;
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

const serializers = {
  types: {
    code: (block: any) => (
      <pre data-language={block.node.language}>
        <code>{block.node.code}</code>
      </pre>
    ),
    topic: (block: any) => <TopicInlineCard item={block.node} />,
  },
};

export default function PostPage(props: PostPageProps) {
  const {
    page,
    post,
    pagination: { nextPageHref, previousPageHref, page: relatedPages },
  } = props;

  return (
    <PageWrapper page={page} title={post.title}>
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} serializers={serializers} />
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
