import React from 'react';
import {projectId, dataset} from '../client';

interface Props {
  block: any
  className?: CSSModuleClasses[string];
  target?: string;
}

const SanityLink: React.FC<Props> = ({block, className, target = '_blank'}) => {
  const {text, document, url, _type} = block ?? {};

  const getUrlFromId = (ref: string): string => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
  };

  const documentUrl = document && getUrlFromId(document?.asset?._ref);

  return (
    <a
      href={_type === 'fileCta' ? documentUrl : url}
      className={className}
      target={target}
      referrerPolicy='no-referrer'
    >
      {text}
    </a>
  );
};

export default SanityLink;
