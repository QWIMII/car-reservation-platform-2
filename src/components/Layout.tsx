import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  bgColor = "bg-black", 
  textColor = "text-white" 
}) => {
  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;