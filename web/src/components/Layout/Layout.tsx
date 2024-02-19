import React from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import {type LayoutProps} from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  navbar = true,
  footer = true,
  layouted = false,
}) => {
  return (
    <>
      {navbar && (
        <header>
          <Navbar />
        </header>
      )}
      <main className={`${className} ${layouted && 'layouted'}`}>
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
