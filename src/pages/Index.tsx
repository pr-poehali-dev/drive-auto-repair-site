
import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';

const Index: React.FC = () => {
  // Используем фоновое изображение для хедера (5-е изображение)
  const headerBackgroundImage = "https://cdn.poehali.dev/files/2395411e-4412-4ad5-92e7-22fc526c984c.jpg";

  return (
    <div className="min-h-screen bg-white">
      <Header backgroundImage={headerBackgroundImage} />
      <Services />
      <About />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default Index;
