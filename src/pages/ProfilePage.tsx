import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Car, Edit, User, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { currentUser, reservations, cars } from '@/data/database';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Находим бронирования пользователя
  const userReservations = reservations.filter(res => res.userId === currentUser.id);

  // Для каждого бронирования находим данные об автомобиле
  const reservationsWithDetails = userReservations.map(reservation => {
    const car = cars.find(car => car.id === reservation.carId);
    return { ...reservation, car };
  });

  // Получаем статус бронирования для отображения
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-500';
      case 'pending': return 'text-yellow-500';
      case 'cancelled': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтверждено';
      case 'pending': return 'Ожидает подтверждения';
      case 'cancelled': return 'Отменено';
      case 'completed': return 'Завершено';
      default: return status;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
          
          {/* Табы */}
          <div className="flex border-b border-gray-800 mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'profile' ? 'border-b-2 border-white text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User className="inline-block mr-2 h-5 w-5" />
              Профиль
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'reservations' ? 'border-b-2 border-white text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('reservations')}
            >
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Мои бронирования
            </button>
          </div>
          
          {/* Контент профиля */}
          {activeTab === 'profile' && (
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
                <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{currentUser.name}</h2>
                  <p className="text-gray-400">Клиент MEOWEST с 2025 года</p>
                  <Button variant="outline" className="mt-4">
                    <Edit className="mr-2 h-4 w-4" />
                    Редактировать профиль
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Личная информация</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Имя</p>
                      <p>{currentUser.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p>{currentUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Телефон</p>
                      <p>{currentUser.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Статистика</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Всего бронирований</p>
                      <p>{userReservations.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Активные бронирования</p>
                      <p>{userReservations.filter(res => res.status === 'confirmed' || res.status === 'pending').length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Завершенные бронирования</p>
                      <p>{userReservations.filter(res => res.status === 'completed').length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Контент бронирований */}
          {activeTab === 'reservations' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Мои бронирования</h2>
              
              {reservationsWithDetails.length === 0 ? (
                <div className="bg-gray-900 rounded-lg p-8 text-center">
                  <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">У вас пока нет бронирований</h3>
                  <p className="text-gray-400 mb-6">Выберите автомобиль из нашего автопарка и создайте своё первое бронирование</p>
                  <Link to="/cars">
                    <Button>Выбрать автомобиль</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {reservationsWithDetails.map(reservation => (
                    <div key={reservation.id} className="bg-gray-900 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          {reservation.car && (
                            <div className="rounded-lg overflow-hidden h-48">
                              <img 
                                src={reservation.car.image || `https://source.unsplash.com/random/800x600/?car,${reservation.car.brand}`} 
                                alt={reservation.car.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{reservation.car?.name || 'Неизвестный автомобиль'}</h3>
                            <span className={`flex items-center ${getStatusColor(reservation.status)}`}>
                              {reservation.status === 'confirmed' && <CheckCircle className="mr-1 h-4 w-4" />}
                              {reservation.status === 'pending' && <Clock className="mr-1 h-4 w-4" />}
                              {reservation.status === 'cancelled' && <AlertCircle className="mr-1 h-4 w-4" />}
                              {getStatusText(reservation.status)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-sm text-gray-400">Дата начала</p>
                              <p>{new Date(reservation.startDate).toLocaleDateString('ru-RU')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Дата окончания</p>
                              <p>{new Date(reservation.endDate).toLocaleDateString('ru-RU')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Дата создания</p>
                              <p>{new Date(reservation.createdAt).toLocaleDateString('ru-RU')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Общая стоимость</p>
                              <p>{reservation.totalPrice.toLocaleString('ru-RU')} ₽</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {reservation.status === 'pending' && (
                              <Button variant="destructive">Отменить бронирование</Button>
                            )}
                            <Button variant="outline">Подробнее</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;