import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { ContactCard } from './ContactCard';
import { useStore } from '@/store/useStore';

export function ContactInfoSection() {
  const { contactInfo } = useStore();

  const contactCards = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Téléphone',
      content: contactInfo.phone,
      link: contactInfo.whatsapp,
      bgColor: 'bg-german-red/10',
      iconColor: 'text-german-red'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: contactInfo.email,
      link: contactInfo.email_link,
      bgColor: 'bg-german-gold/10',
      iconColor: 'text-german-gold'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Adresse',
      content: contactInfo.location,
      link: contactInfo.mapUrl,
      bgColor: 'bg-german-red/10',
      iconColor: 'text-german-red'
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      title: 'Facebook',
      content: 'DeutschesHausJaunde',
      link: contactInfo.facebook,
      bgColor: 'bg-german-gold/10',
      iconColor: 'text-german-gold'
    }
  ];

  const animationVariants = {
    contactInfo: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      {...animationVariants.contactInfo}
      className="space-y-8 shadow-sm p-6 rounded overflow-hidden shadow-german-black/20 dark:shadow-white/20"
    >
      <div className="flex flex-col items-center gap-2 md:gap-3 mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-center">
          <span className="text-gradient">Informations</span> de contact
        </h2>
        <p className="text-muted-foreground max-w-3xl text-xl text-center">
          Retrouvez-nous en ligne, par téléphone ou en personne
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactCards.map((card, index) => (
          <ContactCard
            key={`contact-${index}`}
            icon={card.icon}
            title={card.title}
            content={card.content}
            link={card.link}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
          />
        ))}
      </div>
    </motion.div>
  );
} 