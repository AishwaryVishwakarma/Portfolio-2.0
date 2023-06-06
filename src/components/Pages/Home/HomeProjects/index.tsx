import React from 'react';
import styles from './styles.module.scss';
import {useInView} from 'react-intersection-observer';
import {UtilityContext} from '../../../../App';
import SanityImage from '../../../../utils/SanityImage';
import SanityLink from '../../../../utils/SanityLink';
import {TextGlitchEffect} from 'react-text-glitch-effect';

/*
 * Home Projects Section
 */

const Card: React.FC<any> = ({cardData, index}) => {
  const {projectImage, title, description, cta1, cta2} = cardData ?? {};

  const {isMobile} = React.useContext(UtilityContext);

  const {ref: cardRef, inView: cardInView} = useInView({
    threshold: isMobile ? 0.2 : 0.4,
    triggerOnce: true,
  });

  // Calculating delay of animation (styles are in App.css)
  const delayStyle = isMobile ? 'delay0' : `delay${index % 3}`;

  return (
    <div
      className={`${styles.card} ${
        cardInView && styles.fadeInFromLeft
      } ${delayStyle}`}
      ref={cardRef}
    >
      <div className={styles.imageContainer}>
        <SanityImage imageBlock={projectImage} />
      </div>
      <div className={styles.details}>
        <div className={styles.cardTitleContainer}>
          <TextGlitchEffect text={title} className={styles.title} />
          <div className={styles.titlebase} />
        </div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardCtaContainer}>
          {cta1 && <SanityLink block={cta1} className={styles.liveUrl} />}
          {cta2 && <SanityLink block={cta2} className={styles.github} />}
        </div>
      </div>
    </div>
  );
};

const HomeProjects: React.FC<any> = ({heading, cardDetails}) => {
  return (
    <div className='full-bleed layouted defaultBg onTop'>
      <section id='home-projects' className={styles.projectsWrapper}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.cardsContainer}>
          {cardDetails &&
            cardDetails.map((cardData: any, idx: number) => (
              <Card cardData={cardData} index={idx} key={cardData?._key} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeProjects;
