
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre as Campanhas', path: '/#sobre' },
    { name: 'Galeria', path: '/#galeria' },
    { name: 'Como Ajudar', path: '/#como-ajudar' },
    { name: 'Síndrome de West', path: '/#syndrome' },
    { name: 'Atualizações', path: '/#atualizacoes' },
    { name: 'Contato', path: '/#contato' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetId = sectionId.replace('/#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => scrollToSection('/')}
          >
            <Heart className="h-6 w-6 text-campaign-rose" strokeWidth={2.5} />
            <span className="font-display text-xl font-semibold">
              Ajude Daniel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-campaign-blue transition-colors link-underline"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.path);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              className="bg-campaign-blue hover:bg-campaign-dark-blue transition-colors"
              onClick={() => scrollToSection('/#como-ajudar')}
            >
              Doar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground/80 hover:text-foreground transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-sm font-medium text-foreground/80 hover:text-campaign-blue transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.path);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-campaign-blue hover:bg-campaign-dark-blue transition-colors w-full mt-2"
                onClick={() => scrollToSection('/#como-ajudar')}
              >
                Doar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
