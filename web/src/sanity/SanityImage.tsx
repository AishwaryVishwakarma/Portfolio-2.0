import {createImageUrlBuilder} from '@sanity/image-url';
import Image from 'next/image';
import React from 'react';

import {client} from '../../lib/sanityClient';

interface Props {
  imageBlock: any;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

const builder = createImageUrlBuilder(client);

function urlFor(source: Props['imageBlock']) {
  return builder.image(source);
}

const SanityImage: React.FC<Props> = ({
  imageBlock,
  className,
  onClick,
  priority = false,
}) => {
  // Guard against missing/partial image data so a single incomplete CMS
  // document can't crash the whole page render.
  const asset = imageBlock?.image?.asset;
  if (!asset) return null;

  const {width, height} = asset.metadata?.dimensions ?? {};

  return (
    <Image
      src={urlFor(imageBlock.image).url()}
      alt={imageBlock?.alt ?? ''}
      className={className}
      width={width || 100}
      height={height || 100}
      placeholder={asset.metadata?.lqip ? 'blur' : 'empty'}
      blurDataURL={asset.metadata?.lqip}
      onClick={onClick}
      priority={priority}
    />
  );
};

export default SanityImage;
