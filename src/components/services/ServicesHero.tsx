import { motion } from 'framer-motion';

export function ServicesHero() {
  return (
    <section className="w-full bgImage-services py-20 md:py-36 lg:py-40 relative">
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
  );
} 