'use client';

import {HomeData} from '@/app/page';
import useMediaQuery from '@/hooks/useMediaQuery';
import SanityImage from '@/sanity/SanityImage';
import Link from 'next/link';
import React from 'react';
import {useInView} from 'react-intersection-observer';
import {TextGlitchEffect} from 'react-text-glitch-effect';

import styles from './styles.module.scss';

const HomeProjects: React.FC<HomeData['projects']> = (data) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  const {heading, projectCards = []} = data ?? {};

  const cardsContainerRef = React.useRef<HTMLDivElement | null>(null);

  const {ref: cardRef, inView: cardInView} = useInView({
    threshold: isMobile ? 0.2 : 0.4,
    triggerOnce: true,
  });

  return (
    <section id='projects' className={styles.projectsWrapper}>
      <div className={styles.heading}>{heading}</div>
      <div ref={cardsContainerRef} className={styles.cardsContainer}>
        {projectCards.map((card, idx) => {
          const {title, description, techStack, image, live, github, _key} =
            card ?? {};

          // Calculating delay of animation (styles are in App.css)
          const delayStyle = isMobile ? 'delay0' : `delay${idx % 3}`;

          return (
            <div
              className={`${styles.card} ${
                cardInView && styles.fadeInFromLeft
              } ${delayStyle}`}
              ref={cardRef}
              key={_key}
            >
              <SanityImage imageBlock={image} className={styles.projectImage} />
              <div className={styles.details}>
                <div className={styles.titleContainer}>
                  <TextGlitchEffect
                    text={title}
                    className={styles.title}
                    letterCase='lowercase'
                    speed={40}
                  />
                  <div className={styles.titlebase} />
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.techStack}>{techStack}</div>
                <div className={styles.ctaContainer}>
                  {live && (
                    <Link
                      href={live?.url}
                      className={styles.liveUrl}
                      id={live?.idAttribute}
                      target='_blank'
                    >
                      {live?.text}
                    </Link>
                  )}
                  {github && (
                    <Link
                      href={github?.url}
                      className={styles.github}
                      id={github?.idAttribute}
                      target='_blank'
                    >
                      {github?.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeProjects;
