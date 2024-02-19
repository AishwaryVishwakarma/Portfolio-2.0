import {PortableText} from '@portabletext/react';
import {type TypedObject} from '@portabletext/types';

interface Props {
  block: TypedObject;
  className?: string;
}

const SanityRichText = ({block, className}: Props) => {
  return (
    <div className={className}>
      <PortableText value={block} />
    </div>
  );
};

export default SanityRichText;
