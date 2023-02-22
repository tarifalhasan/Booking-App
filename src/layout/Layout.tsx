import React from 'react';
import { NavigationMenu } from '../components';
const Layout: React.FC = ({ children }) => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <NavigationMenu />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
