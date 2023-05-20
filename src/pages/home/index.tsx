import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './styles.module.scss';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section id='home' className={styles.homeWrapper}>
        <div className={styles.homeHero}>
          <div className={styles.leftContainer}>
            <div className={styles.heading}>
              Hey there, I am <span>Aishwary Vishwakarma</span>
            </div>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
