import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from 'react-i18next';
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_CONTACT } from '@/constants/constant';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export function ContactForm() {
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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleCheckboxChange = useCallback((checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  }, []);

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

    window.open(generateWhatsAppMessage(formData), '_blank');      
  }, [formData, t, generateWhatsAppMessage, resetForm]);

  const animationVariants = {
    form: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
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
  );
} 