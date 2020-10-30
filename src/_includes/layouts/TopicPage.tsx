import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Page, Topic } from '../types/data';
import Image from '../components/Image';

interface TopicPageProps {
  topic: Topic;
  page: Page;
}

export default function TopicPage(props: TopicPageProps) {
  const { topic, page } = props;

  // console.log('PROPs', props.tools);

  return (
    <PageWrapper page={page} title={topic?.title}>
      <Image source={topic.logo} className="topic-logo" maxWidth={96} />
      <h1>{topic?.title}</h1>
      <p>{topic?.shortDescription}</p>
    </PageWrapper>
  );
}
