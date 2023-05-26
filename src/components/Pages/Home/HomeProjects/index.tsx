import React from 'react';
import styles from './styles.module.scss';
import {useInView} from 'react-intersection-observer';
import {UtilityContext} from '../../../../App';
import SanityImage from '../../../../utils/SanityImage';

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
      <SanityImage imageBlock={projectImage} />
      <div className={styles.details}>
        <div className={styles.cardTitle}>
          <span>{title}</span>
          <div className={styles.titlebase} />
        </div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardCtaContainer}>
          {cta1 && (
            <a href={cta1?.url} target='_blank' className={styles.liveUrl}>
              {cta1?.text}
            </a>
          )}
          {cta2 && (
            <a href={cta2?.url} target='_blank' className={styles.github}>
              {cta2?.text}
            </a>
          )}
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
