import { motion } from 'framer-motion';

export function ContactHero() {
  const animationVariants = {
    hero: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full bgImage-contact py-20 md:py-36 lg:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div {...animationVariants.hero}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contactez Nous</h1>
            <p className="text-xl">
              Nous sommes disponibles pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 