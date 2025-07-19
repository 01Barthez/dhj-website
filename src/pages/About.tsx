
import { useEffect } from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutStorySection } from '@/components/about/AboutStorySection';
import { MissionSection } from '@/components/about/MissionSection';
import { DirectorMessageSection } from '@/components/about/DirectorMessageSection';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutStorySection />
          <MissionSection />
          <DirectorMessageSection />
        </div>
      </section>
    </div>
  );
}
