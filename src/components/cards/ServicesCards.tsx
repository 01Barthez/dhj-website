import { cn } from '@/lib/utils';
import { ServiceCardProps } from '@/utils/interface/interface';
import { motion } from 'framer-motion';

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="magic-card p-6 flex flex-col h-full"
    >
      <div className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center mb-4",
        `bg-${color}/10`
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};