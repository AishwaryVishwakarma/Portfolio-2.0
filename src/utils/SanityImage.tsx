import ImageUrlBuilder from '@sanity/image-url';
import React from 'react';
import {client} from '../client';

interface Props {
  imageBlock: any;
  className?: CSSModuleClasses[string];
  alt?: string;
}

const builder = ImageUrlBuilder(client);

function urlFor(source: object) {
  return builder.image(source);
}

const SanityImage: React.FC<Props> = ({imageBlock, className, alt}) => {
  return (
    <img
      src={imageBlock && urlFor(imageBlock?.image).url()}
      alt={imageBlock?.alt || alt}
      className={className}
    />
  );
};

export default SanityImage;
