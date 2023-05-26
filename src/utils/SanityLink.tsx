import React from 'react';

interface Props {
  block: {
    text: string;
    document?: any;
    url?: string;
    _type: string;
  };
  className?: CSSModuleClasses[string];
  target?: string;
}

const SanityLink: React.FC<Props> = ({block, className, target = '_blank'}) => {
  const {text, document, url, _type} = block ?? {};

  const getUrlFromId = (ref: string): string => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/8pt23m89/production/${id}.${extension}`;
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
