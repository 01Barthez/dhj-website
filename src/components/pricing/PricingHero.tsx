import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function PricingHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
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
  );
} 