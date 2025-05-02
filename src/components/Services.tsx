
import React from 'react';

interface Service {
  title: string;
  description: string;
  price: string;
  image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Покраска',
      description: 'Профессиональная покраска деталей автомобиля с использованием высококачественных материалов и технологий.',
      price: 'от 5 000 ₽',
      image: 'https://cdn.poehali.dev/files/1e1c616a-ef1b-4286-bd50-3ede755bd620.jpg'
    },
    {
      title: 'Выравнивание кузова',
      description: 'Устранение вмятин, деформаций и других повреждений кузова с восстановлением геометрии и первоначального внешнего вида.',
      price: 'от 3 000 ₽',
      image: 'https://cdn.poehali.dev/files/3d7811b1-9084-4d25-b93a-725c64cc8b04.jpg'
    },
    {
      title: 'Ремонт после ДТП',
      description: 'Комплексная реставрация автомобиля после аварии, включая кузовной ремонт, покраску и восстановление систем безопасности.',
      price: 'от 10 000 ₽',
      image: 'https://cdn.poehali.dev/files/00099cb1-7adc-4508-a32a-b26eb1c4dd78.jpg'
    },
    {
      title: 'Техническое обслуживание',
      description: 'Регулярное обслуживание и диагностика автомобиля для обеспечения безопасности и долговечности вашего транспортного средства.',
      price: 'от 2 500 ₽',
      image: 'https://cdn.poehali.dev/files/90f22319-2702-40a1-aaff-37ada79f70f1.jpg'
    },
    {
      title: 'Полировка',
      description: 'Профессиональная полировка кузова автомобиля для устранения мелких царапин и придания блеска лакокрасочному покрытию.',
      price: 'от 4 000 ₽',
      image: 'https://cdn.poehali.dev/files/7cbcfdd0-a94e-404d-ad7f-4b1133ad21d6.jpg'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-drive-gray text-sm mb-3">{service.description}</p>
              <div className="flex flex-col mt-auto">
                <p className="price-tag mb-3">{service.price}</p>
                <p className="text-drive-gray text-xs mb-4">*зависит от сложности выполнения работ</p>
                <a href="tel:+79966215396" className="call-button">
                  Позвонить
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
