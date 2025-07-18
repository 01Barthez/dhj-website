import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Clock, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    id: 'a1',
    level: 'A1',
    title: 'Débutant',
    description: 'Idéal pour commencer votre apprentissage de l\'allemand depuis zéro',
    monthlyPrice: 110000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 230000,
    popular: false,
    features: [
      'Apprentissage de l\'alphabet allemand',
      'Vocabulaire de base (500 mots)',
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
    monthlyPrice: 110000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 230000,
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
    monthlyPrice: 120000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 250000,
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
    monthlyPrice: 120000,
    duration: 2,
    registrationFee: 10000,
    totalPrice: 250000,
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bgImage py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>
        
        <div className="relative text-white w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl mb-8">
              Des formations de qualité à des prix accessibles pour tous les niveaux
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Frais d'inscription : 10 000 FCFA (pour toutes les formations)
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
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

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-german-red text-white border-0 px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}
                <Card className={`h-full relative overflow-hidden ${plan.popular ? 'border-german-red shadow-lg scale-105' : ''}`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${
                      plan.popular ? 'bg-german-red text-white' : 'bg-german-gold/10 text-german-red'
                    }`}>
                      <span className="text-2xl font-bold">{plan.level}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <p className="text-foreground/70 text-sm">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pb-4">
                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-german-red mb-2">
                        {formatPrice(plan.monthlyPrice)} FCFA
                        <span className="text-base font-normal text-foreground/70">/mois</span>
                      </div>
                      <div className="text-sm text-foreground/70">
                        Durée: {plan.duration} mois
                      </div>
                      <div className="text-lg font-semibold mt-2">
                        Total: {formatPrice(plan.totalPrice)} FCFA
                      </div>
                      <div className="text-xs text-foreground/60 mt-1">
                        + {formatPrice(plan.registrationFee)} FCFA d'inscription
                      </div>
                    </div>

                    {/* Goals */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Objectifs du niveau :</h4>
                      <ul className="space-y-2">
                        {plan.goals.map((goal, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-german-red mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Inclus dans la formation :</h4>
                      <ul className="space-y-2">
                        {plan.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-german-gold mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.features.length > 4 && (
                        <p className="text-xs text-foreground/60 mt-2">
                          + {plan.features.length - 4} autres avantages
                        </p>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button 
                      asChild 
                      className={`w-full ${plan.popular ? 'bg-german-red hover:bg-german-red/90' : ''}`}
                    >
                      <Link to={`/inscription?level=${plan.id}`}>
                        S'inscrire maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
              Inclus dans toutes nos formations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-german-gold/10 text-german-red mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="border-german-red/20 bg-gradient-to-r from-german-red/5 to-german-gold/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                  Questions fréquentes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">Modalités de paiement</h4>
                    <p className="text-foreground/80 text-sm mb-4">
                      Paiement mensuel possible. Frais d'inscription à régler avant le début des cours. 
                      Possibilité de paiement en plusieurs fois.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Garantie qualité</h4>
                    <p className="text-foreground/80 text-sm mb-4">
                      Satisfaction garantie ou cours de rattrapage gratuits. 
                      95% de nos étudiants recommandent nos formations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Horaires flexibles</h4>
                    <p className="text-foreground/80 text-sm mb-4">
                      Cours disponibles en matinée (8h-12h), après-midi (14h-18h) 
                      et weekend (9h-17h).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support continu</h4>
                    <p className="text-foreground/80 text-sm mb-4">
                      Accompagnement personnalisé, groupe WhatsApp d'entraide, 
                      et support après formation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-german-red/10 to-german-gold/10 border-german-red/20">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Prêt à commencer votre aventure allemande ?
                </h3>
                <p className="text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
                  Rejoignez plus de 500 étudiants qui ont choisi DHJ pour apprendre l'allemand. 
                  Nos formations vous préparent efficacement pour vos projets d'études et de carrière.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/inscription">
                      Commencer maintenant
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/contact">
                      Demander des informations
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-foreground/60 mt-4">
                  Séance d'information gratuite • Test de niveau inclus • Garantie satisfaction
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}