import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cars } from '@/data/database';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Эффект параллакса при скролле
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Выбор премиальных автомобилей для главной страницы
  const featuredCars = cars.filter(car => car.category === 'luxury').slice(0, 3);

  return (
    <Layout>
      {/* Hero секция */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Премиальные автомобили для особых моментов
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              MEOWEST предлагает уникальную коллекцию автомобилей премиум-класса для аренды в Москве
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold">
                  Выбрать автомобиль
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold">
                  О нашем автопарке
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция премиальных автомобилей */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Эксклюзивная коллекция</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Познакомьтесь с нашей коллекцией роскошных автомобилей, доступных для аренды. 
              От спортивных суперкаров до изысканных седанов бизнес-класса.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <div key={car.id} className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image || `https://source.unsplash.com/random/800x600/?car,${car.brand}`} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xl font-bold">{car.name}</p>
                    <p className="text-gray-300">{car.price} ₽ / день</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{car.brand}</span>
                    <span className="text-sm text-gray-400">{car.year}</span>
                  </div>
                  <p className="text-gray-400 mb-6 line-clamp-2">{car.description}</p>
                  <Link to="/cars" className="inline-block w-full">
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cars">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                Посмотреть все автомобили
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Секция "Почему выбирают нас" */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают MEOWEST</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Мы предлагаем не просто аренду автомобилей, а премиальный опыт, который запомнится надолго
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Премиальный автопарк</h3>
              <p className="text-gray-400">
                В нашей коллекции более 30 эксклюзивных автомобилей от ведущих мировых производителей. 
                Каждый автомобиль тщательно обслуживается и предоставляется в идеальном состоянии.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Быстрое бронирование</h3>
              <p className="text-gray-400">
                Простой процесс онлайн-бронирования, который займет не более 5 минут. 
                Гибкие условия аренды и возможность выбора дополнительных услуг.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Персональный сервис</h3>
              <p className="text-gray-400">
                Индивидуальный подход к каждому клиенту. Наши консультанты помогут выбрать идеальный автомобиль 
                под ваши требования и ответят на все вопросы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action секция */}
      <section className="py-20 bg-cover bg-center relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1543854329-f18a55f51c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            filter: 'brightness(0.3)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы к незабываемому опыту?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Арендуйте автомобиль мечты прямо сейчас и ощутите настоящую роскошь вождения
            </p>
            <Link to="/cars">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold">
                Выбрать автомобиль
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;