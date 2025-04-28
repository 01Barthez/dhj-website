
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Calendar, Globe, Users, Video, FileText, Headphones, Wifi } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { cn } from '@/lib/utils';
import { ServiceCard } from '@/components/cards/ServicesCards';


export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full bgImage py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>

        <div className="text-white/95 w-full text-center relative px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className=" text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos Services
            </h1>
            <p className="max-w-screen-md mx-auto text-xl">
              Découvrez notre gamme complète de services pour l'apprentissage de l'allemand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 md:gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              <span className="text-gradient">Services</span> Principaux
            </h2>
            <p className={cn("text-muted-foreground max-w-3xl text-xl text-center")}>
              Offres de formation adaptées à tous les niveaux et besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              title="Cours d'allemand pour débutants"
              description="Cours spécialement conçus pour ceux qui débutent leur apprentissage de la langue allemande. Bases grammaticales, vocabulaire essentiel et prononciation."
              icon={<Video className="h-6 w-6 text-german-red" />}
              color="german-red"
              delay={0.1}
            />

            <ServiceCard
              title="Cours intermédiaires"
              description="Perfectionnement des compétences linguistiques pour les apprenants ayant déjà des bases en allemand. Conversation, compréhension et expression écrite."
              icon={<Users className="h-6 w-6 text-german-gold" />}
              color="german-gold"
              delay={0.2}
            />

            <ServiceCard
              title="Préparation aux examens"
              description="Préparation spécifique aux examens officiels d'allemand (TestDaF, Goethe-Zertifikat, etc.) pour les études ou l'immigration."
              icon={<GraduationCap className="h-6 w-6 text-german-black" />}
              color="german-black"
              delay={0.3}
            />

            <ServiceCard
              title="Cours intensifs"
              description="Programmes intensifs pour une progression rapide, idéals pour ceux qui préparent un départ imminent en Allemagne ou qui ont besoin d'apprendre rapidement."
              icon={<Calendar className="h-6 w-6 text-german-red" />}
              color="german-red"
              delay={0.4}
            />

            <ServiceCard
              title="Ateliers culturels"
              description="Découverte de la culture allemande à travers des ateliers thématiques, des projections de films, des discussions et des événements culturels."
              icon={<Globe className="h-6 w-6 text-german-gold" />}
              color="german-gold"
              delay={0.5}
            />

            <ServiceCard
              title="Cours particuliers"
              description="Enseignement personnalisé adapté à vos besoins spécifiques, à votre rythme et selon votre emploi du temps."
              icon={<FileText className="h-6 w-6 text-german-black" />}
              color="german-black"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
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

            {/* 
              <ServiceCard
                title="Club de conversation"
                description="Sessions de conversation pour pratiquer l'allemand dans un cadre détendu et améliorer votre aisance à l'oral."
                icon={<Headphones className="h-6 w-6 text-german-gold" />}
                color="german-gold"
                delay={0.2}
              />
            */}
          </div>
        </div>
      </section>
    </div>
  );
}
