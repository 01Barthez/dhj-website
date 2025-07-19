import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, stagger } from '@/utils/motion/motion';
import { iconComponents } from '@/utils/mocks/mock';
import { useStore } from '@/store/useStore';

export function ServicesSection() {
  const { services } = useStore();

  return (
    <section className="bg-background py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight text-center">
          <span className="text-gradient">Nos</span> Services
        </h2>
        <p className="text-xl text-foreground/80 text-center">
          Découvrez les formations et services que nous proposons
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={stagger}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.slice(0, 4).map((service) => {
            const IconComponent = iconComponents[service.icon];

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="magic-card p-6 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-full border border-german-gold/40 bg-german-gold/10 dark:bg-german-gold/5 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="h-6 w-6 text-german-red dark:text-german-red/70" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 cursor-default">
                  {service.title}
                </h3>
                <p className="text-foreground/80">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className='border border-red-500 rounded-xl hover:bg-red-50'
          >
            <Link to="/services" className="text-red-500">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 