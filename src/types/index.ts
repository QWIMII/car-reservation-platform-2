// Типы данных для пользователей
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
  role: 'admin' | 'client';
  createdAt: string;
}

// Типы данных для автомобилей
export interface Car {
  id: number;
  name: string;
  category: 'porsche' | 'luxury' | 'business';
  price: number;
  priceUnit: string;
  year: number;
  description: string;
  image: string;
  modelUrl: string; // URL для 3D модели
  color: string;
  transmission: string;
  engine: string;
  consumption: string;
  features: string[];
  available: boolean;
}

// Типы данных для бронирований
export interface Reservation {
  id: number;
  userId: number;
  carId: number;
  startDate: string;
  endDate: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

// Типы данных для отзывов
export interface Review {
  id: number;
  userId: number;
  carId: number;
  rating: number;
  comment: string;
  createdAt: string;
}