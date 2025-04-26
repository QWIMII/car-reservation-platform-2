import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/database';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Обработчик скролла для эффектов параллакса
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Выбираем несколько премиум автомобилей для показа на главной
  const featuredCars = cars.filter(car => car.category === 'porsche' || car.category === 'luxury').slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.5)'
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Исключительные автомобили для исключительных людей
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Откройте для себя роскошь вождения с нашей коллекцией элитных автомобилей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                className="text-lg py-6 px-8"
              >
                <Link to="/cars">
                  Выбрать автомобиль
                </Link>
              </Button>
              <Button 
                asChild
                className="text-lg py-6 px-8"
                variant="outline"
              >
                <Link to="/about">
                  О нас
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Наши лучшие автомобили</h2>
            <Button 
              asChild
              variant="outline"
              className="group"
            >
              <Link to="/cars">
                Весь автопарк
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{
            backgroundImage: 'url(/images/cta-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы испытать непревзойденный опыт?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Зарегистрируйтесь сейчас и получите доступ к эксклюзивному автопарку премиальных автомобилей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="text-lg py-6 px-8"
            >
              <Link to="/register">
                Регистрация
              </Link>
            </Button>
            <Button 
              asChild
              className="text-lg py-6 px-8"
              variant="outline"
            >
              <Link to="/login">
                Вход
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;