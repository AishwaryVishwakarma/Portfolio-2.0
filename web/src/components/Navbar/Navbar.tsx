'use client';

import Image from 'next/image';
import Link from 'next/link';
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
  {
    name: 'Skills',
    path: '#skills',
  },
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Contact',
    path: 'https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/',
  },
];

// Section ids the scroll-spy tracks (the in-page hash tabs).
const SECTION_IDS = TABS.map(({path}) => path).filter((path) =>
  path.startsWith('#')
).map((path) => path.slice(1));

const Navbar: React.FC = () => {
  const musicRef = React.useRef<HTMLAudioElement | null>(null);

  const [musicPlaying, setMusicPlaying] = React.useState(false);

  const [hamOpen, setHamOpen] = React.useState(false);

  // Currently in-view section, e.g. "about" — drives the active tab highlight.
  const [activeSection, setActiveSection] = React.useState<string>(
    SECTION_IDS[0]
  );

  React.useEffect((): void => {
    musicPlaying ? musicRef.current?.play() : musicRef.current?.pause();
  }, [musicPlaying]);

  // Scroll-spy: highlight the tab for whichever section is near the middle of
  // the viewport. Replaces the old `usePathname()` check, which never matched
  // because pathname is "/" while the tabs are hash anchors.
  React.useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {rootMargin: '-45% 0px -45% 0px'}
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const Tabs = ({className}: {className?: string}) => {
    return (
      <ul className={className}>
        {TABS.map(({name, path}) => (
          <li key={path} className={styles.tab}>
            <Link
              href={path}
              aria-current={path === `#${activeSection}` ? 'true' : undefined}
              className={path === `#${activeSection}` ? styles.active : ''}
              onClick={() => setHamOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
        <li className={`${styles.soundButton} hideOnMobile`}>
          <button
            type='button'
            aria-label={
              musicPlaying ? 'Mute background music' : 'Play background music'
            }
            aria-pressed={musicPlaying}
            onClick={(): void => {
              setMusicPlaying((prevState): typeof prevState => !prevState);
            }}
          >
            <Image
              src={musicPlaying ? '/sound-gif.gif' : '/sound-static.png'}
              alt=''
              height={30}
              width={30}
            />
          </button>
          <audio ref={musicRef} loop>
            <source src='/music.mp3' type='audio/mpeg' />
          </audio>
        </li>
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
      {/* Mobile navbar with hamburger menu */}
      <button
        type='button'
        className={`${styles.hamButton} hideOnDesktop`}
        onClick={() => setHamOpen((prevState): typeof prevState => !prevState)}
        data-is-open={hamOpen}
        aria-label={hamOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={hamOpen}
        aria-controls='mobile-menu'
      >
        <span className={styles.hamLine}></span>
        <span className={styles.hamLine}></span>
        <span className={styles.hamLine}></span>
      </button>
      <div
        id='mobile-menu'
        className={`${styles.hamMenu} hideOnDesktop`}
        data-is-open={hamOpen}
      >
        <Tabs className='hideOnDesktop' />
      </div>
    </nav>
  );
};

export default Navbar;
