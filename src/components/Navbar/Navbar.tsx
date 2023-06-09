import React from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {UtilityContext} from '../../App';
import {nanoid} from 'nanoid';

interface NavItems {
  name: string;
  path: string;
}

const NAV_ITEMS: NavItems[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Categories',
    path: '/categories',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];

const Navbar: React.FC = () => {
  const {isMobile} = React.useContext(UtilityContext);
  const soundRef = React.useRef<HTMLAudioElement>(null);

  const [musicPlaying, setMusicPlaying] = React.useState<boolean>(false);

  const [isHamMenuOpen, setIsHamMenuOpen] = React.useState<boolean>(false);

  const [isHamClicked, setIsHamClicked] = React.useState<boolean>(false);

  const listItems = (
    <>
      <ul className={styles.navItems}>
        {NAV_ITEMS.map((item) => (
          <li key={nanoid()}>
            <NavLink
              to={item.path}
              className={({isActive}) => (isActive ? styles.active : '')}
              end
              onClick={() => setIsHamMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {!isMobile && (
          <>
            <img
              src={musicPlaying ? 'sound-gif.gif' : 'sound-static.png'}
              alt='sound'
              onClick={() => {
                setMusicPlaying((prevState) => !prevState);
                musicPlaying
                  ? soundRef.current?.pause()
                  : soundRef.current?.play();
              }}
            />
            <audio ref={soundRef} loop>
              <source src='reflected-light-147979.mp3' type='audio/mpeg' />
            </audio>
          </>
        )}
      </ul>
    </>
  );

  return (
    <div
      className={`${
        isMobile ? 'defaultBg' : 'transparentBg'
      } sticky full-bleed layouted`}
    >
      <nav className={styles.navbar}>
        <div className={styles.navHeading}>
          <NavLink to='/'>Aishwary Vishwakarma</NavLink>
        </div>
        {isMobile ? (
          <div
            className={`${styles.hamButton} ${
              isHamClicked
                ? isHamMenuOpen
                  ? styles.closeState
                  : styles.openState
                : ''
            }`}
            onClick={() => {
              setIsHamMenuOpen((prevState) => !prevState);
              setIsHamClicked(true);
            }}
          >
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
          </div>
        ) : (
          listItems
        )}
        {isMobile && isHamMenuOpen && (
          <div
            className={`${styles.hamMenu} ${
              isHamMenuOpen && styles.openAnimation
            }`}
          >
            {listItems}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
