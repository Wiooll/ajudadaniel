
import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import HowToHelp from '@/components/HowToHelp';
import Information from '@/components/Information';
import Updates from '@/components/Updates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
          <Hero />
          <About />
          <Gallery />
          <HowToHelp />
          <Information />
          <Updates />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
