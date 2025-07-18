import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '@/components/ui/section-title';
import { MapPosition } from '@/components/ui/map';
import { useStore } from '@/store/useStore';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import { config as loadEnvSafe } from "dotenv-safe";
import { cn } from "@/lib/utils";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_CONTACT } from '@/constants/constant';

// Types pour une meilleure performance
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  bgColor: string;
  iconColor: string;
}

// Composant ContactCard mémorisé pour éviter les re-renders inutiles
const ContactCard = memo(({ icon, title, content, link, bgColor, iconColor }: ContactCardProps) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={title.toLowerCase()}
  >
    <Card className="overflow-hidden border-none bg-card shadow-lg dark:shadow-sm dark:shadow-white">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`h-12 w-12 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-foreground/80">{content}</p>
      </CardContent>
    </Card>
  </Link>
));

ContactCard.displayName = 'ContactCard';

// Composant principal optimisé
export default function Contact() {
  const { contactInfo } = useStore();
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top une seule fois au montage
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handlers optimisés avec useCallback
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleCheckboxChange = useCallback((checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  }, []);

  // Fonction utilitaire pour réinitialiser le formulaire
  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    });
  }, []);

  // Fonction pour générer le message WhatsApp
  const generateWhatsAppMessage = useCallback((data: FormData) => {
    const phoneNumber = '237696220854';
    const message = 
      `*Nouvelle demande de contact - Centre Allemand DHJ*\n` +
      `Nom : ${data.name}\n` +
      `Numéro de Téléphone : ${data.phone}\n` +
      `Email : ${data.email}\n` +
      `Sujet : ${data.subject}\n` +
      `Message : ${data.message}`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, []);

  // Handler de soumission optimisé
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error(t('contact.consent_required', 'Veuillez accepter les conditions d\'utilisation.'));
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      ...formData,
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID_CONTACT,
        emailData,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email envoyé avec succès:', result);
          
          // Simulation d'envoi pour l'UX
          setTimeout(() => {
            toast.success(`Merci ${formData.name}, votre message a bien été envoyé ! Nous vous recontacterons très bientôt.`);
            resetForm();
            setIsSubmitting(false);
          }, 1500);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi:', error);
          toast.error('Échec de la soumission du formulaire !');
          setIsSubmitting(false);
        }
      );

      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(generateWhatsAppMessage(formData), '_blank');      
  }, [formData, t, generateWhatsAppMessage, resetForm]);

  // Mémoisation des données de contact pour éviter les re-renders
  const contactCards = useMemo(() => [
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
  ], [contactInfo]);

  // Mémoisation des variants d'animation
  const animationVariants = useMemo(() => ({
    hero: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    contactInfo: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    form: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay: 0.2 }
    }
  }), []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            {/* Contact Info */}
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

            {/* Form */}
            <motion.div
              {...animationVariants.form}
              className="shadow-sm p-0 rounded overflow-hidden shadow-german-red/20 dark:shadow-german-red/80"
            >
              <Card className="overflow-hidden border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-2 md:gap-3 mb-8">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-center">
                      <span className="text-gradient">Envoyez-nous</span> un message
                    </h2>
                    <p className="text-muted-foreground max-w-3xl text-xl text-center">
                      Nous vous répondrons dans les plus brefs délais
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Nom complet</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="border-german-red/20 dark:border-german-gold/20 focus-visible:ring-german-gold/30"
                          required
                          minLength={3}
                          maxLength={150}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="border-german-red/20 dark:border-german-gold/20 focus-visible:ring-german-gold/30"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Votre numéro de téléphone"
                          className="border-german-red/20 dark:border-german-gold/20 focus-visible:ring-german-gold/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">Sujet</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Sujet de votre message"
                          className="border-german-red/20 dark:border-german-gold/20 focus-visible:ring-german-gold/30"
                          required
                          minLength={3}
                          maxLength={100}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="min-h-[150px] border-german-red/20 dark:border-german-gold/20 focus-visible:ring-german-gold/30 resize-none"
                        required
                        minLength={15}
                        maxLength={1000}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-1 data-[state=checked]:bg-german-red data-[state=checked]:border-german-red"
                      />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground">
                        J'accepte que mes données soient utilisées pour me recontacter concernant ma demande.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-german-red hover:bg-german-red/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="shadow-sm p-6 rounded overflow-hidden shadow-german-gold">
        <Card className="border-none shadow-xl">
          <CardContent className="">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2122.384822476309!2d11.554148185019468!3d3.8791264690999006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTInNDUuMCJOIDExwrAzMycxOS4zIkU!5e0!3m2!1sfr!2scm!4v1746989409866!5m2!1sfr!2scm" 
              style={{ border: 0, width: "100%", height: "500px" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Centre Allemand DHJ"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}