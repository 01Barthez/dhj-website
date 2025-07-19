import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BlogHero() {
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
            Notre Blog
          </h1>
          <p className="text-xl mb-8">
            Découvrez nos articles, conseils et actualités sur l'apprentissage de l'allemand
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Rejoignez notre communauté
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 