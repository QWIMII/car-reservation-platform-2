
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">О нас</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src="https://images.unsplash.com/photo-1600964373031-f0346b2b2244?q=80&w=2070&auto=format&fit=crop" 
                alt="Наша команда" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Интересная история Meowest</h2>
              <p className="text-gray-700 mb-4">
                Компания Meowest начала свою деятельность в 2010 году с небольшой коллекции из трех премиальных автомобилей. Основатели компании, два энтузиаста и коллекционера редких автомобилей, решили поделиться своей страстью с другими любителями роскошных машин.
              </p>
              <p className="text-gray-700 mb-4">
                Название "Meowest" появилось из двух составляющих: "Meow" - символизирующее грацию, элегантность и уникальность, присущие кошачьим, и "West" - указывающее на западные стандарты качества и сервиса, которым мы следуем. Логотип компании, изображающий геометрического кота, стал символом нашего подхода: сочетание изящества форм и инженерной точности.
              </p>
              <p className="text-gray-700 mb-4">
                Сегодня наш автопарк насчитывает более 30 элитных машин, каждая из которых тщательно подобрана для ценителей роскоши и высоких технологий. Мы гордимся коллекцией Porsche, включающей самые передовые модели этого легендарного производителя, а также эксклюзивными экземплярами от Bentley, Rolls-Royce, Lamborghini и других престижных марок.
              </p>
              <p className="text-gray-700">
                Наша миссия — предоставить клиентам возможность почувствовать непревзойденный комфорт вождения автомобилей мирового класса, сопровождаемый безупречным сервисом и индивидуальным подходом к каждому. Мы не просто сдаем в аренду автомобили — мы создаем неповторимые впечатления.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Все наши автомобили проходят регулярное техническое обслуживание у официальных дилеров и поддерживаются в идеальном состоянии.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Премиум сервис</h3>
              <p className="text-gray-600">
                Индивидуальный подход к каждому клиенту, доставка автомобиля в удобное место и время, круглосуточная поддержка.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Гибкие условия</h3>
              <p className="text-gray-600">
                Аренда от одного дня до месяца, возможность продления бронирования, программа лояльности для постоянных клиентов.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Наша команда</h2>
            <p className="text-gray-700 mb-6">
              Команда Meowest — это профессионалы, объединенные страстью к автомобилям и стремлением создать лучший сервис для наших клиентов. Многие из нас имеют опыт работы в автоспорте, дилерских центрах премиальных марок и сфере люксового сервиса.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="aspect-square relative rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Александр Петров" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Александр Петров</h3>
                <p className="text-gray-600">Основатель и CEO</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square relative rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                    alt="Елена Соколова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Елена Соколова</h3>
                <p className="text-gray-600">Директор по работе с клиентами</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square relative rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop" 
                    alt="Максим Орлов" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Максим Орлов</h3>
                <p className="text-gray-600">Технический директор</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Готовы испытать непревзойденный опыт?</h2>
            <Button asChild size="lg" className="mr-4">
              <Link to="/cars">Выбрать автомобиль</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Связаться с нами</Link>
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

export default AboutPage;
