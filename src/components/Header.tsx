import { useState, useEffect } from 'react';
import { Menu, X, Target } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Target size={32} className="text-yellow-300 mr-2" />
          <span className="text-white font-bold text-xl md:text-2xl">HB Shooting</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['소개', '가격', '공지사항', '회원신청'].map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(['introduction', 'pricing', 'announcements', 'membership'][index])}
                  className="text-white hover:text-yellow-300 transition-colors font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed top-16 left-0 w-full h-screen bg-gray-900 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center pt-8 space-y-8">
          {['소개', '가격', '공지사항', '회원신청'].map((item, index) => (
            <li key={index} className="w-full text-center">
              <button 
                onClick={() => scrollToSection(['introduction', 'pricing', 'announcements', 'membership'][index])}
                className="text-white hover:text-yellow-300 transition-colors text-xl font-medium py-2"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;