import React from 'react';
import { generateTopicUrl } from '../generateUrl';
import { Topic } from '../types/data';
import Image from './Image';

interface TopicInlineCardProps {
  item: Topic;
}

export default function TopicInlineCard(props: TopicInlineCardProps) {
  const { item } = props;

  if (!item) {
    return <></>;
  }

  const url = generateTopicUrl(item);

  return (
    <a className="topic-inline-card" href={url}>
      <Image source={item.logo} maxWidth={36} />
      <div>{item.title}</div>

      <p>{item.introduction}</p>
    </a>
  );
}
