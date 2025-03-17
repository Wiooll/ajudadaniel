
import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-white border-t border-campaign-light-blue/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-campaign-rose" strokeWidth={2.5} />
              <span className="font-display text-xl font-semibold">
                Ajude Daniel
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Campanha de arrecadação para ajudar o Daniel a adquirir um botão de gastrostomia e 
              melhorar sua qualidade de vida.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Sobre a Campanha
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Como Ajudar
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Informações</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sindrome-west" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Síndrome de West
                </Link>
              </li>
              <li>
                <Link to="/gastrostomia" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Procedimento de Gastrostomia
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/atualizacoes" className="text-sm text-muted-foreground hover:text-campaign-blue transition-colors">
                  Atualizações
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: ajudedaniel@exemplo.com
              </li>
              <li className="text-sm text-muted-foreground">
                Telefone: (11) 99999-9999
              </li>
              <li className="text-sm text-muted-foreground">
                São Paulo, SP - Brasil
              </li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-campaign-blue hover:text-campaign-dark-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-campaign-blue hover:text-campaign-dark-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-campaign-blue hover:text-campaign-dark-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4c0 8-10 13-14 8-2 2-5 5-8 5 0-3 3-6 5-8-5-4 0-14 8-14a7 7 0 0 1 7 7c0 .4-.1.8-.2 1.2a10 10 0 0 1 2.2.8l1 1-.6 1.2c-.2.4-.6.8-1 1a10 10 0 0 1-3.4.8 7 7 0 0 1-7 7c-3 0-5.2-2-7-4 8 0 14-10 14-14 0 0-2 1-2 4"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-campaign-light-blue/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Campanha Ajude Daniel. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm text-campaign-blue hover:text-campaign-dark-blue transition-colors"
          >
            Voltar ao topo
            <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
