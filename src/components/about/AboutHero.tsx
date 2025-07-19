import { motion } from 'framer-motion';

export function AboutHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
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
  );
} 