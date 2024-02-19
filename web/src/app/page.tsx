import Layout from '@/components/Layout/Layout';
import Navbar from '@/components/Navbar/Navbar';
import HomeHero from '@/components/pages/Home/Hero/Hero';
import SanityImage from '@/sanity/SanityImage';
import {getCmsData} from '@/utils/sanity';
import type {TypedObject} from '@portabletext/types';
import TypewriterComponent from 'typewriter-effect';

import styles from './styles.module.scss';

export interface HomeData {
  hero: {
    title: string;
    coloredText: string;
    description: TypedObject;
    image: any;
    resume: FileCta;
    cta2: LinkCta;
  };
}

const HomePage = async () => {
  const data = await getCmsData(
    `*[_type == "homePage"][0] {
      hero {
        title,
        coloredText,
        description,
        image {
          image {
            asset->{
              ...,
              metadata
            }
          },
          alt,
          name,
        },
        resume {
          "url": document.asset->url,
          text,
          idAttribute
        },
        cta2 {
          text,
          url,
          idAttribute
        }
      },
    }`
  );

  const {hero} = (data as HomeData) ?? {};

  return (
    <Layout className={styles.homePage}>
      <HomeHero {...hero} />
    </Layout>
  );
};

export default HomePage;
