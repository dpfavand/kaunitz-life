import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '../../../sanityClient';

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface ImageProps {
  source: SanityImageSource;
  maxWidth?: number;
  alt?: string;
  className?: string;
}

export default function Image(props: ImageProps) {
  const { source, maxWidth, alt = '', className } = props;

  let image = urlFor(source).format('png');

  if (maxWidth) {
    image = image.maxWidth(maxWidth);
  }

  const url = image.url() || undefined;

  return <img src={url} alt={alt} className={className} />;
}
