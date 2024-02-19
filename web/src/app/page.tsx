import Layout from '@/components/Layout/Layout';
import HomeHero from '@/components/pages/Home/Hero/Hero';
import HomeProjects from '@/components/pages/Home/Projects/Projects';
import {getCmsData} from '@/utils/sanity';
import type {TypedObject} from '@portabletext/types';

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
  projects: {
    heading: string;
    projectCards: {
      _key: string;
      image: any;
      title: string;
      description: string;
      techStack: string;
      live: LinkCta;
      github: LinkCta;
    }[];
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
      projects {
        heading,
        projectCards[] {
          _key,
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
          title,
          description,
          techStack,
          live {
            text,
            url,
            idAttribute
          },
          github {
            text,
            url,
            idAttribute
          }
        }
      }
    }`
  );

  const {hero, projects} = (data as HomeData) ?? {};

  return (
    <Layout className={styles.homePage}>
      <HomeHero {...hero} />
      <HomeProjects {...projects} />
    </Layout>
  );
};

export default HomePage;
