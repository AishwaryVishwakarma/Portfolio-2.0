'use client';

import AmbientVideo from '@/components/AmbientVideo/AmbientVideo';
import {HomeData} from '@/app/page';
import useSlideInOnView from '@/hooks/useSlideInOnView';
import SanityRichText from '@/sanity/SanityRichText';
import React from 'react';
import {TextGlitchEffect} from 'react-text-glitch-effect';

import styles from './styles.module.scss';

const Experience: React.FC<HomeData['experience']> = (data) => {
  const {heading, experienceCards = []} = data ?? {};

  const cardsContainerRef = useSlideInOnView<HTMLUListElement>(styles.slideIn, {
    threshold: 0.51,
  });

  return (
    <section id='experience' className={styles.experienceWrapper}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.details}>
        <ul ref={cardsContainerRef} className={styles.cardsContainer}>
          {experienceCards.map((card) => {
            const {title, date, description, _key} = card ?? {};
            return (
              <li key={_key} className={styles.card}>
                <div className={styles.bullet} />
                <div className={styles.content}>
                  <TextGlitchEffect
                    text={title}
                    className={styles.title}
                    letterCase='lowercase'
                    speed={20}
                  />
                  <div className={styles.date}>{date}</div>
                  <SanityRichText
                    block={description}
                    className={styles.description}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <AmbientVideo src='earth.mp4' className={styles.earth} />
      </div>
    </section>
  );
};

export default Experience;
