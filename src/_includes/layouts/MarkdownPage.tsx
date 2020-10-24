import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function MarkdownPage(props: { content: any }) {
  const { content } = props;

  // console.log(props);

  return (
    <PageWrapper>
      Hello
      {/* This allows us to render markdown HTML */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageWrapper>
  );
}
