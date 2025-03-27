import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { Button } from './ui/button';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://raw.githubusercontent.com/Wiooll/ajudadaniel/refs/heads/main/src/img/piscina.jpg',
    title: 'Daniel com a família',
    description: 'Um dia especial em família.'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://raw.githubusercontent.com/Wiooll/ajudadaniel/refs/heads/main/src/img/fisio.jpg',
    title: 'Momentos de terapia',
    description: 'Daniel durante uma de suas sessões de fisioterapia.'
  },
  // {
  //   id: 3,
  //   type: 'image',
  //   src: 'https://images.unsplash.com/photo-1608681299945-8c19ed1bc404?auto=format&fit=crop&q=80&w=2952&ixlib=rb-4.0.3',
  //   title: 'Brincando no parque',
  //   description: 'Apesar dos desafios, Daniel adora momentos ao ar livre.'
  // },
  // {
  //   id: 4,
  //   type: 'video',
  //   src: 'https://example.com/video.mp4',
  //   thumbnail: 'https://images.unsplash.com/photo-1524717910584-66bb0fa4d162?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
  //   title: 'Mensagem da família',
  //   description: 'Um agradecimento especial a todos que têm apoiado nossa jornada.'
  // },
  {
    id: 5,
    type: 'image',
    src: 'https://raw.githubusercontent.com/Wiooll/ajudadaniel/refs/heads/main/src/img/hospital.jpg',
    title: 'No hospital',
    description: 'Durante uma de suas consultas médicas regulares.'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://raw.githubusercontent.com/Wiooll/ajudadaniel/refs/heads/main/src/img/evolucao.jpg',
    title: 'Evolução do tratamento',
    description: 'Pequenos avanços que fazem toda a diferença.'
  }
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(mediaItems.length / 3) - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(mediaItems.length / 3) - 1 : prev - 1
    );
  };
  
  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  
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
  
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  
  return (
    <section ref={sectionRef} id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-blue text-campaign-blue inline-block mb-4">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Momentos da jornada do Daniel
          </h2>
          <p className="text-muted-foreground">
            Compartilhamos aqui alguns momentos especiais da vida do Daniel, suas conquistas e desafios diários.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={slideContainerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${Math.ceil(mediaItems.length / 3) * 100}%` }}
          >
            {Array.from({ length: Math.ceil(mediaItems.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediaItems
                    .slice(slideIndex * 3, (slideIndex + 1) * 3)
                    .map((item) => (
                      <div 
                        key={item.id} 
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-campaign-light-blue/20 card-hover cursor-pointer h-full flex flex-col"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="relative overflow-hidden flex-1">
                          <img 
                            src={item.type === 'image' ? item.src :  item.thumbnail} 
                            alt={item.title}
                            className="w-full h-auto max-h-[300px] object-contain"
                          />
                          {item.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="bg-white/90 rounded-full p-2">
                                <Play className="h-8 w-8 text-campaign-blue" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-campaign-dark-blue" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-campaign-dark-blue" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(mediaItems.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                currentSlide === index ? 'bg-campaign-blue' : 'bg-campaign-light-blue'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <Button variant="outline" className="border-campaign-blue text-campaign-blue hover:bg-campaign-light-blue/50">
            Ver Toda a Galeria
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
      
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-auto relative max-h-[70vh]">
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <Play className="h-16 w-16 text-white/50" />
                  <p className="text-white/70 absolute bottom-4 left-4">Vídeo demo (não reproduzível nesta versão)</p>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-medium mb-2">{selectedItem.title}</h3>
              <p className="text-muted-foreground">{selectedItem.description}</p>
              <Button variant="ghost" className="mt-4" onClick={() => setSelectedItem(null)}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
