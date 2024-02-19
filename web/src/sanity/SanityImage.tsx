import ImageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import React from 'react';

import {client} from '../../lib/sanityClient';

interface Props {
  imageBlock: any;
  className?: string;
  onClick?: () => void;
}

const builder = ImageUrlBuilder(client);

function urlFor(source: Props['imageBlock']) {
  return builder.image(source);
}

const SanityImage: React.FC<Props> = ({imageBlock, className, onClick}) => {
  const {width, height} = imageBlock.image.asset.metadata.dimensions ?? {};

  return (
    <Image
      src={imageBlock && urlFor(imageBlock?.image).url()}
      alt={imageBlock?.alt}
      className={className}
      width={width || 100}
      height={height || 100}
      placeholder='blur'
      blurDataURL={imageBlock?.image?.asset?.metadata?.lqip}
      onClick={onClick}
    />
  );
};

export default SanityImage;
