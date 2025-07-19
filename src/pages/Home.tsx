
import { useEffect } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { CallToActionSection } from '@/components/home/CallToActionSection';
import { GermanyPlacesSection } from '@/components/home/GermanyPlacesSection';

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CallToActionSection />
      <GermanyPlacesSection />
    </div>
  );
}
