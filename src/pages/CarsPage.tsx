
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import { cars, getCarsByCategory } from '@/data/database';
import { Car } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const CarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortOption, setSortOption] = useState('price-asc');
  
  const porscheCars = getCarsByCategory('porsche');
  const luxuryCars = getCarsByCategory('luxury');
  const businessCars = getCarsByCategory('business');
  
  const filterCars = (carsToFilter: Car[]) => {
    return carsToFilter
      .filter(car => 
        (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
         car.model.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (car.price >= priceRange[0] && car.price <= priceRange[1])
      )
      .sort((a, b) => {
        switch(sortOption) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`);
          case 'name-desc':
            return `${b.brand} ${b.model}`.localeCompare(`${a.brand} ${a.model}`);
          default:
            return 0;
        }
      });
  };
  
  const filteredPorscheCars = filterCars(porscheCars);
  const filteredLuxuryCars = filterCars(luxuryCars);
  const filteredBusinessCars = filterCars(businessCars);
  const filteredAllCars = filterCars(cars);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-4">Наш автопарк</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Выберите автомобиль вашей мечты из нашей коллекции роскошных, спортивных и бизнес автомобилей. 
          Все автомобили проходят тщательную проверку и обслуживание для обеспечения безопасности и комфорта.
        </p>
        
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Поиск</label>
              <Input 
                placeholder="Поиск по марке и модели" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Сортировка</label>
              <Select 
                value={sortOption} 
                onValueChange={(value) => setSortOption(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Цена (по возрастанию)</SelectItem>
                  <SelectItem value="price-desc">Цена (по убыванию)</SelectItem>
                  <SelectItem value="name-asc">Название (А-Я)</SelectItem>
                  <SelectItem value="name-desc">Название (Я-А)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Цена в день: {priceRange[0].toLocaleString('ru-RU')} - {priceRange[1].toLocaleString('ru-RU')} ₽
              </label>
              <Slider
                defaultValue={[0, 50000]}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="all">Все авто ({filteredAllCars.length})</TabsTrigger>
            <TabsTrigger value="porsche">Porsche ({filteredPorscheCars.length})</TabsTrigger>
            <TabsTrigger value="luxury">Люкс ({filteredLuxuryCars.length})</TabsTrigger>
            <TabsTrigger value="business">Бизнес ({filteredBusinessCars.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {filteredAllCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAllCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Не найдено автомобилей, соответствующих критериям поиска</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="porsche">
            {filteredPorscheCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPorscheCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Не найдено автомобилей, соответствующих критериям поиска</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="luxury">
            {filteredLuxuryCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLuxuryCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Не найдено автомобилей, соответствующих критериям поиска</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="business">
            {filteredBusinessCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinessCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Не найдено автомобилей, соответствующих критериям поиска</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CarsPage;
