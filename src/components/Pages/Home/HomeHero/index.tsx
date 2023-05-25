import React from 'react';
import styles from './styles.module.scss';
import Typewriter from 'typewriter-effect';
import {Parallax} from 'react-scroll-parallax';
import {UtilityContext} from '../../../../App';
import {urlFor} from '../../../../client';

const HomeHero: React.FC<any> = ({heroData}) => {
  const {isMobile} = React.useContext(UtilityContext);

  const {
    heroTitle: title,
    heroColoredText: coloredText,
    heroDescription: description,
    heroImage,
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
              <a href='Resume.pdf' download className={styles.cvCta}>
                Download CV
              </a>
              <a href='#contact' className={styles.contactCta}>
                Let's Talk
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <img
              src={heroImage && urlFor(heroImage?.image).url()}
              alt={heroImage?.alt}
            />
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default HomeHero;
