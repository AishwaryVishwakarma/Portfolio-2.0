import React from 'react';
import Layout from '../../components/Layout/Layout';
import HomeHero from '../../components/Pages/Home/HomeHero';
import Projects from '../../components/Pages/Home/Projects';

const HomePage: React.FC = () => {
  return (
    <Layout className='defaultBg full-bleed'>
      {/* Hero */}
      <HomeHero />
      {/* Projects */}
      <Projects />
    </Layout>
  );
};

export default HomePage;
