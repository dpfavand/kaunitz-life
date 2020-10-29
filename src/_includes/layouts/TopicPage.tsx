import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Page } from '../types/data';

interface TopicPageProps {
  topic: {
    title?: string;
    shortDescription?: string;
    slug?: string;
  };
  page: Page;
  title?: string;
}

export default function TopicPage(props: TopicPageProps) {
  const { topic, page, title } = props;

  // console.log('PROPs', props.tools);

  return (
    <PageWrapper page={page} title={title}>
      <h1>{topic?.title}</h1>
      <p>{topic?.shortDescription}</p>
    </PageWrapper>
  );
}
