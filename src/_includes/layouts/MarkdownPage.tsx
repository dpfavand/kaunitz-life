import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Page } from '../types/Page';

export default function MarkdownPage(props: { content: any; page: Page }) {
  const { content, page } = props;

  // console.log(props);

  return (
    <PageWrapper page={page}>
      {/* This allows us to render markdown HTML */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageWrapper>
  );
}
