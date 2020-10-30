import React from 'react';
import { Topic } from '../types/data';
import Image from './Image';

interface TopicDirectoryProps {
  items?: Topic[];
  pathPrefix?: string;
  // headings in a list should never be h1
  HeadingTag?: 'h2' | 'h3';
}

export default function TopicDirectory(props: TopicDirectoryProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items, pathPrefix, HeadingTag = 'h2' } = props;

  if (!items) {
    return <></>;
  }

  return (
    <ul className="topic-list">
      {items.map((item) => (
        <li key={item.title}>
          <Image source={item.logo} className="topic-logo" maxWidth={96} />
          <HeadingTag>
            {/* <a href={`/${pathPrefix}/${item.slug}`}> */}
            {item.title}
            {/* </a> */}
          </HeadingTag>
          <p>{item.shortDescription}</p>
        </li>
      ))}
    </ul>
  );
}
