import { motion } from 'framer-motion';

export function RegistrationHero() {
  return (
    <section className="w-full bgImage py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>
      
      <div className="relative text-white w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Formulaire d'inscription
          </h1>
          <p className="text-lg">
            Dernière étape pour rejoindre DHJ et réaliser vos rêves en allemand
          </p>
        </motion.div>
      </div>
    </section>
  );
} 