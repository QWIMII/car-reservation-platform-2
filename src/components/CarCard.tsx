
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Zap, ShieldCheck, Car } from 'lucide-react';
import { Car as CarType } from '@/types';

interface CarCardProps {
  car: CarType;
}

const CarCard = ({ car }: CarCardProps) => {
  // Вспомогательные функции для отображения категории
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'porsche':
        return { label: 'Porsche', color: 'bg-yellow-500' };
      case 'luxury':
        return { label: 'Люкс', color: 'bg-purple-500' };
      case 'business':
        return { label: 'Бизнес', color: 'bg-blue-500' };
      default:
        return { label: category, color: 'bg-gray-500' };
    }
  };

  const categoryInfo = getCategoryLabel(car.category);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={car.images[0] || 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2073&auto=format&fit=crop'}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${categoryInfo.color} text-white`}>
            {categoryInfo.label}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{car.brand} {car.model}</h3>
            <p className="text-gray-500">{car.year} год</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{car.price.toLocaleString('ru-RU')} ₽</p>
            <p className="text-gray-500 text-sm">в день</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center text-center p-2 bg-gray-50 rounded-lg">
            <Zap className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs">{car.specs.power}</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 bg-gray-50 rounded-lg">
            <Car className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs">{car.specs.engine}</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 bg-gray-50 rounded-lg">
            <ShieldCheck className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs">{car.specs.acceleration}</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2">Особенности:</h4>
          <ul className="flex flex-wrap gap-2">
            {car.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between py-4 bg-gray-50">
        {car.modelUrl && (
          <a 
            href={car.modelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline"
          >
            3D модель
          </a>
        )}
        
        <Button asChild className="group">
          <Link to={`/car/${car.id}`}>
            Подробнее
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
