'use client';

import {HomeData} from '@/app/page';
import SanityImage from '@/sanity/SanityImage';
import Link from 'next/link';
import React from 'react';
import {TextGlitchEffect} from 'react-text-glitch-effect';

import styles from './styles.module.scss';

const Projects: React.FC<HomeData['projects']> = (data) => {
  const {heading, projectCards = []} = data ?? {};

  const cardsContainerRef = React.useRef<HTMLUListElement | null>(null);

  React.useEffect(() => {
    const cards = cardsContainerRef.current?.childNodes ?? [];

    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-is-visible', 'true');
            entry.target.classList.add(styles.slideIn);
            return;
          }
          entry.target.classList.remove(styles.slideIn);
          entry.target.setAttribute('data-is-visible', 'false');
        });
      },
      {
        rootMargin: '-150px 0px -150px 0px',
      }
    );

    cards.forEach((card) => {
      observer.observe(card as HTMLLIElement);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id='projects' className={styles.projectsWrapper}>
      <div className={styles.heading}>{heading}</div>
      <ul ref={cardsContainerRef} className={styles.cardsContainer}>
        {projectCards.map((card, idx) => {
          const {title, description, techStack, image, live, github, _key} =
            card ?? {};
          return (
            <li className={styles.card} key={_key}>
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
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
