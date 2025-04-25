
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { users, getUserReservations, getCarById } from '@/data/database';
import { User, Reservation } from '@/types';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseNumber: '',
  });

  // Имитация авторизации
  useEffect(() => {
    // В реальном приложении здесь была бы проверка токена и запрос к API
    const loggedInUser = users[0]; // Используем первого пользователя для демо
    
    if (loggedInUser) {
      setUser(loggedInUser);
      setFormData({
        name: loggedInUser.name,
        email: loggedInUser.email,
        phone: loggedInUser.phone,
        licenseNumber: loggedInUser.licenseNumber,
      });
      
      const userReservations = getUserReservations(loggedInUser.id);
      setReservations(userReservations);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const updatedUser = { ...user, ...formData };
      setUser(updatedUser);
      setIsEditing(false);
    }
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
          
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="reservations">Бронирования</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Профиль пользователя</CardTitle>
                  <CardDescription>
                    Управление личной информацией и настройками аккаунта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="licenseNumber">Номер водительского удостоверения</Label>
                          <Input 
                            id="licenseNumber" 
                            name="licenseNumber" 
                            value={formData.licenseNumber} 
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        {isEditing ? (
                          <>
                            <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                              Отмена
                            </Button>
                            <Button type="submit">Сохранить</Button>
                          </>
                        ) : (
                          <Button type="button" onClick={() => setIsEditing(true)}>
                            Редактировать
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reservations">
              <Card>
                <CardHeader>
                  <CardTitle>Текущие бронирования</CardTitle>
                  <CardDescription>
                    Управление текущими и предстоящими бронированиями автомобилей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {reservations.length > 0 ? (
                    <div className="space-y-6">
                      {reservations.map(reservation => {
                        const car = getCarById(reservation.carId);
                        return (
                          <div key={reservation.id} className="border rounded-lg p-4">
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="w-full md:w-1/4">
                                {car && (
                                  <img 
                                    src={car.images[0]} 
                                    alt={`${car.brand} ${car.model}`} 
                                    className="w-full h-32 object-cover rounded-lg"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-lg mb-2">
                                  {car ? `${car.brand} ${car.model}` : 'Автомобиль недоступен'}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-500">Период аренды:</p>
                                    <p className="font-medium">
                                      {new Date(reservation.startDate).toLocaleDateString('ru-RU')} - 
                                      {new Date(reservation.endDate).toLocaleDateString('ru-RU')}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-500">Статус:</p>
                                    <p className={`font-medium ${
                                      reservation.status === 'confirmed' ? 'text-green-600' : 
                                      reservation.status === 'pending' ? 'text-yellow-600' : 
                                      'text-gray-600'
                                    }`}>
                                      {reservation.status === 'confirmed' ? 'Подтверждено' : 
                                       reservation.status === 'pending' ? 'В ожидании' : 
                                       reservation.status === 'completed' ? 'Завершено' : 'Отменено'}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <p className="text-sm text-gray-500">Общая стоимость:</p>
                                  <p className="font-bold text-lg">
                                    {reservation.totalPrice.toLocaleString('ru-RU')} ₽
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                              <Button variant="outline">Детали</Button>
                              {reservation.status === 'pending' && (
                                <Button variant="destructive">Отменить</Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">У вас еще нет активных бронирований</p>
                      <Button onClick={() => navigate('/cars')}>
                        Выбрать автомобиль
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>История аренды</CardTitle>
                  <CardDescription>
                    Ваша история аренды автомобилей и завершенные бронирования
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500">История аренды пуста</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
