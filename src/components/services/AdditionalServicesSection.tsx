import { Wifi, Video, GraduationCap } from 'lucide-react';
import { ServiceCard } from '@/components/cards/ServicesCards';
import { cn } from '@/lib/utils';

export function AdditionalServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 md:gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              <span className="text-gradient">Services</span> Complémentaires
            </h2>
            <p className={cn("text-muted-foreground max-w-3xl text-xl text-center")}>
              Ressources additionnelles pour enrichir votre apprentissage
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Connexion wifi"
            description="Connexion wifi haut débit accéssible à tous pour booster l'apprentissage au delà de l'enseignenment."
            icon={<Wifi className="h-6 w-6 text-german-black" />}
            color="german-black"
            delay={0.1}
          />

          <ServiceCard
            title="Ressources en ligne"
            description="Accès à une bibliothèque de ressources numériques pour compléter votre apprentissage en dehors des cours."
            icon={<Video className="h-6 w-6 text-german-red" />}
            color="german-red"
            delay={0.2}
          />

          <ServiceCard
            title="Orientation académique"
            description="Conseils et accompagnement pour les étudiants souhaitant poursuivre leurs études en Allemagne."
            icon={<GraduationCap className="h-6 w-6 text-german-gold" />}
            color="german-gold"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
} 