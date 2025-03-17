import { useEffect, useRef } from 'react';
import { Brain, Heart, Activity } from 'lucide-react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.reveal-animation > *');
      elements.forEach(el => observer.observe(el));
    }
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.reveal-animation > *');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  return <section ref={sectionRef} id="sobre" className="py-20 bg-campaign-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-rose text-campaign-rose inline-block mb-4">
            Sobre a Campanha
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Conheça a história do Daniel e sua jornada
          </h2>
          <p className="text-muted-foreground">Daniel é uma criança atípica que enfrenta diariamente os desafios da Síndrome de West. Aqui está sua história e o motivo pelo qual precisamos da sua ajuda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal-animation order-2 md:order-1">
            <h3 className="text-2xl font-display font-medium mb-4">
              Quem é o Daniel?
            </h3>
            <p className="text-muted-foreground mb-4">Daniel Morais é uma criança de 3 anos diagnosticada com Síndrome de West, uma forma rara de epilepsia infantil. Desde muito pequeno, ele enfrenta desafios neurológicos que afetam seu desenvolvimento.</p>
            <p className="text-muted-foreground mb-4">Apesar das dificuldades, Daniel é um menino cheio de vida e alegria. Seu sorriso ilumina qualquer ambiente e sua força inspira todos ao seu redor. A família tem dedicado todo seu tempo e recursos para garantir o melhor tratamento possível.</p>
            <p className="text-muted-foreground">Atualmente, Daniel necessita urgentemente de um botton de gastrostomia, um dispositivo que facilita a alimentação e a administração de medicamentos, essencial para sua qualidade de vida.</p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="src\img\daniel.jpg" alt="Daniel brincando" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-animation">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-campaign-light-blue/30 card-hover">
            <Brain className="h-10 w-10 text-campaign-blue mb-4" />
            <h4 className="text-xl font-medium mb-2">Síndrome de West</h4>
            <p className="text-muted-foreground">
              Uma forma rara de epilepsia infantil caracterizada por espasmos e atraso no desenvolvimento 
              neurológico, que requer tratamento contínuo e especializado.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-campaign-light-blue/30 card-hover">
            <Heart className="h-10 w-10 text-campaign-rose mb-4" />
            <h4 className="text-xl font-medium mb-2">Nossa Meta</h4>
            <p className="text-muted-foreground">Arrecadar R$ 2.000 para a compra do botton de gastrostomia que permitirá ao Daniel se alimentar adequadamente e receber seus medicamentos com mais conforto e segurança.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-campaign-light-blue/30 card-hover">
            <Activity className="h-10 w-10 text-campaign-teal mb-4" />
            <h4 className="text-xl font-medium mb-2">O Impacto</h4>
            <p className="text-muted-foreground">Com o botton de gastrostomia, Daniel terá uma melhora significativa em sua qualidade de vida, reduzindo complicações e permitindo que se concentre em seu desenvolvimento.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;