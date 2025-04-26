import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Cube, Calendar, Fuel, Gauge } from 'lucide-react';
import { Car } from '@/types';

interface CarCardProps {
  car: Car;
  showDetails?: boolean;
}

const CarCard = ({ car, showDetails = true }: CarCardProps) => {
  // Функция для определения текста категории на русском
  const getCategoryText = (category: string) => {
    switch(category) {
      case 'porsche': return 'Porsche';
      case 'luxury': return 'Премиум';
      case 'business': return 'Бизнес';
      default: return category;
    }
  };

  const carImage = car.image.startsWith('http') 
    ? car.image 
    : `/images/cars/${car.id}.jpg`;

  return (
    <Card className="bg-white overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={carImage} 
          alt={car.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm font-semibold rounded-full">
            {getCategoryText(car.category)}
          </span>
        </div>
        {!car.available && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span className="px-4 py-2 bg-red-600 text-white font-bold rounded-md">
              Нет в наличии
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <Link 
            to={car.modelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            <Cube className="h-4 w-4" />
            3D модель
          </Link>
        </div>
      </div>
      
      <CardContent className="flex-1 pt-6">
        <h3 className="text-xl font-bold mb-2 text-black">{car.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
        
        {showDetails && (
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <span>{car.year} г.</span>
            </div>
            <div className="flex items-center">
              <Gauge className="h-4 w-4 mr-2 text-gray-500" />
              <span>Авто</span>
            </div>
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-2 text-gray-500" />
              <span>{car.consumption}</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full mr-2" style={{ backgroundColor: car.color.toLowerCase().includes('белый') ? '#e5e5e5' : car.color.toLowerCase().includes('черный') ? '#000' : car.color.toLowerCase().includes('красный') ? '#f00' : car.color.toLowerCase().includes('синий') ? '#00f' : car.color.toLowerCase().includes('голубой') ? '#0af' : car.color.toLowerCase().includes('зеленый') ? '#0a0' : car.color.toLowerCase().includes('серый') ? '#888' : car.color.toLowerCase().includes('оранжевый') ? '#f80' : car.color.toLowerCase().includes('желтый') ? '#ff0' : '#777' }}></span>
              <span>{car.color}</span>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2 pb-6">
        <div className="font-bold text-black">
          <span className="text-2xl">{car.price.toLocaleString()} ₽</span>
          <span className="text-sm text-gray-500 ml-1">/ {car.priceUnit}</span>
        </div>
        
        <Button asChild disabled={!car.available}>
          <Link to={`/cars/${car.id}`}>
            Забронировать
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;