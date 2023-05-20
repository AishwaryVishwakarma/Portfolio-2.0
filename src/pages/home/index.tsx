import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './styles.module.scss';
import Typewriter from 'typewriter-effect';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <video autoPlay muted loop>
        <source src='src/assets/Stars-video.mp4' type='video/mp4' />
      </video>
      <section id='home' className={styles.homeWrapper}>
        <div className={styles.homeHero}>
          <div className={styles.leftContainer}>
            <div className={styles.heading}>
              Hey there, I am{' '}
              <span>
                <Typewriter
                  options={{
                    strings: 'Aishwary Vishwakarma',
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                  }}
                />
              </span>
            </div>
            <div className={styles.description}>
              After 2 years of coding and getting my hands dirty in development
              I realised that programmers actually don't code. They understand
              the requirements and convert them into code to shape the product.
              So I don't think in code, but rather I write code by thinking
              about the impact. I really believe that my skills can be used
              toscale a product and create an impact through it.
            </div>
            <div className={styles.ctaContainer}>
              <a href='src/assets/Resume.pdf' download className={styles.cvCta}>
                Download CV
              </a>
              <a href='#contact' download className={styles.contactCta}>
                Let's Talk
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <img src='src/assets/Profile-picture.jpeg' alt='' />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
