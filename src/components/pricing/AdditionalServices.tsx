import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

interface AdditionalService {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdditionalServicesProps {
  additionalServices: AdditionalService[];
}

export function AdditionalServices({ additionalServices }: AdditionalServicesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
        Inclus dans toutes nos formations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {additionalServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-german-gold/10 text-german-red mb-4">
              <service.icon className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
            <p className="text-foreground/70">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 