import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingCards } from '@/components/pricing/PricingCards';
import { AdditionalServices } from '@/components/pricing/AdditionalServices';
import { FAQSection } from '@/components/pricing/FAQSection';
import { PricingCTASection } from '@/components/pricing/PricingCTASection';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const pricingPlans = [
  {
    id: 'a1',
    level: 'A1',
    title: 'Débutant',
    description: 'Idéal pour commencer votre apprentissage de l\'allemand depuis zéro',
    monthlyPrice: 60000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 120000,
    popular: false,
    features: [
      'Apprentissage de l\'alphabet allemand',
      'Vocabulaire de base (1000 mots)',
      'Grammaire élémentaire',
      'Conversations simples',
      'Présentation personnelle',
      'Situations quotidiennes',
      'Support pédagogique inclus',
      'Certificat de niveau A1'
    ],
    goals: [
      'Se présenter et présenter autrui',
      'Poser des questions simples',
      'Comprendre des expressions familières',
      'Communiquer de façon simple'
    ]
  },
  {
    id: 'a2',
    level: 'A2',
    title: 'Élémentaire',
    description: 'Consolidez vos bases et développez votre autonomie linguistique',
    monthlyPrice: 60000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 120000,
    popular: true,
    features: [
      'Vocabulaire étendu (1000 mots)',
      'Grammaire intermédiaire',
      'Expression orale renforcée',
      'Compréhension de textes simples',
      'Rédaction de messages courts',
      'Situations professionnelles de base',
      'Exercices interactifs',
      'Certificat de niveau A2'
    ],
    goals: [
      'Décrire son environnement',
      'Comprendre des phrases isolées',
      'Communiquer lors de tâches simples',
      'Raconter des événements passés'
    ]
  },
  {
    id: 'b1',
    level: 'B1',
    title: 'Intermédiaire',
    description: 'Atteignez l\'indépendance linguistique pour études et travail',
    monthlyPrice: 65000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 130000,
    popular: false,
    features: [
      'Vocabulaire professionnel (2000 mots)',
      'Grammaire avancée',
      'Conversations complexes',
      'Compréhension de médias',
      'Rédaction structurée',
      'Préparation aux examens',
      'Simulations d\'entretiens',
      'Certificat de niveau B1'
    ],
    goals: [
      'Comprendre les points essentiels',
      'Se débrouiller en voyage',
      'Raconter des expériences',
      'Exprimer opinions et projets'
    ]
  },
  {
    id: 'b2',
    level: 'B2',
    title: 'Avancé',
    description: 'Maîtrisez l\'allemand pour études supérieures et carrière internationale',
    monthlyPrice: 65000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 130000,
    popular: true,
    features: [
      'Vocabulaire spécialisé (3000+ mots)',
      'Maîtrise grammaticale complète',
      'Débats et présentations',
      'Analyse de textes complexes',
      'Rédaction académique',
      'Préparation universitaire',
      'Certification internationale',
      'Accompagnement post-formation'
    ],
    goals: [
      'Comprendre des textes complexes',
      'Communiquer spontanément',
      'S\'exprimer sur sujets abstraits',
      'Interaction avec locuteurs natifs'
    ]
  }
];

const additionalServices = [
  {
    icon: BookOpen,
    title: 'Matériel pédagogique inclus',
    description: 'Livres, exercices et ressources numériques'
  },
  {
    icon: Users,
    title: 'Classes en petits groupes',
    description: 'Maximum 12 étudiants par classe'
  },
  {
    icon: Award,
    title: 'Certification officielle',
    description: 'Préparation aux examens Goethe et TELC'
  },
  {
    icon: Clock,
    title: 'Horaires flexibles',
    description: 'Cours du matin, après-midi et weekend'
  }
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PricingHero />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Choisissez votre <span className="text-gradient">niveau</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Que vous soyez débutant complet ou que vous souhaitiez perfectionner votre allemand, 
              nous avons la formation adaptée à vos objectifs et votre budget.
            </p>
          </motion.div>

          <PricingCards pricingPlans={pricingPlans} />
          <AdditionalServices additionalServices={additionalServices} />
          <FAQSection />
          <PricingCTASection />
        </div>
      </section>
    </div>
  );
}