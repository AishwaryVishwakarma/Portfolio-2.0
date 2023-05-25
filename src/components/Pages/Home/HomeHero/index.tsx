import React from 'react';
import styles from './styles.module.scss';
import Typewriter from 'typewriter-effect';
import {Parallax} from 'react-scroll-parallax';
import {UtilityContext} from '../../../../App';

const HomeHero: React.FC = () => {
  const {isMobile} = React.useContext(UtilityContext);

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
              Hey there, I am{' '}
              <span>
                {!isMobile ? (
                  <Typewriter
                    options={{
                      strings: 'Aishwary Vishwakarma',
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 100,
                    }}
                  />
                ) : (
                  'Aishwary Vishwakarma'
                )}
              </span>
            </div>
            <div className={styles.description}>
              After 2 years of coding and getting my hands dirty in development
              I realised that programmers actually don't code. They understand
              the requirements and convert them into code to shape the product.
              So I don't think in code, but rather I write code by thinking
              about the impact. I really believe that my skills can be used to
              scale a product and create an impact through it.
            </div>
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
            <img src='Profile-picture.jpeg' alt='' />
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default HomeHero;
