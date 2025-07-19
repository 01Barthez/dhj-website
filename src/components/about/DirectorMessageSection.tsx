import { motion } from 'framer-motion';

export function DirectorMessageSection() {
  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight text-center">
          <span className="text-gradient">Mot du</span> Directeur
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="max-w-screen-md mx-auto w-full flex overflow-hidden items-center flex-col gap-4">
              <img
                src="/images/Denis-Action.jpeg"
                alt="Directeur enseignant en Allemagne"
                className="w-full select-none pointer-events-none max-h-[35rem] object-cover rounded-lg shadow-lg"
                loading='lazy'
              />
              <span className="text-center text-foreground/90 font-extralight italic">
                M. Denis en action - <span className="font-bold">Enseignement en Allemagne</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 order-1 lg:order-2"
        >
          <div className="bg-gradient-to-r from-german-red/5 to-german-gold/5 p-8 rounded-lg border-l-4 border-german-red">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Fort d'une expérience de 18 ans en tant qu'enseignant agrégé en Allemagne, j'ai l'honneur d'exercer aujourd'hui en tant que professeur au lycée Lisa-Tetzner-Oberschule, situé à Barsinghausen, à proximité de Hanovre. Parallèlement, je suis mandaté par le ministère de l'Éducation de Basse-Saxe pour coordonner des projets de coopération et d'échanges éducatifs, tant au niveau national qu'international.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Cette riche expérience dans l'enseignement et la gestion de projets éducatifs internationaux m'a permis de développer une expertise approfondie dans l'accompagnement des apprenants et des professionnels souhaitant s'intégrer en Allemagne. Notre centre de formation en langue allemande s'engage à vous offrir un accompagnement personnalisé et de qualité, que ce soit pour votre apprentissage de la langue, vos démarches d'obtention de visa ou votre intégration professionnelle et culturelle en Allemagne.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Nous sommes là pour vous guider à chaque étape de votre projet, avec rigueur, professionnalisme et une passion indéfectible pour la transmission du savoir et l'ouverture interculturelle.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Je serai ravi de vous accueillir au sein de notre centre et de vous accompagner dans la réalisation de vos ambitions en Allemagne.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-german-red">Directeur</p>
            <p className="text-foreground/60">Deutsches Haus Jaounde</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 