import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Pricing from './components/Pricing';
import Announcements from './components/Announcements';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`font-sans transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Pricing />
        <Announcements />
        <Membership />
      </main>
      <Footer />
    </div>
  );
}

export default App;