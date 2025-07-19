import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ServicesCallToAction() {
  return (
    <section className="bgImage-servicebaner  py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-german-red/50"></div>

      <div className="bg-german-red/80 text-german-black rounded-lg w-fit p-6 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-3xl mx-auto text-white"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Un accompagnement sur-mesure, porté par la passion et l'excellence.
          </h2>
          <p className="text-xl">
            Nous croyons qu'un bon accompagnement fait toute la différence. Chez DHJ, chaque apprenant est unique, et nous avançons à ses côtés, avec rigueur et bienveillance.
          </p>
          
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full bg-german-gold text-german-black">
              <Link to="/contact">
                Rejoignez nous aujourd'hui
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 