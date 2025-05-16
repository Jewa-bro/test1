import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, Award } from 'lucide-react';

const carouselImages = [
  {
    url: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg",
    title: "전문 사격 시설",
    description: "최신 장비와 안전한 환경에서 사격을 즐기세요"
  },
  {
    url: "https://images.pexels.com/photos/7520998/pexels-photo-7520998.jpeg",
    title: "전문 강사진",
    description: "국가대표 상비군 코치 출신의 강사진이 초보자부터 전문가까지 맞춤 교육을 제공합니다"
  },
  {
    url: "https://images.pexels.com/photos/8100504/pexels-photo-8100504.jpeg",
    title: "다양한 총기 체험",
    description: "여러 종류의 총기를 안전하게 체험해보세요"
  }
];

const Introduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: "최고의 안전성",
      description: "철저한 안전 교육과 관리를 통해 안전하게 사격을 즐길 수 있습니다."
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-500" />,
      title: "다양한 사격 코스",
      description: "초보자부터 전문가까지 다양한 레벨의 사격 코스를 제공합니다."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "전문 강사진",
      description: "국가대표 상비군 코치 출신의 강사진이 맞춤형 교육을 제공합니다."
    }
  ];

  return (
    <section id="introduction" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          HB Shooting <span className="text-yellow-400">소개</span>
        </h2>
        
        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16 overflow-hidden rounded-lg shadow-xl h-[400px] md:h-[500px]">
          {/* Images */}
          <div className="absolute inset-0">
            {carouselImages.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-base md:text-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 rounded-full p-2 text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 rounded-full p-2 text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-500' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;