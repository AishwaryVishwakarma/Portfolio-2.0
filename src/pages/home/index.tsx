import React from 'react';
import Layout from '../../components/Layout/Layout';
import HomeHero from '../../components/Pages/Home/HomeHero';
import Projects from '../../components/Pages/Home/HomeProjects';
import {client} from '../../client';

const HomePage: React.FC = () => {
  const [homeData, setHomeData] = React.useState();

  React.useEffect(() => {
    client
      .fetch(
        '*[_type == "homePage"] {homeHeroSection, projectSectionHeading, projectCards}'
      )
      .then((res) => {
        setHomeData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const {homeHeroSection, projectSectionHeading, projectCards}: any =
    (homeData && homeData[0]) ?? {};

  return (
    <Layout className='defaultBg full-bleed'>
      {/* Hero */}
      <HomeHero heroData={homeHeroSection} />
      {/* Projects */}
      <Projects heading={projectSectionHeading} cardDetails={projectCards} />
    </Layout>
  );
};

export default HomePage;
