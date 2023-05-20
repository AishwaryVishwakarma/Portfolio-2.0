import React from 'react';
import Footer from '../Footer/Footer';
interface EssentialProps {
  children: React.ReactNode;
  footer?: boolean;
  className?: string;
}

const Layout: React.FC<EssentialProps> = ({
  children,
  footer = true,
  className = 'layouted full-bleed defaultBg',
}) => {
  return (
    <>
      <div className={className}>{children}</div>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
