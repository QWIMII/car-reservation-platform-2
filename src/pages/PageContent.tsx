import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  ctaButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backgroundImage = '/images/header-bg.jpg',
  ctaButton,
  secondaryButton
}) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-gray-300 mb-8">{description}</p>
          )}
          
          {(ctaButton || secondaryButton) && (
            <div className="flex flex-wrap gap-4">
              {ctaButton && (
                <Button asChild size="lg">
                  <Link to={ctaButton.link}>{ctaButton.text}</Link>
                </Button>
              )}
              
              {secondaryButton && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryButton.link}>{secondaryButton.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  bgColor = "bg-white",
  textColor = "text-black"
}) => {
  return (
    <section className={`py-16 ${bgColor} ${textColor} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};

interface PageContentProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const PageContent: React.FC<PageContentProps> = ({ 
  children, 
  bgColor = "bg-black", 
  textColor = "text-white" 
}) => {
  return (
    <Layout bgColor={bgColor} textColor={textColor}>
      {children}
    </Layout>
  );
};

export default PageContent;