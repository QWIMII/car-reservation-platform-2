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
    <div className={`min-h-screen flex flex-col ${bgColor} ${textColor}`}>
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;