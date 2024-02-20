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
      <video autoPlay muted loop>
        <source src='stars.mp4' type='video/mp4' />
      </video>
      <SanityImage imageBlock={profileImage} className={styles.profileImage} />
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          {title} <br />
          <span>{coloredText}</span>
        </div>
        <SanityRichText className={styles.description} block={description} />
        <div className={styles.ctaContainer}>
          <Link
            href={resume.url ?? '/Resume.pdf'}
            className={styles.resume}
            target='_blank'
          >
            {resume?.text}
          </Link>
          <Link href={cta2.url ?? '#contact'} className={styles.contact}>
            {cta2?.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
