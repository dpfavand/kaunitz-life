import React from 'react';
import { Topic } from '../types/data';

interface TopicDirectoryProps {
  items: Topic[];
  pathPrefix?: string;
  // headings in a list should never be h1
  HeadingTag?: 'h2' | 'h3';
}

export default function TopicDirectory(props: TopicDirectoryProps) {
  const { items, pathPrefix, HeadingTag = 'h2' } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <HeadingTag>
            <a href={`/${pathPrefix}/${item.slug}`}>{item.title}</a>
          </HeadingTag>
          <p>{item.shortDescription}</p>
        </li>
      ))}
    </ul>
  );
}
