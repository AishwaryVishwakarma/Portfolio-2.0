import React from 'react';
import styles from './styles.module.scss';
import {FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi';
import {AiFillHeart, AiFillGithub} from 'react-icons/ai';

const ICONS = [
  {
    icon: <AiFillGithub />,
    to: 'https://github.com/AishwaryVishwakarma',
  },
  {
    icon: <FiInstagram />,
    to: '/',
  },
  {
    icon: <FiLinkedin />,
    to: 'https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/',
  },
  {
    icon: <FiTwitter />,
    to: 'https://twitter.com/AishwaryVishwa3',
  },
];

const TABS = ['Terms of Use', 'Privacy Policy', 'Security', 'About Us', 'FAQ'];

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.footerIcons}>
        {ICONS.map(({icon, to}, idx) => (
          <li key={idx}>
            <a href={to} target='_blank'>
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.footerTabs}>
        {TABS.map((tab, idx) => (
          <li key={idx}>{tab}</li>
        ))}
      </ul>
      <div className={styles.footerCredits}>
        Made with{' '}
        <span>
          <AiFillHeart />
        </span>{' '}
        by{' '}
        <a
          href='https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/'
          target='_blank'
        >
          Aishwary Vishwakarma
        </a>{' '}
        @ 2023
      </div>
    </div>
  );
};

export default Footer;
