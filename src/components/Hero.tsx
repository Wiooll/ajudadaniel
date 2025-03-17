import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef, useState } from 'react';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Campaign progress stats (65% for demo)
  const currentAmount = 50;
  const targetAmount = 2000;
  const progressPercentage = currentAmount / targetAmount * 100;
  useEffect(() => {
    setIsVisible(true);
    if (progressRef.current) {
      progressRef.current.style.setProperty('--progress-percentage', `${progressPercentage}%`);
    }
  }, [progressPercentage]);
  return <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-campaign-light-blue/40 to-white/0"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-teal text-campaign-teal mb-4">
                Campanha de arrecadação
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
                Ajude o Daniel a 
                <span className="block text-campaign-blue"> conquistar uma vida melhor</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">Sua contribuição fará toda a diferença no tratamento e qualidade de vida do Daniel.</p>
            </div>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-campaign-blue hover:bg-campaign-dark-blue transition-all">
                Doar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-campaign-blue text-campaign-blue hover:bg-campaign-light-blue/50">
                Conheça a história
              </Button>
            </div> */}
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-campaign-light-blue/50 max-w-md">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Meta: R$ 2.000</span>
                <span className="font-semibold text-campaign-dark-blue">R$ {currentAmount}</span>
              </div>
              
              <div className="progress-bar">
                <div ref={progressRef} className="progress-bar-fill"></div>
              </div>
              
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-muted-foreground">{progressPercentage.toFixed(0)}% alcançado</span>
                <span className="text-campaign-teal">Faltam R$ {targetAmount - currentAmount}</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] shadow-xl">
              <img src="https://raw.githubusercontent.com/Wiooll/ajudadaniel/refs/heads/main/src/img/daniel-sorrindo.jpg" alt="Daniel sorrindo" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-display text-xl">Daniel, 3 anos</p>
                <p className="text-white/80">"Cada sorriso é uma vitória"</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs shadow-lg border border-white">
              <p className="text-sm text-campaign-dark-gray">
                "Sua ajuda nos dá esperança para continuar lutando pela qualidade de vida do Daniel..."
              </p>
              {/* <p className="text-sm font-medium mt-2"></p> */}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;