
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/section-title';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full bgImage-about py-20 md:py-36 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>

        <div className="relative text-white w-full max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">À propos de nous</h1>
            <p className="text-xl">
              Découvrez l'histoire et la mission du Deutsches Haus Jaounde
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
