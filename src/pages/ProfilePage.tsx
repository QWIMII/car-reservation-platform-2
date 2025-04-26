import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUser, reservations, cars } from '@/data/database';
import PageContent from './PageContent';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Получаем бронирования текущего пользователя
  const userReservations = reservations.filter(reservation => 
    reservation.userId === currentUser.id
  );
  
  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  // Функция для получения статуса на русском языке
  const getStatusText = (status: string) => {
    switch(status) {
      case 'pending': return 'В ожидании';
      case 'active': return 'Активно';
      case 'completed': return 'Завершено';
      case 'cancelled': return 'Отменено';
      default: return status;
    }
  };

  // Функция для получения цвета бейджа в зависимости от статуса
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-yellow-500';
      case 'active': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <PageContent>
      <div className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-10">Личный кабинет</h1>
          
          <Tabs defaultValue="profile" onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="reservations">Мои бронирования</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Профиль пользователя</CardTitle>
                  <CardDescription className="text-gray-400">
                    Управляйте личной информацией и бронированиями
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                        <AvatarFallback>{currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <Button variant="outline">Изменить фото</Button>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm text-gray-400">Имя</label>
                          <div className="text-lg font-medium">{currentUser.name}</div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Email</label>
                          <div className="text-lg font-medium">{currentUser.email}</div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Телефон</label>
                          <div className="text-lg font-medium">{currentUser.phone}</div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Дата регистрации</label>
                          <div className="text-lg font-medium">{formatDate(currentUser.createdAt)}</div>
                        </div>
                      </div>
                      
                      <div className="pt-4 space-y-4">
                        <h3 className="text-xl font-semibold">Настройки аккаунта</h3>
                        <div className="flex flex-col space-y-4">
                          <Button variant="outline">Изменить личные данные</Button>
                          <Button variant="outline">Изменить пароль</Button>
                          <Button variant="outline" className="text-red-500 hover:text-red-400 hover:bg-red-950 border-red-800">
                            Удалить аккаунт
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reservations">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>История бронирований</CardTitle>
                  <CardDescription className="text-gray-400">
                    Все ваши заказы и бронирования автомобилей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {userReservations.length > 0 ? (
                    <div className="space-y-6">
                      {userReservations.map(reservation => {
                        // Получаем информацию об автомобиле
                        const car = cars.find(car => car.id === reservation.carId);
                        if (!car) return null;
                        
                        const carImage = car.image.startsWith('http') 
                          ? car.image 
                          : `/images/cars/${car.id}.jpg`;
                        
                        return (
                          <div key={reservation.id} className="flex flex-col md:flex-row gap-6 border-b border-gray-800 pb-6">
                            <div className="w-full md:w-1/4">
                              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                                <img 
                                  src={carImage} 
                                  alt={car.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <Badge className={`${getStatusColor(reservation.status)}`}>
                                {getStatusText(reservation.status)}
                              </Badge>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-400">Дата начала</p>
                                  <p>{formatDate(reservation.startDate)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-400">Дата окончания</p>
                                  <p>{formatDate(reservation.endDate)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-400">Номер заказа</p>
                                  <p>#{reservation.id.toString().padStart(6, '0')}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-400">Стоимость</p>
                                  <p className="font-semibold">{reservation.totalPrice.toLocaleString()} ₽</p>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                {reservation.status === 'pending' && (
                                  <>
                                    <Button variant="default">Подтвердить</Button>
                                    <Button variant="outline">Отменить</Button>
                                  </>
                                )}
                                
                                {reservation.status === 'active' && (
                                  <Button variant="outline">Продлить аренду</Button>
                                )}
                                
                                {reservation.status === 'completed' && (
                                  <Button asChild variant="outline">
                                    <Link to={`/cars/${car.id}`}>
                                      Забронировать снова
                                    </Link>
                                  </Button>
                                )}
                                
                                <Button variant="outline">
                                  Детали заказа
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <h3 className="text-xl font-semibold mb-2">У вас пока нет бронирований</h3>
                      <p className="text-gray-400 mb-6">Выберите автомобиль из нашего премиального автопарка, чтобы забронировать его</p>
                      <Button asChild>
                        <Link to="/cars">Перейти к автомобилям</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageContent>
  );
};

export default ProfilePage;