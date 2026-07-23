'use client';

import {HomeData} from '@/app/page';
import useSlideInOnView from '@/hooks/useSlideInOnView';
import React from 'react';
import {TextGlitchEffect} from 'react-text-glitch-effect';

import styles from './styles.module.scss';

const Skills: React.FC<HomeData['skills']> = (data) => {
  const {heading, skillCategories = []} = data ?? {};

  const cardsContainerRef = useSlideInOnView<HTMLUListElement>(styles.slideIn, {
    threshold: 0.15,
  });

  // Nothing to show until the section is populated in the CMS.
  if (skillCategories.length === 0) return null;

  return (
    <section id='skills' className={styles.skillsWrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <ul ref={cardsContainerRef} className={styles.cardsContainer}>
        {skillCategories.map(({_key, name, skills = []}) => (
          <li key={_key} className={styles.card}>
            <TextGlitchEffect
              text={name}
              className={styles.categoryName}
              letterCase='lowercase'
              speed={30}
            />
            <ul className={styles.chips}>
              {skills.map((skill) => (
                <li key={skill} className={styles.chip}>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
