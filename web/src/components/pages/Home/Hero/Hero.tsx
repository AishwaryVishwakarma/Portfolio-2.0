import AmbientVideo from '@/components/AmbientVideo/AmbientVideo';
import {HomeData} from '@/app/page';
import SanityImage from '@/sanity/SanityImage';
import SanityRichText from '@/sanity/SanityRichText';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const Hero: React.FC<HomeData['hero']> = (data) => {
  const {
    title,
    coloredText,
    description,
    image: profileImage,
    resume,
    cta2,
  } = data ?? {};

  return (
    <section id='about' className={styles.hero}>
      <AmbientVideo src='stars.mp4' />
      <SanityImage
        imageBlock={profileImage}
        className={styles.profileImage}
        priority
      />
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          {title} <br />
          <span>{coloredText}</span>
        </div>
        <SanityRichText className={styles.description} block={description} />
        <div className={styles.ctaContainer}>
          <Link
            href={resume?.url ?? '/Resume.pdf'}
            className={styles.resume}
            target='_blank'
          >
            {resume?.text ?? 'Resume'}
          </Link>
          <Link href={cta2?.url ?? '#contact'} className={styles.contact}>
            {cta2?.text ?? 'Contact'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
