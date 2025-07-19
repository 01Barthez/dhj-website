
import { useEffect } from 'react';
import { ServicesHero } from '@/components/services/ServicesHero';
import { MainServicesSection } from '@/components/services/MainServicesSection';
import { AdditionalServicesSection } from '@/components/services/AdditionalServicesSection';
import { ServicesCallToAction } from '@/components/services/ServicesCallToAction';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <MainServicesSection />
      <AdditionalServicesSection />
      <ServicesCallToAction />
    </div>
  );
}
