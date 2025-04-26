import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.jpg" 
              alt="Meowest" 
              className="h-10 w-auto" 
            />
            <span className="text-white text-xl font-bold hidden sm:block">MEOWEST</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/cars" className="text-white hover:text-primary transition-colors">
              Автопарк
            </Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="text-white hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <User className="mr-2 h-4 w-4" />
                Личный кабинет
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-20 left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/cars" 
              className="text-white py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Автопарк
            </Link>
            <Link 
              to="/about" 
              className="text-white py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="text-white py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link 
              to="/profile" 
              className="text-white py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Личный кабинет
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;