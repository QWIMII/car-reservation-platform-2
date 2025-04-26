import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageContent, { PageHeader, Section } from './PageContent';

const ContactsPage = () => {
  return (
    <PageContent>
      <PageHeader
        title="Контакты"
        description="Свяжитесь с нами, чтобы арендовать автомобиль мечты или получить ответы на вопросы"
        backgroundImage="/images/contacts-bg.jpg"
      />

      <Section bgColor="bg-white" textColor="text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
            <p className="text-lg text-gray-600 mb-8">
              Заполните форму ниже, и наш менеджер свяжется с вами в течение 30 минут. Мы готовы ответить на любые вопросы об аренде автомобилей и помочь с выбором.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (999) 123-45-67" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="example@mail.ru" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите ваш запрос..." 
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button className="w-full md:w-auto px-8">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Адрес</h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Арбат, 1<br />
                    Шоурум и офис компании
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Телефон</h3>
                  <p className="text-gray-600">
                    +7 (999) 123-45-67<br />
                    +7 (999) 765-43-21 (VIP-клиенты)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">
                    info@meowest.ru<br />
                    support@meowest.ru
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Время работы</h3>
                  <p className="text-gray-600">
                    Пн-Пт: 9:00 - 21:00<br />
                    Сб-Вс: 10:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="p-0 m-0" bgColor="bg-transparent">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.830813435!2d37.59789761588765!3d55.752096180554636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0YPQuy4g0JDRgNCx0LDRgiwgMSwg0JzQvtGB0LrQstCwLCAxMTkwMTk!5e0!3m2!1sru!2sru!4v1651650574485!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </PageContent>
  );
};

export default ContactsPage;