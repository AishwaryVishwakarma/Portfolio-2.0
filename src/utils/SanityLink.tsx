import React from 'react';

interface Props {
  block: {
    text: string;
    document: any;
    _type: string;
  };
  className: CSSModuleClasses[string];
}

const SanityLink: React.FC<Props> = ({block, className}) => {
  const {text, document} = block ?? {};

  const getUrlFromId = (ref: string): string => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/8pt23m89/production/${id}.${extension}`;
  };

  const url = document && getUrlFromId(document?.asset?._ref);

  return (
    <a
      href={url}
      className={className}
      target='_blank'
      referrerPolicy='no-referrer'
    >
      {text}
    </a>
  );
};

export default SanityLink;
