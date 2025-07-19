import { useEffect } from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfoSection } from '@/components/contact/ContactInfoSection';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapSection } from '@/components/contact/MapSection';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <ContactHero />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <ContactInfoSection />
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}