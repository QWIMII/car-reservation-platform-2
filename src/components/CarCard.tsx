
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-black/5 transition-all duration-500 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.model}`} 
          className={`h-full w-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-80"></div>
      </div>
      
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{car.brand} {car.model}</h3>
          <span className="text-sm font-semibold text-gray-700">{car.year} г.</span>
        </div>
        
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
            {car.specs.engine}
          </span>
          <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
            {car.specs.power}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            {car.price.toLocaleString('ru-RU')} ₽/день
          </div>
          
          <Link to={`/cars/${car.id}`}>
            <Button 
              className="group rounded-full p-2 h-auto w-auto"
              variant="default"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
