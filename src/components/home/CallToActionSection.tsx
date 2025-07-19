import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CallToActionSection() {
  return (
    <section className=" bgImage-homebaner py-20 sm:py-28 md:py-36 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-german-gold/50"></div>

      <div className="bg-german-gold/80 text-german-black rounded-lg w-fit p-6 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Commencez votre parcours linguistique avec nous
          </h2>
          <p className="text-xl">
            Apprenez l'allemand dans un environnement accueillant avec des méthodes d'enseignement modernes et efficaces.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">
                Nous contacter dès maintenant
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 