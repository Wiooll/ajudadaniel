import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
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
    <section ref={sectionRef} id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <p className="text-sm font-medium px-3 py-1 rounded-full bg-campaign-light-teal text-campaign-teal inline-block mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-muted-foreground">
            Estamos à disposição para esclarecer dúvidas, receber sugestões ou simplesmente conversar sobre a campanha.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="reveal-animation">
            <h3 className="text-2xl font-display font-medium mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-campaign-blue hover:bg-campaign-dark-blue">
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="reveal-animation">
            <h3 className="text-2xl font-display font-medium mb-6">Informações de contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-campaign-light-blue rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-campaign-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">ajudedaniel@exemplo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-campaign-light-blue rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-campaign-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-campaign-light-blue hover:bg-campaign-blue/20 transition-colors rounded-full p-3">
                    <Instagram className="h-5 w-5 text-campaign-blue" />
                  </a>
                  <a href="#" className="bg-campaign-light-blue hover:bg-campaign-blue/20 transition-colors rounded-full p-3">
                    <Facebook className="h-5 w-5 text-campaign-blue" />
                  </a>
                  <a href="#" className="bg-campaign-light-blue hover:bg-campaign-blue/20 transition-colors rounded-full p-3">
                    <Twitter className="h-5 w-5 text-campaign-blue" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-campaign-light-teal/20 rounded-lg border border-campaign-light-teal/10">
              <h4 className="font-medium mb-2">Nota importante</h4>
              <p className="text-sm text-muted-foreground">
                Todas as mensagens são respondidas em até 24 horas. Para assuntos urgentes, 
                recomendamos o contato via telefone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
