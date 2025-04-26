import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Search, Filter } from 'lucide-react';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/database';
import PageContent, { PageHeader, Section } from './PageContent';

const CarsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Фильтрация автомобилей
  const filteredCars = cars.filter(car => {
    // Поиск по названию
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Фильтр по категории
    const matchesCategory = selectedCategory ? car.category === selectedCategory : true;
    
    // Фильтр по цене
    const matchesMinPrice = minPrice !== '' ? car.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== '' ? car.price <= maxPrice : true;
    
    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });
  
  // Получение уникальных категорий
  const categories = Array.from(new Set(cars.map(car => car.category)));
  
  // Функция для перевода категории на русский
  const getCategoryName = (category: string) => {
    switch(category) {
      case 'porsche': return 'Porsche';
      case 'luxury': return 'Премиум';
      case 'business': return 'Бизнес';
      default: return category;
    }
  };
  
  // Сброс фильтров
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setMinPrice('');
    setMaxPrice('');
  };
  
  return (
    <PageContent>
      <PageHeader
        title="Наш автопарк"
        description="Выберите автомобиль вашей мечты из нашей коллекции премиальных автомобилей"
        backgroundImage="/images/cars-bg.jpg"
      />
      
      <Section bgColor="bg-white" textColor="text-black">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-stretch gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск автомобиля..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Button 
              variant="outline" 
              className="md:w-auto"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Фильтры
            </Button>
          </div>
          
          {showFilters && (
            <div className="bg-gray-100 p-4 rounded-lg mb-6 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h3 className="font-medium mb-2">Категория</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <button
                          className={`flex items-center text-left w-full ${selectedCategory === category ? 'text-primary font-medium' : 'text-gray-700'}`}
                          onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        >
                          {selectedCategory === category ? (
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          ) : (
                            <div className="h-4 w-4 mr-2 rounded-full border border-gray-400" />
                          )}
                          {getCategoryName(category)}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Минимальная цена</h3>
                  <Input
                    type="number"
                    placeholder="От"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                  />
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Максимальная цена</h3>
                  <Input
                    type="number"
                    placeholder="До"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  onClick={resetFilters}
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Результаты ({filteredCars.length})</h2>
            
            {(searchQuery || selectedCategory || minPrice || maxPrice) && (
              <Button 
                variant="ghost" 
                onClick={resetFilters}
                className="text-sm"
              >
                Сбросить все фильтры
              </Button>
            )}
          </div>
        </div>
        
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">По вашему запросу ничего не найдено</h3>
            <p className="text-gray-500 mb-6">Попробуйте изменить параметры поиска или сбросить фильтры</p>
            <Button 
              onClick={resetFilters}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </Section>
    </PageContent>
  );
};

export default CarsPage;