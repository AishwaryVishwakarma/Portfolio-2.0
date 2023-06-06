import React from 'react';
import styles from './styles.module.scss';
import Typewriter from 'typewriter-effect';
import {Parallax} from 'react-scroll-parallax';
import {UtilityContext} from '../../../../App';
import SanityLink from '../../../../utils/SanityLink';
import SanityImage from '../../../../utils/SanityImage';

/*
* Home Hero
*/

const HomeHero: React.FC<any> = ({heroData}) => {
  const {isMobile} = React.useContext(UtilityContext);

  const {
    heroTitle: title,
    heroColoredText: coloredText,
    heroDescription: description,
    heroImage,
    cta1,
    cta2,
  } = heroData ?? {};

  return (
    <div className='full-bleed layouted'>
      <Parallax className={styles.videoContainer} speed={-200}>
        <video autoPlay muted loop>
          <source src='Stars-video.mp4' type='video/mp4' />
        </video>
      </Parallax>
      <Parallax className={styles.homeWrapper} speed={isMobile ? 0 : -20}>
        <section id='home-hero' className={styles.homeHero}>
          <div className={styles.leftContainer}>
            <div className={styles.heading}>
              {title}{' '}
              <span>
                {!isMobile ? (
                  <Typewriter
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
              </span>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.ctaContainer}>
              <SanityLink block={cta1} className={styles.cvCta} />
              <a href={cta2?.url} className={styles.contactCta}>
                {cta2?.text}
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <SanityImage imageBlock={heroImage} alt='Profile picture' />
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default HomeHero;
