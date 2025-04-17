import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LanguageProvider } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 overflow-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;