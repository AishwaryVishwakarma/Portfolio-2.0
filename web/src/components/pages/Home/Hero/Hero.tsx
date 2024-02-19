import {HomeData} from '@/app/page';
import SanityImage from '@/sanity/SanityImage';
import SanityRichText from '@/sanity/SanityRichText';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const HomeHero: React.FC<HomeData['hero']> = (data) => {
  const {
    title,
    coloredText,
    description,
    image: profileImage,
    resume,
    cta2,
  } = data ?? {};

  return (
    <section className={styles.homeHero} id='#about'>
      <video autoPlay muted loop>
        <source src='stars.mp4' type='video/mp4' />
      </video>
      <div className={styles.leftContainer}>
        <div className={styles.heading}>
          {title}{' '}
          {/* <span>
              {!isMobile ? (
                <TypewriterComponent
                  options={{
                    strings: coloredText,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                  }}
                />
              ) : (
                coloredText
              )}
            </span> */}
          <span>{coloredText}</span>
        </div>
        <SanityRichText className={styles.description} block={description} />
        <div className={styles.ctaContainer}>
          {/* <SanityLink block={cta1} className={styles.cvCta} /> */}
          <Link
            href={resume.url}
            className={styles.resume}
            download
            target='_blank'
          >
            {resume?.text}
          </Link>
          <Link href={cta2.url ?? '#contact'} className={styles.contact}>
            {cta2?.text}
          </Link>
        </div>
      </div>
      <SanityImage imageBlock={profileImage} className={styles.profileImage} />
    </section>
  );
};

export default HomeHero;
