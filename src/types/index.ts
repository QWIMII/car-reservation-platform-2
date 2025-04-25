
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  licenseNumber: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: 'porsche' | 'luxury' | 'business';
  images: string[];
  modelUrl: string; // URL для 3D модели
  features: string[];
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  available: boolean;
}

export interface Reservation {
  id: string;
  userId: string;
  carId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
}

export interface Review {
  id: string;
  userId: string;
  carId: string;
  rating: number;
  comment: string;
  date: string;
}
