'use client';

import {HomeData} from '@/app/page';
import SanityRichText from '@/sanity/SanityRichText';
import React from 'react';
import {TextGlitchEffect} from 'react-text-glitch-effect';

import styles from './styles.module.scss';

const Experience: React.FC<HomeData['experience']> = (data) => {
  const {heading, experienceCards = []} = data ?? {};

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
        threshold: 0.51,
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
        <video autoPlay muted loop playsInline className={styles.earth}>
          <source src='earth.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

export default Experience;
