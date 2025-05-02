
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage }) => {
  return (
    <header className="relative w-full h-[80vh] min-h-[480px] flex flex-col justify-between">
      <div 
        className="absolute inset-0 bg-black bg-opacity-35 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      <div className="relative z-10 w-full p-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl md:text-3xl tracking-wider">
          <span className="text-drive-red">ДРАЙВ</span>
        </div>
        
        <a href="tel:+79966215396" className="text-white text-lg md:text-xl font-bold text-shadow-black hover:text-drive-red transition-colors duration-300">
          +7 (996) 621-53-96
        </a>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-shadow-black">
          Кузовной ремонт в Тольятти
        </h1>
        <a 
          href="tel:+79966215396" 
          className="bg-drive-red text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors duration-300"
        >
          Позвонить
        </a>
      </div>
      
      <div className="relative z-10 text-center pb-8">
        <p className="text-gray-400 text-sm font-medium">ул. Офицерская 26</p>
      </div>
    </header>
  );
};

export default Header;
