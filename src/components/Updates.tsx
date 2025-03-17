
import { useRef, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface UpdatePost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const updatePosts: UpdatePost[] = [
  {
    id: 1,
    title: 'Iniciamos oficialmente nossa campanha',
    date: '15 de Outubro, 2023',
    excerpt: 'Hoje damos início à nossa campanha de arrecadação para ajudar o Daniel a adquirir o botão de gastrostomia. Contamos com o apoio de todos!',
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    title: 'Primeiro marco alcançado: R$ 500',
    date: '22 de Outubro, 2023',
    excerpt: 'Graças à generosidade de muitos, já alcançamos o primeiro marco da nossa campanha. Estamos a caminho de realizar esse sonho!',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    title: 'Daniel vai passar por nova avaliação médica',
    date: '30 de Outubro, 2023',
    excerpt: 'Esta semana, Daniel terá uma consulta importante para avaliar seu progresso e planejar o procedimento de gastrostomia.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3'
  }
];

const Updates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.reveal-animation > *');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.reveal-animation > *');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="atualizacoes" className="py-20 bg-campaign-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-rose text-campaign-rose inline-block mb-4">
            Atualizações
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Acompanhe o progresso da campanha
          </h2>
          <p className="text-muted-foreground">
            Fique por dentro das últimas notícias e marcos importantes da nossa jornada para ajudar o Daniel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 reveal-animation">
          {updatePosts.map((post) => (
            <Link to={`/atualizacoes/${post.id}`} key={post.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-campaign-light-blue/20 h-full card-hover">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <h3 className="font-medium text-lg mb-2 group-hover:text-campaign-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-campaign-blue text-sm font-medium">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center reveal-animation">
          <Button variant="outline" className="border-campaign-blue text-campaign-blue hover:bg-campaign-light-blue/50">
            Ver Todas as Atualizações
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Updates;
