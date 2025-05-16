import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToIntroduction = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/7520998/pexels-photo-7520998.jpeg" 
          alt="HB Shooting Range" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="block">최고의 사격 경험</span>
          <span className="block mt-2 text-yellow-300">HB Shooting</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
          전문 시설과 안전한 환경에서 사격의 즐거움을 경험하세요
        </p>
        <button 
          onClick={scrollToIntroduction}
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
        >
          더 알아보기
        </button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button onClick={scrollToIntroduction} className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;