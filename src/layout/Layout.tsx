import React from 'react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
interface MyComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <NavigationMenu />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
