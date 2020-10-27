import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Page } from '../types/Page';

export default function MarkdownPage(props: { content: any; page: Page; title?: string }) {
  const { content, page, title } = props;

  return (
    <PageWrapper page={page} title={title}>
      {/* This allows us to render markdown HTML */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageWrapper>
  );
}
