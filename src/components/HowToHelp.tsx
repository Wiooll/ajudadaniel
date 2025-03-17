import { Copy, Share2, CreditCard, BadgeCheck, RefreshCw, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useRef, useEffect, useState } from 'react';
import { toast } from 'sonner';

const HowToHelp = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [pixCopied, setPixCopied] = useState(false);
  
  const copyPix = () => {
    navigator.clipboard.writeText('daniel.morais@email.com');
    setPixCopied(true);
    toast.success('Chave PIX copiada!');
    setTimeout(() => setPixCopied(false), 3000);
  };
  
  const shareOnSocial = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ajude o Daniel',
        text: 'Contribua para a campanha de arrecadação para o Daniel, uma criança com Síndrome de West que precisa de um botão de gastrostomia.',
        url: window.location.href,
      });
    } else {
      toast.info('Compartilhamento não suportado pelo seu navegador');
    }
  };
  
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
    <section ref={sectionRef} id="como-ajudar" className="py-20 bg-campaign-light-blue/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-teal text-campaign-teal inline-block mb-4">
            Como Ajudar
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Sua contribuição faz a diferença
          </h2>
          <p className="text-muted-foreground">
            Existem várias formas de apoiar o Daniel nessa jornada. Cada contribuição, independente do valor, 
            nos aproxima um pouco mais da meta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 reveal-animation">
            <h3 className="text-2xl font-display font-medium mb-6">Faça uma doação</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 border border-campaign-light-blue">
                <h4 className="font-medium mb-2 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-campaign-blue" />
                  PIX
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Faça uma transferência via PIX para a chave abaixo:
                </p>
                <div className="flex items-center justify-between bg-campaign-gray p-3 rounded">
                  <code className="text-campaign-dark-blue font-mono">daniel.morais@email.com</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={copyPix}
                    className="text-campaign-blue hover:text-campaign-dark-blue hover:bg-campaign-light-blue"
                  >
                    {pixCopied ? (
                      <BadgeCheck className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-campaign-light-blue">
                <h4 className="font-medium mb-2 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-campaign-blue" />
                  Transferência Bancária
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Banco: Exemplo</p>
                  <p className="text-muted-foreground">Agência: 0001</p>
                  <p className="text-muted-foreground">Conta: 12345-6</p>
                  <p className="text-muted-foreground">Nome: Maria Morais (mãe do Daniel)</p>
                  <p className="text-muted-foreground">CPF: 123.456.789-00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 reveal-animation">
            <h3 className="text-2xl font-display font-medium mb-6">Outras formas de apoiar</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="bg-campaign-light-teal rounded-full p-2 mr-4 h-fit">
                  <Share2 className="h-5 w-5 text-campaign-teal" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Compartilhe esta campanha</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Ajude a divulgar a campanha para que mais pessoas possam conhecer a história do Daniel.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-campaign-blue text-campaign-blue hover:bg-campaign-light-blue/50"
                    onClick={shareOnSocial}
                  >
                    Compartilhar <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex mt-6">
                <div className="bg-campaign-light-rose rounded-full p-2 mr-4 h-fit">
                  <Heart className="h-5 w-5 text-campaign-rose" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Engaje-se</h4>
                  <p className="text-muted-foreground text-sm">
                    Siga nossas redes sociais, compartilhe nossas publicações e ajude a criar uma rede de apoio.
                  </p>
                </div>
              </div>
              
              <div className="flex mt-6">
                <div className="bg-campaign-light-blue rounded-full p-2 mr-4 h-fit">
                  <MessageCircle className="h-5 w-5 text-campaign-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Envie mensagens de apoio</h4>
                  <p className="text-muted-foreground text-sm">
                    Suas palavras de encorajamento fazem toda a diferença para o Daniel e sua família.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-campaign-light-blue/20 reveal-animation">
          <h3 className="text-2xl font-display font-medium mb-6 text-center">Prestação de contas</h3>
          
          <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
            Acreditamos na transparência total. Todo o valor arrecadado será utilizado exclusivamente para a compra do 
            botão de gastrostomia e, se houver excedente, para outros tratamentos necessários.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-campaign-light-blue/30 rounded-lg">
              <h4 className="font-medium mb-2">Acompanhamento</h4>
              <p className="text-sm text-muted-foreground">
                Atualizações semanais sobre o andamento da campanha e o valor arrecadado.
              </p>
            </div>
            
            <div className="p-4 border border-campaign-light-blue/30 rounded-lg">
              <h4 className="font-medium mb-2">Comprovantes</h4>
              <p className="text-sm text-muted-foreground">
                Todos os comprovantes de compra e notas fiscais serão disponibilizados para consulta.
              </p>
            </div>
            
            <div className="p-4 border border-campaign-light-blue/30 rounded-lg">
              <h4 className="font-medium mb-2">Relatórios</h4>
              <p className="text-sm text-muted-foreground">
                Relatórios detalhados sobre a utilização dos recursos e o impacto na vida do Daniel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
