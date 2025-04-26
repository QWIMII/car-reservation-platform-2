import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-9xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-6">Страница не найдена</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          Кажется, вы пытаетесь найти страницу, которая не существует или была перемещена.
        </p>
        <Link to="/">
          <Button className="bg-white text-black hover:bg-gray-200">
            <Home className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;