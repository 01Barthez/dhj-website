import { motion } from 'framer-motion';

export function MissionSection() {
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
          <span className="text-gradient">Notre</span> Mission
        </h2>

        <p className="text-lg text-foreground/80">
          Chez <span className="font-semibold">Deutsches Haus Jaounde</span>, notre mission est de promouvoir la langue et la culture allemandes au Cameroun à travers un enseignement de qualité et des activités culturelles enrichissantes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="magic-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span className="h-8 w-8 rounded-full bg-german-black/10 flex items-center justify-center mr-3 text-german-black">1</span>
            Excellence pédagogique
          </h3>
          <p className="text-foreground/80">
            Nous nous engageons à maintenir les plus hauts standards d'enseignement, avec des méthodes modernes et efficaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="magic-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span className="h-8 w-8 rounded-full flex items-center justify-center mr-3  bg-german-red/10 text-german-red">2</span>
            Immersion culturelle
          </h3>
          <p className="text-foreground/80">
            Nous intégrons des éléments de la culture allemande dans notre enseignement pour une expérience d'apprentissage complète.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="magic-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span className="h-8 w-8 rounded-full bg-german-gold/10  flex items-center justify-center mr-3 text-german-gold">3</span>
            Accès pour tous
          </h3>
          <p className="text-foreground/80">
            Nous nous efforçons de rendre l'apprentissage de l'allemand accessible à tous, quels que soient l'âge ou le niveau.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 