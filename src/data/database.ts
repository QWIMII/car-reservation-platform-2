export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  reservations: string[];
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: 'porsche' | 'luxury' | 'business';
  price: number;
  image: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    maxSpeed: string;
  };
  modelUrl: string;
}

export interface Reservation {
  id: string;
  userId: string;
  carId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalPrice: number;
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  carId: string;
  rating: number;
  text: string;
  date: string;
}

// Демо-пользователь
const currentUser: User = {
  id: 'user1',
  name: 'Иван Петров',
  email: 'ivan@example.com',
  phone: '+7 (909) 123-45-67',
  reservations: ['res1', 'res2']
};

// Каталог автомобилей
const cars: Car[] = [
  // Porsche (5)
  {
    id: 'car1',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    category: 'porsche',
    price: 25000,
    image: '/images/porsche-911.jpg',
    description: 'Легендарный спортивный автомобиль с непревзойденной управляемостью и стилем.',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '379 л.с.',
      acceleration: '4.2 сек до 100 км/ч',
      maxSpeed: '293 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/porsche-911-c4s-9552e3bf3661473a8f6e0b6f0b0ef28d'
  },
  {
    id: 'car2',
    name: 'Porsche Taycan',
    brand: 'Porsche',
    model: 'Taycan Turbo S',
    year: 2023,
    category: 'porsche',
    price: 28000,
    image: '/images/porsche-taycan.jpg',
    description: 'Электрический спортивный автомобиль, сочетающий экологичность и производительность.',
    specs: {
      engine: 'Электродвигатель',
      power: '750 л.с.',
      acceleration: '2.8 сек до 100 км/ч',
      maxSpeed: '260 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/porsche-taycan-turbo-s-2020-game-ready-7814df9fbe124c28975da368856c22f8'
  },
  {
    id: 'car3',
    name: 'Porsche Panamera',
    brand: 'Porsche',
    model: 'Panamera Turbo S',
    year: 2023,
    category: 'porsche',
    price: 30000,
    image: '/images/porsche-panamera.jpg',
    description: 'Роскошный спортивный седан с динамикой суперкара и комфортом премиум-класса.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '620 л.с.',
      acceleration: '3.1 сек до 100 км/ч',
      maxSpeed: '315 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/porsche-panamera-turbo-2017-lowpoly-f7f03d32fb064e3382c22a261a0e7b72'
  },
  {
    id: 'car4',
    name: 'Porsche Macan',
    brand: 'Porsche',
    model: 'Macan GTS',
    year: 2023,
    category: 'porsche',
    price: 21000,
    image: '/images/porsche-macan.jpg',
    description: 'Компактный SUV с характеристиками спортивного автомобиля и практичностью кроссовера.',
    specs: {
      engine: '2.9L V6 Twin-Turbo',
      power: '440 л.с.',
      acceleration: '4.3 сек до 100 км/ч',
      maxSpeed: '272 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/porsche-macan-2014-lowpoly-df28682fa6424e5ab1d0116fc44d53c6'
  },
  {
    id: 'car5',
    name: 'Porsche Cayenne',
    brand: 'Porsche',
    model: 'Cayenne Turbo GT',
    year: 2023,
    category: 'porsche',
    price: 27000,
    image: '/images/porsche-cayenne.jpg',
    description: 'Спортивный внедорожник с выдающейся динамикой и премиальным комфортом.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '640 л.с.',
      acceleration: '3.3 сек до 100 км/ч',
      maxSpeed: '300 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/2018-porsche-cayenne-turbo-1d3dfc81d26c4486a0a6f7dbdc1646e8'
  },

  // Luxury Cars (10)
  {
    id: 'car6',
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2023,
    category: 'luxury',
    price: 42000,
    image: '/images/lamborghini-huracan.jpg',
    description: 'Итальянский суперкар с захватывающим дизайном и невероятной мощностью.',
    specs: {
      engine: '5.2L V10',
      power: '640 л.с.',
      acceleration: '2.9 сек до 100 км/ч',
      maxSpeed: '325 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/lamborghini-huracan-lp-640-4-performante-0a5823cd10f84e55a5db4e679e315cac'
  },
  {
    id: 'car7',
    name: 'Ferrari Roma',
    brand: 'Ferrari',
    model: 'Roma',
    year: 2023,
    category: 'luxury',
    price: 40000,
    image: '/images/ferrari-roma.jpg',
    description: 'Элегантное гран-туризмо с классическим итальянским стилем и современными технологиями.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '620 л.с.',
      acceleration: '3.4 сек до 100 км/ч',
      maxSpeed: '320 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/ferrari-roma-2020-6a61ca4acbc545a5b09a566667a7a71b'
  },
  {
    id: 'car8',
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    model: 'Continental GT Speed',
    year: 2023,
    category: 'luxury',
    price: 36000,
    image: '/images/bentley-continental.jpg',
    description: 'Роскошный гран-туризмо, сочетающий традиционное британское качество и современную динамику.',
    specs: {
      engine: '6.0L W12 Twin-Turbo',
      power: '650 л.с.',
      acceleration: '3.5 сек до 100 км/ч',
      maxSpeed: '335 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/bentley-continental-gt-2018-cae0d6d56e5044dcb7bc1630aa8c1e73'
  },
  {
    id: 'car9',
    name: 'Rolls-Royce Ghost',
    brand: 'Rolls-Royce',
    model: 'Ghost',
    year: 2023,
    category: 'luxury',
    price: 45000,
    image: '/images/rolls-royce-ghost.jpg',
    description: 'Воплощение роскоши и комфорта в элегантном седане ручной сборки.',
    specs: {
      engine: '6.75L V12 Twin-Turbo',
      power: '571 л.с.',
      acceleration: '4.8 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/rolls-royce-ghost-2021-full-interior-a4d4ae26c1fe47e28c9e10a4f77d6aa6'
  },
  {
    id: 'car10',
    name: 'Aston Martin DBS',
    brand: 'Aston Martin',
    model: 'DBS Superleggera',
    year: 2023,
    category: 'luxury',
    price: 38000,
    image: '/images/aston-martin-dbs.jpg',
    description: 'Британский гран-туризмо с шикарным дизайном и выдающимися динамическими характеристиками.',
    specs: {
      engine: '5.2L V12 Twin-Turbo',
      power: '725 л.с.',
      acceleration: '3.4 сек до 100 км/ч',
      maxSpeed: '340 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/aston-martin-dbs-superleggera-c6a6449b4a5d493aa8d5ac5b76c1dafb'
  },
  {
    id: 'car11',
    name: 'McLaren 720S',
    brand: 'McLaren',
    model: '720S',
    year: 2023,
    category: 'luxury',
    price: 43000,
    image: '/images/mclaren-720s.jpg',
    description: 'Инновационный суперкар с продвинутой аэродинамикой и передовыми технологиями.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '720 л.с.',
      acceleration: '2.9 сек до 100 км/ч',
      maxSpeed: '341 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/mclaren-720s-5a5d4733016e45a5bfc9eadac1b946ea'
  },
  {
    id: 'car12',
    name: 'Bugatti Chiron',
    brand: 'Bugatti',
    model: 'Chiron Super Sport',
    year: 2023,
    category: 'luxury',
    price: 65000,
    image: '/images/bugatti-chiron.jpg',
    description: 'Один из самых быстрых и эксклюзивных гиперкаров в мире.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1600 л.с.',
      acceleration: '2.4 сек до 100 км/ч',
      maxSpeed: '440 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/bugatti-chiron-2017-8ad468639f8f47c4a3f85ee41d640201'
  },
  {
    id: 'car13',
    name: 'Maserati MC20',
    brand: 'Maserati',
    model: 'MC20',
    year: 2023,
    category: 'luxury',
    price: 32000,
    image: '/images/maserati-mc20.jpg',
    description: 'Итальянский суперкар с элегантным дизайном и инновационной силовой установкой.',
    specs: {
      engine: '3.0L V6 Twin-Turbo',
      power: '630 л.с.',
      acceleration: '2.9 сек до 100 км/ч',
      maxSpeed: '325 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/maserati-mc20-2021-5dd9bb5c3f08452dbec99c83fd3f5ab8'
  },
  {
    id: 'car14',
    name: 'Pagani Huayra',
    brand: 'Pagani',
    model: 'Huayra BC',
    year: 2023,
    category: 'luxury',
    price: 70000,
    image: '/images/pagani-huayra.jpg',
    description: 'Эксклюзивный гиперкар ручной сборки с уникальным дизайном и исключительными характеристиками.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '791 л.с.',
      acceleration: '2.8 сек до 100 км/ч',
      maxSpeed: '380 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/pagani-huayra-ff21b4abf30c4baa943732321edf7e89'
  },
  {
    id: 'car15',
    name: 'Koenigsegg Jesko',
    brand: 'Koenigsegg',
    model: 'Jesko Absolut',
    year: 2023,
    category: 'luxury',
    price: 75000,
    image: '/images/koenigsegg-jesko.jpg',
    description: 'Шведский гиперкар с рекордными показателями скорости и мощности.',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1600 л.с.',
      acceleration: '2.5 сек до 100 км/ч',
      maxSpeed: '500+ км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/koenigsegg-jesko-absolut-5aa1eb0a8ddb45cc9700378586f26b8a'
  },

  // Business Cars (15)
  {
    id: 'car16',
    name: 'Mercedes S-Class',
    brand: 'Mercedes-Benz',
    model: 'S 580 4MATIC',
    year: 2023,
    category: 'business',
    price: 18000,
    image: '/images/mercedes-s.jpg',
    description: 'Флагманский седан Mercedes с непревзойденным комфортом и передовыми технологиями.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '496 л.с.',
      acceleration: '4.4 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/mercedes-s-class-2021-9cb0a6c388c3409180fb2e3af2075aea'
  },
  {
    id: 'car17',
    name: 'BMW 7 Series',
    brand: 'BMW',
    model: '760i xDrive',
    year: 2023,
    category: 'business',
    price: 17500,
    image: '/images/bmw-7.jpg',
    description: 'Представительский седан с инновационными технологиями и превосходной динамикой.',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '536 л.с.',
      acceleration: '4.2 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/bmw-7-series-2023-00cdc7a1f8d04ecaa96f14a74f81e303'
  },
  {
    id: 'car18',
    name: 'Audi A8',
    brand: 'Audi',
    model: 'A8 L 60 TFSI',
    year: 2023,
    category: 'business',
    price: 16500,
    image: '/images/audi-a8.jpg',
    description: 'Роскошный седан с выдающимся комфортом и продвинутыми технологиями.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '453 л.с.',
      acceleration: '4.5 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/audi-a8-l-2018-7a387b439ff44defbedccd3088fd2a83'
  },
  {
    id: 'car19',
    name: 'Lexus LS',
    brand: 'Lexus',
    model: 'LS 500h',
    year: 2023,
    category: 'business',
    price: 15000,
    image: '/images/lexus-ls.jpg',
    description: 'Японский премиальный седан с гибридной силовой установкой и высочайшим уровнем комфорта.',
    specs: {
      engine: '3.5L V6 Hybrid',
      power: '354 л.с.',
      acceleration: '5.4 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/lexus-ls-500-2018-afafed5c38744b9089aa1aa83c276f1e'
  },
  {
    id: 'car20',
    name: 'Genesis G90',
    brand: 'Genesis',
    model: 'G90 3.5T',
    year: 2023,
    category: 'business',
    price: 14000,
    image: '/images/genesis-g90.jpg',
    description: 'Корейский представительский седан с элегантным дизайном и богатым оснащением.',
    specs: {
      engine: '3.5L V6 Twin-Turbo',
      power: '375 л.с.',
      acceleration: '5.1 сек до 100 км/ч',
      maxSpeed: '240 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/genesis-g90-2023-9c80c4aa599149ff9b12d48a3e2a5c3c'
  },
  {
    id: 'car21',
    name: 'Jaguar XJ',
    brand: 'Jaguar',
    model: 'XJ L',
    year: 2023,
    category: 'business',
    price: 15500,
    image: '/images/jaguar-xj.jpg',
    description: 'Элегантный британский седан, сочетающий роскошь и спортивный характер.',
    specs: {
      engine: '5.0L V8 Supercharged',
      power: '517 л.с.',
      acceleration: '4.6 сек до 100 км/ч',
      maxSpeed: '280 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/jaguar-xj-2019-97ff584bb00d4adbae6dd8f68caf07e9'
  },
  {
    id: 'car22',
    name: 'Volvo S90',
    brand: 'Volvo',
    model: 'S90 Recharge',
    year: 2023,
    category: 'business',
    price: 13000,
    image: '/images/volvo-s90.jpg',
    description: 'Шведский премиальный седан с гибридной силовой установкой и скандинавским дизайном.',
    specs: {
      engine: '2.0L I4 Plug-in Hybrid',
      power: '455 л.с.',
      acceleration: '4.9 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/volvo-s90-2017-25f0c2c5cd224c9ea0cfcfb5bd2c9d70'
  },
  {
    id: 'car23',
    name: 'Cadillac CT6',
    brand: 'Cadillac',
    model: 'CT6 V-Sport',
    year: 2023,
    category: 'business',
    price: 14500,
    image: '/images/cadillac-ct6.jpg',
    description: 'Американский представительский седан с мощным двигателем и современными технологиями.',
    specs: {
      engine: '4.2L V8 Twin-Turbo',
      power: '550 л.с.',
      acceleration: '4.2 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/cadillac-ct6-2016-0ab8a8cdce804a91be28ef5f341d1fe7'
  },
  {
    id: 'car24',
    name: 'Maserati Quattroporte',
    brand: 'Maserati',
    model: 'Quattroporte Trofeo',
    year: 2023,
    category: 'business',
    price: 19000,
    image: '/images/maserati-quattroporte.jpg',
    description: 'Итальянский спортивный седан с характерным звуком двигателя и утонченным дизайном.',
    specs: {
      engine: '3.8L V8 Twin-Turbo',
      power: '580 л.с.',
      acceleration: '4.5 сек до 100 км/ч',
      maxSpeed: '326 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/maserati-quattroporte-gts-gransport-2017-1fcbe8afcc83428ca993bbc0fa9a75e5'
  },
  {
    id: 'car25',
    name: 'Lincoln Continental',
    brand: 'Lincoln',
    model: 'Continental Reserve',
    year: 2023,
    category: 'business',
    price: 12000,
    image: '/images/lincoln-continental.jpg',
    description: 'Роскошный американский седан с элегантным дизайном и высоким уровнем комфорта.',
    specs: {
      engine: '3.0L V6 Twin-Turbo',
      power: '400 л.с.',
      acceleration: '5.5 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/lincoln-continental-2017-c21a1d3c9f45479eabadcc4af7bb22ba'
  },
  {
    id: 'car26',
    name: 'Kia K900',
    brand: 'Kia',
    model: 'K900 Luxury',
    year: 2023,
    category: 'business',
    price: 11000,
    image: '/images/kia-k900.jpg',
    description: 'Корейский премиальный седан с богатой комплектацией и доступной ценой.',
    specs: {
      engine: '3.3L V6 Twin-Turbo',
      power: '365 л.с.',
      acceleration: '5.7 сек до 100 км/ч',
      maxSpeed: '240 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/kia-k900-2019-7cce19ba0e0a4c0c82d8c7889e6f5c52'
  },
  {
    id: 'car27',
    name: 'Chrysler 300',
    brand: 'Chrysler',
    model: '300C',
    year: 2023,
    category: 'business',
    price: 10000,
    image: '/images/chrysler-300.jpg',
    description: 'Американский полноразмерный седан с характерным дизайном и мощным двигателем.',
    specs: {
      engine: '6.4L V8 HEMI',
      power: '485 л.с.',
      acceleration: '4.5 сек до 100 км/ч',
      maxSpeed: '280 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/chrysler-300-srt8-2012-56ab9e4ded2f4f4d8b3925c3b1ff9cab'
  },
  {
    id: 'car28',
    name: 'Infiniti Q70',
    brand: 'Infiniti',
    model: 'Q70L 5.6',
    year: 2023,
    category: 'business',
    price: 12500,
    image: '/images/infiniti-q70.jpg',
    description: 'Японский бизнес-седан с выразительным дизайном и премиальным интерьером.',
    specs: {
      engine: '5.6L V8',
      power: '420 л.с.',
      acceleration: '5.3 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/infiniti-q70-2016-66c5ec84a62d4e77b92d00c5ee40df6a'
  },
  {
    id: 'car29',
    name: 'Acura RLX',
    brand: 'Acura',
    model: 'RLX Sport Hybrid',
    year: 2023,
    category: 'business',
    price: 11500,
    image: '/images/acura-rlx.jpg',
    description: 'Премиальный гибридный седан с продвинутыми технологиями и отличной управляемостью.',
    specs: {
      engine: '3.5L V6 Hybrid',
      power: '377 л.с.',
      acceleration: '5.1 сек до 100 км/ч',
      maxSpeed: '240 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/acura-rlx-sport-hybrid-2018-1e30eeb7e63643c896db2b6d5cbee72a'
  },
  {
    id: 'car30',
    name: 'Genesis G80',
    brand: 'Genesis',
    model: 'G80 Sport',
    year: 2023,
    category: 'business',
    price: 13500,
    image: '/images/genesis-g80.jpg',
    description: 'Корейский спортивный бизнес-седан с элегантным дизайном и доступной ценой.',
    specs: {
      engine: '3.5L V6 Twin-Turbo',
      power: '375 л.с.',
      acceleration: '4.9 сек до 100 км/ч',
      maxSpeed: '250 км/ч'
    },
    modelUrl: 'https://sketchfab.com/3d-models/genesis-g80-2021-21c9ccb9f8fe40d385a1a85636ee4c32'
  },
];

// Бронирования
const reservations: Reservation[] = [
  {
    id: 'res1',
    userId: 'user1',
    carId: 'car1',
    startDate: '2025-04-28',
    endDate: '2025-05-02',
    status: 'confirmed',
    totalPrice: 125000,
    createdAt: '2025-04-20T10:30:00'
  },
  {
    id: 'res2',
    userId: 'user1',
    carId: 'car7',
    startDate: '2025-05-15',
    endDate: '2025-05-20',
    status: 'pending',
    totalPrice: 200000,
    createdAt: '2025-04-22T14:45:00'
  }
];

// Отзывы
const reviews: Review[] = [
  {
    id: 'rev1',
    userId: 'user1',
    carId: 'car1',
    rating: 5,
    text: 'Невероятный автомобиль! Управляемость на высшем уровне.',
    date: '2025-04-10'
  },
  {
    id: 'rev2',
    userId: 'user1',
    carId: 'car7',
    rating: 4,
    text: 'Отличный автомобиль, но расход топлива высоковат.',
    date: '2025-03-25'
  }
];

// Экспорт данных
export {
  currentUser,
  cars,
  reservations,
  reviews
};
