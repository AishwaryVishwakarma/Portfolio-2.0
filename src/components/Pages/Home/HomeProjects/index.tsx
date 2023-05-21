import React from 'react';
import styles from './styles.module.scss';

const CARD_DATA = [
  {
    title: 'Netflix Clone',
    description: 'Clone website of Netflix built on top of ReactJs',
    img: 'https://i.postimg.cc/CKv8pSgn/Screenshot-from-2023-05-21-15-09-45.png',
    liveUrl: 'https://willowy-toffee-8e687c.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/Netflix-Clone',
  },
  {
    title: 'E-Commerce',
    description: 'A simple E-commerce built with ReactJs + Typescript',
    img: 'https://i.postimg.cc/BbnwQqLW/Screenshot-from-2023-05-21-15-14-24.png',
    liveUrl: 'https://ecommerce-atoz.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/E-commerce',
  },
  {
    title: 'Dairy Farm',
    description:
      "It's an e-commerce website for Dairy farm owners who wish to boost their business by entering into online market. Built on ReactJs + Typescript",
    img: 'https://i.postimg.cc/NM5pWdWY/Screenshot-from-2023-05-21-15-17-54.png',
    liveUrl: 'https://silly-empanada-db84a3.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/dairy-farm',
  },
  {
    title: 'Recipe Finder',
    description:
      "Recipe finder let's you find the recipe of all your favourite recipe on a click of a button. Built witj ReactJs",
    img: 'https://i.postimg.cc/rsqzDHM2/Screenshot-from-2023-05-21-15-20-33.png',
    liveUrl: 'https://recipe-finder-appliaction.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/Recipe-Finder',
  },
];

const Card: React.FC<any> = ({cardData}) => {
  const {title, description, img, liveUrl, github} = cardData ?? {};

  return (
    <div className={styles.card}>
      <img src={img} alt='project-photo' />
      <div className={styles.details}>
        <div className={styles.cardTitle}>
          <span>{title}</span>
          <div className={styles.titlebase} />
        </div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardCtaContainer}>
          <a href={liveUrl} target='_blank'>See Live</a>
          <a href={github} target='_blank'>Github</a>
        </div>
      </div>
    </div>
  );
};

const HomeProjects: React.FC = () => {
  return (
    <div className='full-bleed layouted defaultBg onTop'>
      <section id='home-projects' className={styles.projectsWrapper}>
        <div className={styles.heading}>Check out my recent projects</div>
        <div className={styles.cardsContainer}>
          {CARD_DATA.map((cardData) => (
            <Card key={cardData.img} cardData={cardData} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeProjects;
