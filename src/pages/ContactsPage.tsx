
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Контакты</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Адрес</h3>
                      <p className="text-gray-600">г. Москва, ул. Арбат, 1</p>
                      <p className="text-gray-600">119019, Россия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Телефон</h3>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@meowest.ru</p>
                      <p className="text-gray-600">support@meowest.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Часы работы</h3>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Социальные сети</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Введите ваш email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="Введите ваш телефон" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input id="subject" placeholder="Введите тему сообщения" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} />
                </div>
                <Button type="submit" className="w-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="aspect-w-16 aspect-h-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4223021700104!2d37.59792697722296!3d55.75222419902723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e317%3A0x91cbf65ace89c74!2z0YPQuy4g0JDRgNCx0LDRgiwgMSwg0JzQvtGB0LrQstCwLCAxMTkwMTk!5e0!3m2!1sru!2sru!4v1650123456789!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Какие документы нужны для аренды автомобиля?</h3>
                <p className="text-gray-600">
                  Для аренды автомобиля вам потребуются паспорт, водительское удостоверение (стаж вождения от 3 лет), и кредитная карта на ваше имя для внесения депозита.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Есть ли ограничения по пробегу?</h3>
                <p className="text-gray-600">
                  Для большинства автомобилей действует лимит в 200 км в день. При превышении лимита взимается дополнительная плата. Для некоторых категорий автомобилей доступны тарифы без ограничения пробега.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Можно ли арендовать автомобиль с водителем?</h3>
                <p className="text-gray-600">
                  Да, мы предоставляем услугу аренды автомобиля с водителем. Стоимость зависит от выбранного автомобиля и длительности аренды. Свяжитесь с нами для получения детальной информации.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Готовы испытать непревзойденный опыт?</h2>
            <Button asChild size="lg" className="mr-4">
              <Link to="/cars">Выбрать автомобиль</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/profile">Личный кабинет</Link>
            </Button>
          </div>
        </div>
      </div>
      
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

export default ContactsPage;
