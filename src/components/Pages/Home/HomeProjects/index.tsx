import React from 'react';
import styles from './styles.module.scss';
import {Tilt} from 'react-tilt';
import {useInView} from 'react-intersection-observer';

const CARD_DATA = [
  {
    title: 'Netflix Clone',
    description: 'Clone website of Netflix built on top of ReactJs',
    img: 'https://i.postimg.cc/4NKTyzmy/Screenshot-from-2023-05-21-15-09.png',
    liveUrl: 'https://willowy-toffee-8e687c.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/Netflix-Clone',
  },
  {
    title: 'E-Commerce',
    description: 'A simple E-commerce built with ReactJs + Typescript',
    img: 'https://i.postimg.cc/Sxfqbmnf/Screenshot-from-2023-05-21-15-14.png',
    liveUrl: 'https://ecommerce-atoz.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/E-commerce',
  },
  {
    title: 'Dairy Farm',
    description:
      "It's an e-commerce website for Dairy farm owners who wish to boost their business by entering into online market. Built on ReactJs + Typescript",
    img: 'https://i.postimg.cc/jSZ9h2Wm/Screenshot-from-2023-05-21-15-17.png',
    liveUrl: 'https://silly-empanada-db84a3.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/dairy-farm',
  },
  {
    title: 'Recipe Finder',
    description:
      "Recipe finder let's you find the recipe of all your favourite recipe on a click of a button. Built witj ReactJs",
    img: 'https://i.postimg.cc/W1Cmjcxt/Screenshot-from-2023-05-21-15-20.png',
    liveUrl: 'https://recipe-finder-appliaction.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/Recipe-Finder',
  },
  {
    title: 'Real Estate',
    description:
      'This website serves as a e commerce website for Real Estate business, like ghardekho. Built on ReactJs',
    img: 'https://i.postimg.cc/cH9w9q7s/Screenshot-from-2023-05-21-20-36.png',
    liveUrl: 'https://real-state-webapp.netlify.app/',
    github: 'https://github.com/AishwaryVishwakarma/Real-Estate',
  },
  {
    title: 'News App',
    description:
      'News App will retreive the latest news base on different categories all over India.',
    img: 'https://i.postimg.cc/T3QTzTSv/Screenshot-from-2023-05-21-20-46.png',
    github: 'https://github.com/AishwaryVishwakarma/News-App-React',
  },
];

const Card: React.FC<any> = ({cardData, index}) => {
  const {title, description, img, liveUrl, github} = cardData ?? {};

  const {ref: cardRef, inView: cardInView} = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  // Calculating delay of animation (styles are in App.css)
  const delayStyle = `delay${index % 3}`;

  return (
    <Tilt
      options={{
        max: 8,
        scale: 1,
      }}
    >
      <div
        className={`${styles.card} ${
          cardInView && styles.fadeInFromLeft
        } ${delayStyle}`}
        ref={cardRef}
      >
        <img src={img} alt='project-photo' />
        <div className={styles.details}>
          <div className={styles.cardTitle}>
            <span>{title}</span>
            <div className={styles.titlebase} />
          </div>
          <div className={styles.cardDescription}>{description}</div>
          <div className={styles.cardCtaContainer}>
            {liveUrl && (
              <a href={liveUrl} target='_blank'>
                See Live
              </a>
            )}
            {github && (
              <a href={github} target='_blank'>
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const HomeProjects: React.FC = () => {
  return (
    <div className='full-bleed layouted defaultBg onTop'>
      <section id='home-projects' className={styles.projectsWrapper}>
        <div className={styles.heading}>Check out my recent projects</div>
        <div className={styles.cardsContainer}>
          {CARD_DATA.map((cardData, idx) => (
            <Card key={cardData.img} cardData={cardData} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeProjects;
