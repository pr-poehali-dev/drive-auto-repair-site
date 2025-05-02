
import React from 'react';
import Icon from '@/components/ui/icon';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-16 bg-drive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Наш адрес</h3>
              <div className="flex items-start">
                <Icon name="MapPin" className="mr-2 mt-1 text-drive-red" />
                <p>г. Тольятти, ул. Офицерская 26</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Телефоны</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 text-drive-red" />
                  <a href="tel:+79966215396" className="hover:text-drive-red transition-colors">+7 (996) 621-53-96</a>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 text-drive-red" />
                  <a href="tel:740877" className="hover:text-drive-red transition-colors">740-877</a>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 text-drive-red" />
                  <a href="tel:+79277703126" className="hover:text-drive-red transition-colors">+7 927 770 3126</a>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-2 text-drive-red" />
                <a href="mailto:alexpro63@mail.ru" className="hover:text-drive-red transition-colors">alexpro63@mail.ru</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex items-center">
                <Icon name="Send" className="mr-2 text-drive-red" />
                <a href="https://t.me/alexander_prodrive" target="_blank" rel="noopener noreferrer" className="hover:text-drive-red transition-colors">Telegram канал</a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.6276878531506!2d49.4267702!3d53.3881873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416879522f64d66d%3A0x3cdc7dd5a1f9b892!2z0J7RhNC40YbQtdGA0YHQutCw0Y8g0YPQuy4sIDI2LCDQotC-0LvRjNGP0YLRgtC4LCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQ1MDI0!5e0!3m2!1sru!2sru!4v1682937129939!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-drive-gray mb-2">© 2025 Автосервис "Драйв". Все права защищены.</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-drive-gray hover:text-drive-red transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-drive-gray hover:text-drive-red transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
