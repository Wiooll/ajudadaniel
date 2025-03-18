
import { useState, useRef, useEffect } from 'react';
import { Brain, Stethoscope, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Information = () => {
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
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const faqItems = [
    {
      question: 'O que é a Síndrome de West?',
      answer: 'A Síndrome de West é uma forma rara de epilepsia infantil caracterizada por espasmos, alterações características no eletroencefalograma (EEG) e atraso no desenvolvimento neuropsicomotor. Geralmente se manifesta no primeiro ano de vida.'
    },
    {
      question: 'O que é um botton de gastrostomia?',
      answer: 'Um botton de gastrostomia é um dispositivo médico que fornece uma via de acesso direta ao estômago através da parede abdominal. É utilizado para administrar alimentação e medicamentos em pacientes que têm dificuldade para engolir ou se alimentar normalmente.'
    },
    {
      question: 'Por que o Daniel precisa deste dispositivo?',
      answer: 'Daniel tem dificuldades para se alimentar devido às complicações da Síndrome de West. O botton de gastrostomia garantirá que ele receba a nutrição adequada e seus medicamentos de forma segura, melhorando sua qualidade de vida.'
    },
    {
      question: 'Como serão utilizados os recursos arrecadados?',
      answer: 'O valor arrecadado será utilizado integralmente para a compra do botton de gastrostomia, incluindo o dispositivo em si e os materiais necessários para sua manutenção. Se houver excedente, será direcionado para outros tratamentos essenciais.'
    },
    {
      question: 'Posso ajudar de outras formas além da doação financeira?',
      answer: 'Sim! Compartilhar a campanha nas redes sociais, participar das ações de divulgação e enviar mensagens de apoio são formas valiosas de contribuir. Cada gesto faz diferença nesta jornada.'
    }
  ];
  
  return (
    <section ref={sectionRef} id="sindrome-west" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-blue text-campaign-blue inline-block mb-4">
            Informações
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Síndrome de West e Gastrostomia
          </h2>
          <p className="text-muted-foreground">
            Entenda mais sobre a condição do Daniel e o procedimento que fará diferença em sua vida.
          </p>
        </div>
        
        <Tabs defaultValue="syndrome" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="syndrome" className="text-sm md:text-base">Síndrome de West</TabsTrigger>
            <TabsTrigger value="procedure" className="text-sm md:text-base">Procedimento de Gastrostomia</TabsTrigger>
          </TabsList>
          
          <TabsContent value="syndrome" className="reveal-animation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-medium mb-4 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-campaign-blue" />
                  Síndrome de West
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  A Síndrome de West, também conhecida como Espasmos Infantis, é uma forma grave de epilepsia 
                  que geralmente se manifesta no primeiro ano de vida. Caracteriza-se por uma tríade de sintomas:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong>Espasmos epilépticos:</strong> Contrações súbitas e breves dos músculos, frequentemente 
                      em séries, afetando principalmente pescoço, tronco e braços.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong>Atraso no desenvolvimento:</strong> Regressão ou estagnação das habilidades motoras, 
                      cognitivas e sociais.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong>Padrão EEG anormal:</strong> Conhecido como hipsarritmia, apresenta ondas cerebrais 
                      caóticas e desorganizadas.
                    </span>
                  </li>
                </ul>
                
                <p className="text-muted-foreground">
                  O tratamento geralmente envolve medicamentos antiepilépticos, terapia hormonal, dieta cetogênica 
                  e, em alguns casos, cirurgia. A intervenção precoce é crucial para melhorar o prognóstico e 
                  minimizar os impactos no desenvolvimento.
                </p>
              </div>
              
              <div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://epilepsiarussi.com/blog/wp-content/uploads/2015/05/west-1024x814.jpg"
                    alt="Representação da Síndrome de West" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-campaign-light-blue/30 rounded-lg border border-campaign-light-blue/20">
                  <h4 className="font-medium mb-2">Dados importantes</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">
                      • Afeta aproximadamente 1 em cada 2.000-4.000 nascidos vivos
                    </li>
                    <li className="text-muted-foreground">
                      • É mais comum em meninos do que em meninas
                    </li>
                    <li className="text-muted-foreground">
                      • Em cerca de 70% dos casos, há uma causa identificável, como lesão cerebral, 
                      anomalias cerebrais ou distúrbios genéticos
                    </li>
                    <li className="text-muted-foreground">
                      • O diagnóstico precoce e o tratamento adequado são essenciais para um melhor prognóstico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="procedure" className="reveal-animation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-medium mb-4 flex items-center">
                  <Stethoscope className="h-6 w-6 mr-2 text-campaign-blue" />
                  Procedimento de Gastrostomia
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  A gastrostomia é um procedimento cirúrgico que cria uma abertura direta no estômago
                  através da parede abdominal. Um dispositivo, como o botton de gastrostomia, é então
                  inserido para permitir a alimentação diretamente no estômago.
                </p>
                
                <h4 className="font-medium mt-6 mb-2">Benefícios do botton de gastrostomia:</h4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Fornece uma via segura e eficiente para alimentação e administração de medicamentos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Melhora o estado nutricional em pacientes com dificuldades para engolir
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Reduz o risco de aspiração (quando alimentos ou líquidos entram nas vias aéreas)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Proporciona maior confort e praticidade em comparação a sondas nasogástricas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-campaign-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      É discreto e permite mobilidade e atividade normal
                    </span>
                  </li>
                </ul>
                
                <p className="text-muted-foreground">
                  Para o Daniel, o botton de gastrostomia representará uma melhoria significativa na sua
                  qualidade de vida, garantindo que ele receba a nutrição adequada e seus medicamentos com
                  segurança e confort.
                </p>
              </div>
              
              <div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                    alt="Representação de procedimento médico"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-campaign-light-teal/30 rounded-lg border border-campaign-light-teal/20">
                  <h4 className="font-medium mb-2">Sobre o dispositivo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    O botton de gastrostomia é um dispositivo pequeno e discreto que substitui a sonda
                    tradicional. Ele fica rente à pele e pode ser facilmente conectado para alimentação e
                    medicação.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Este tipo de dispositivo precisa ser substituído periodicamente (geralmente a cada 3-6
                    meses), o que representa um custo contínuo para as famílias. O valor arrecadado nesta
                    campanha permitirá a aquisição do dispositivo inicial e seus primeiros suprimentos.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 reveal-animation">
          <h3 className="text-2xl font-display font-medium mb-8 text-center">Perguntas Frequentes</h3>
          
          <div className="max-w-3xl mx-auto divide-y divide-campaign-light-blue/50">
            {faqItems.map((item, index) => (
              <div key={index} className="py-4">
                <button 
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-medium flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-campaign-blue flex-shrink-0" />
                    {item.question}
                  </h4>
                  <ChevronDown className={`h-5 w-5 text-campaign-blue transition-transform ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                <div 
                  className={`mt-2 pl-7 pr-4 text-muted-foreground overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
