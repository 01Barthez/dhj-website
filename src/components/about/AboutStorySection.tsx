import { motion } from 'framer-motion';

export function AboutStorySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <div className="max-w-screen-md mx-auto w-full flex  overflow-hidden items-center flex-col gap-4">
            <img
              src="/images/CEO-DHJ.png"
              alt="Profile CEO-DHJ"
              className="w-full select-none pointer-events-none max-h-[35rem] object-contain"
              loading='lazy'
            />
            <span className="text-center text-foreground/90 font-extralight italic">
              Delice Magloire - <span className="font-bold"> CEO DHJ</span>
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight text-center">
          <span className="text-gradient">Notre</span> Histoire
        </h2>

        <p className="text-lg text-foreground/80">
          Deutsches Haus Jaounde (DHJ) a été fondé avec une vision claire : devenir le centre de référence pour l'apprentissage de la langue allemande au Cameroun. Notre centre est né de la passion pour la langue et la culture allemandes et de la volonté de créer un pont linguistique entre le Cameroun et l'Allemagne.
        </p>
        <p className="text-lg text-foreground/80">
          Depuis notre création, nous nous sommes engagés à offrir un enseignement de qualité, adapté aux besoins spécifiques de nos apprenants, qu'ils soient débutants ou avancés, étudiants ou professionnels.
        </p>
      </motion.div>
    </div>
  );
} 