import Link from 'next/link';
import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi';

import styles from './styles.module.scss';

const LINKS = [
  {
    icon: <AiFillGithub />,
    path: 'https://github.com/AishwaryVishwakarma',
  },
  // {
  //   icon: <FiInstagram />,
  //   path: '/',
  // },
  {
    icon: <FiLinkedin />,
    path: 'https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/',
  },
  {
    icon: <FiTwitter />,
    path: 'https://twitter.com/AishwaryVishwa3',
  },
];

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.footerLinks}>
        {LINKS.map(({icon, path}) => (
          <li key={path}>
            <Link href={path} target='_blank'>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.footerCredits}>
        Made with
        <span>❤</span> by
        <Link
          href='https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/'
          target='_blank'
        >
          Aishwary Vishwakarma
        </Link>
        @ 2023
      </div>
    </div>
  );
};

export default Footer;
