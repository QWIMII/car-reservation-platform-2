import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.jpg" alt="Meowest" className="h-8 w-auto" />
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
  );
};

export default Footer;