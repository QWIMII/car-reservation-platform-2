
import { Car, User, Reservation, Review } from '@/types';

// Имитация базы данных с использованием объектов в памяти
export const users: User[] = [
  {
    id: '1',
    name: 'Александр Иванов',
    email: 'alex@example.com',
    password: 'password123',
    phone: '+7 (999) 123-45-67',
    licenseNumber: 'AB123456',
  },
  {
    id: '2',
    name: 'Мария Петрова',
    email: 'maria@example.com',
    password: 'password456',
    phone: '+7 (999) 765-43-21',
    licenseNumber: 'CD789012',
  },
];

export const cars: Car[] = [
  // Porsche категория (5)
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Turbo S',
    year: 2023,
    price: 35000,
    category: 'porsche',
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/porsche-911-turbo-s-2021-free-download-1c1c70be9cd84476bd4c757f127e60d2',
    features: ['Спортивный пакет', 'Кожаные сиденья', 'Премиум аудиосистема'],
    specs: {
      engine: '3.8L Twin-Turbo Flat-6',
      power: '640 л.с.',
      acceleration: '2.7s 0-100 км/ч',
      topSpeed: '330 км/ч',
    },
    available: true,
  },
  {
    id: '2',
    brand: 'Porsche',
    model: 'Taycan Turbo',
    year: 2023,
    price: 30000,
    category: 'porsche',
    images: [
      'https://images.unsplash.com/photo-1619405399537-b3cf23e7e472?q=80&w=1974&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/porsche-taycan-turbo-s-2020-17ebcc2b1a20410a9dba0738a49f85e5',
    features: ['Электромобиль', 'Панорамная крыша', 'Адаптивная подвеска'],
    specs: {
      engine: 'Dual Electric Motors',
      power: '680 л.с.',
      acceleration: '3.0s 0-100 км/ч',
      topSpeed: '260 км/ч',
    },
    available: true,
  },
  {
    id: '3',
    brand: 'Porsche',
    model: 'Panamera Turbo S',
    year: 2022,
    price: 28000,
    category: 'porsche',
    images: [
      'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?q=80&w=2071&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/porsche-panamera-turbo-s-e3c699e6e03c4f2faf5df5c19a61e3e2',
    features: ['Спортивные сиденья', 'Адаптивный круиз-контроль', 'Ночное видение'],
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '630 л.с.',
      acceleration: '3.1s 0-100 км/ч',
      topSpeed: '315 км/ч',
    },
    available: true,
  },
  {
    id: '4',
    brand: 'Porsche',
    model: 'Cayenne Turbo GT',
    year: 2023,
    price: 25000,
    category: 'porsche',
    images: [
      'https://images.unsplash.com/photo-1619156162346-5656cbb2bc12?q=80&w=1964&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/porsche-cayenne-turbo-gt-ac0a5cca7c754f0a9764b46462d43ba8',
    features: ['Карбоновая отделка', 'Спортивный выхлоп', 'Керамические тормоза'],
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '640 л.с.',
      acceleration: '3.3s 0-100 км/ч',
      topSpeed: '300 км/ч',
    },
    available: true,
  },
  {
    id: '5',
    brand: 'Porsche',
    model: '718 Cayman GT4 RS',
    year: 2023,
    price: 26000,
    category: 'porsche',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/porsche-718-cayman-gt4-rs-2022-9e5c57f3194f4dc9ac9df7d7d7d7c000',
    features: ['Спортивный пакет', 'Углепластиковые элементы', 'Спортивные шины'],
    specs: {
      engine: '4.0L Flat-6',
      power: '500 л.с.',
      acceleration: '3.4s 0-100 км/ч',
      topSpeed: '315 км/ч',
    },
    available: true,
  },
  
  // Luxury категория (10)
  {
    id: '6',
    brand: 'Rolls-Royce',
    model: 'Phantom',
    year: 2023,
    price: 50000,
    category: 'luxury',
    images: [
      'https://images.unsplash.com/photo-1598559411867-7bac9bf28fcc?q=80&w=2073&auto=format&fit=crop',
    ],
    modelUrl: 'https://sketchfab.com/3d-models/rolls-royce-phantom-2018-b794b6392d0c4c76be32532c32630640',
    features: ['Звездное небо', 'Бар в салоне', 'Массажные кресла'],
    specs: {
      engine: '6.75L V12',
      power: '571 л.с.',
      acceleration: '5.3s 0-100 км/ч',
      topSpeed: '250 км/ч',
    },
    available: true,
  },
  
  // ...добавлены еще автомобили класса люкс и бизнес (опущено для краткости)
  
  // Ещё 9 люксовых автомобилей
  // Ещё 15 бизнес-автомобилей
  
].concat(
  // Генерируем еще 9 роскошных автомобилей
  Array.from({ length: 9 }, (_, i) => ({
    id: `${i + 7}`,
    brand: ['Bentley', 'Lamborghini', 'Ferrari', 'Aston Martin', 'Bugatti', 'McLaren'][i % 6],
    model: ['Continental GT', 'Aventador', 'SF90 Stradale', 'DBS Superleggera', 'Chiron', 'Speedtail'][i % 6],
    year: 2022 + (i % 2),
    price: 40000 + i * 1000,
    category: 'luxury' as const,
    images: [`https://images.unsplash.com/photo-${1580000000000 + i * 1000}?q=80&w=2000&auto=format&fit=crop`],
    modelUrl: `https://sketchfab.com/3d-models/luxury-car-${i + 1}`,
    features: ['Премиум аудио', 'Кожаная отделка', 'Панорамная крыша'],
    specs: {
      engine: `${4.0 + i * 0.2}L V8/V12`,
      power: `${550 + i * 20} л.с.`,
      acceleration: `${3.0 + i * 0.2}s 0-100 км/ч`,
      topSpeed: `${300 - i * 5} км/ч`,
    },
    available: true,
  }))
).concat(
  // Генерируем 15 бизнес-автомобилей
  Array.from({ length: 15 }, (_, i) => ({
    id: `${i + 16}`,
    brand: ['Mercedes-Benz', 'BMW', 'Audi', 'Lexus', 'Volvo'][i % 5],
    model: ['S-Class', '7 Series', 'A8', 'LS', 'S90'][i % 5],
    year: 2021 + (i % 3),
    price: 15000 + i * 500,
    category: 'business' as const,
    images: [`https://images.unsplash.com/photo-${1590000000000 + i * 1000}?q=80&w=2000&auto=format&fit=crop`],
    modelUrl: `https://sketchfab.com/3d-models/business-car-${i + 1}`,
    features: ['Кожаный салон', 'Навигация', 'Климат-контроль'],
    specs: {
      engine: `${2.0 + i * 0.2}L Turbo`,
      power: `${250 + i * 10} л.с.`,
      acceleration: `${5.0 + i * 0.3}s 0-100 км/ч`,
      topSpeed: `${240 - i * 2} км/ч`,
    },
    available: true,
  }))
);

export const reservations: Reservation[] = [
  {
    id: '1',
    userId: '1',
    carId: '1',
    startDate: '2025-04-28',
    endDate: '2025-05-02',
    status: 'confirmed',
    totalPrice: 140000,
  },
  {
    id: '2',
    userId: '2',
    carId: '6',
    startDate: '2025-05-10',
    endDate: '2025-05-12',
    status: 'pending',
    totalPrice: 100000,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    userId: '1',
    carId: '1',
    rating: 5,
    comment: 'Невероятный автомобиль! Потрясающие впечатления от вождения.',
    date: '2025-04-01',
  },
  {
    id: '2',
    userId: '2',
    carId: '6',
    rating: 4,
    comment: 'Роскошный автомобиль с непревзойденным комфортом.',
    date: '2025-03-15',
  },
];

// Функции для работы с "базой данных"
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getCarsByCategory = (category: Car['category']) => {
  return cars.filter(car => car.category === category);
};

export const getUserReservations = (userId: string): Reservation[] => {
  return reservations.filter(r => r.userId === userId);
};

export const addReservation = (reservation: Omit<Reservation, 'id'>) => {
  const newReservation = {
    ...reservation,
    id: `${reservations.length + 1}`,
  };
  reservations.push(newReservation);
  return newReservation;
};

export const loginUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

export const registerUser = (user: Omit<User, 'id'>) => {
  const newUser = {
    ...user,
    id: `${users.length + 1}`,
  };
  users.push(newUser);
  return newUser;
};
