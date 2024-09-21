'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

import styles from './styles.module.scss';

const TABS = [
  {
    name: 'Home',
    path: '#about',
  },
  {
    name: 'Experience',
    path: '#experience',
  },
  // {
  //   name: 'Skills',
  //   path: '#skills',
  // },
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Contact',
    path: 'https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/',
  },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const musicRef = React.useRef<HTMLAudioElement | null>(null);

  const [musicPlaying, setMusicPlaying] = React.useState(false);

  const [hamOpen, setHamOpen] = React.useState(false);

  React.useEffect((): void => {
    musicPlaying ? musicRef.current?.play() : musicRef.current?.pause();
  }, [musicPlaying]);

  const Tabs = ({className}: {className?: string}) => {
    return (
      <ul className={className}>
        {TABS.map(({name, path}) => (
          <li key={path} className={styles.tab}>
            <Link
              href={path}
              className={pathname === path ? styles.active : ''}
              onClick={() => setHamOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
        <div className={`${styles.soundButton} hideOnMobile`}>
          <Image
            src={musicPlaying ? '/sound-gif.gif' : '/sound-static.png'}
            alt='sound'
            onClick={(): void => {
              setMusicPlaying((prevState): typeof prevState => !prevState);
            }}
            height={30}
            width={30}
          />
          <audio ref={musicRef} loop>
            <source src='/music.mp3' type='audio/mpeg' />
          </audio>
        </div>
      </ul>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <Link href='/'>Aishwary Vishwakarma</Link>
      </div>
      {/* Desktop navbar */}
      <Tabs className='hideOnMobile' />
      {/* Mobile navbar with hame menu */}
      <div
        className={`${styles.hamButton} hideOnDesktop`}
        onClick={() => setHamOpen((prevState): typeof prevState => !prevState)}
        data-is-open={hamOpen}
      >
        <div className={styles.hamLine}></div>
        <div className={styles.hamLine}></div>
        <div className={styles.hamLine}></div>
      </div>
      <div className={`${styles.hamMenu} hideOnDesktop`} data-is-open={hamOpen}>
        <Tabs className='hideOnDesktop' />
      </div>
    </nav>
  );
};

export default Navbar;
