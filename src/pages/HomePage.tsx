
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/database';

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2832&auto=format&fit=crop)',
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
                  О нашем автопарке
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop)',
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
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo-b.svg" alt="Meowest" className="h-8 w-auto" />
                <span className="text-white text-xl font-bold">MEOWEST</span>
              </Link>
              <p className="text-gray-400">
                Премиальный сервис аренды элитных автомобилей
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-white transition-colors">Автопарк</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">г. Москва, ул. Арбат, 1</li>
                <li className="text-gray-400">+7 (999) 123-45-67</li>
                <li className="text-gray-400">info@meowest.ru</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Meowest. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
