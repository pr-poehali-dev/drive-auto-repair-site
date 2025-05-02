
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews: Review[] = [
    {
      name: 'Алексей Петров',
      date: '15.03.2025',
      text: 'Отличный автосервис! Быстро и качественно устранили вмятину на двери. Цена полностью соответствует качеству. Рекомендую всем, кто ищет хороший кузовной ремонт в Тольятти.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      date: '02.02.2025',
      text: 'Обращалась для покраски крыла после небольшого ДТП. Мастера подобрали идеальный цвет, не отличить от заводского. Сделали всё в обещанный срок. Очень довольна результатом!',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      date: '28.01.2025',
      text: 'Привозил машину на ремонт после серьезного ДТП. Ребята восстановили геометрию, заменили и покрасили детали - всё на высшем уровне. Машина как новая. Большое спасибо мастерам!',
      rating: 5
    },
    {
      name: 'Ирина Смирнова',
      date: '10.12.2024',
      text: 'Делала полировку фар и кузова. Результат превзошёл ожидания - машина блестит как новая! Приятно удивили сроки и стоимость работ. Буду обращаться только сюда.',
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Отображаем текущий отзыв и два следующих (с циклическим переходом)
  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {visibleReviews.map((review, index) => (
              <Card key={index} className="flex-1 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                  <p className="mb-4 text-drive-dark">{review.text}</p>
                  <div className="mt-auto">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-drive-gray text-sm">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full"
            >
              <Icon name="ChevronLeft" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
            >
              <Icon name="ChevronRight" />
            </Button>
          </div>
          
          <p className="text-center text-drive-gray text-sm mt-6">*отзывы с приложения 2GIS</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
