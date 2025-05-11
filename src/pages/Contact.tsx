import { useState, useEffect, FormEvent } from 'react';
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

export default function Contact() {
  const { contactInfo } = useStore();
  const { t } = useTranslation();

  //  Email Datas;
  const email_receiver = import.meta.env.VITE_EMAIL_RECEIVER;
  const email_service_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const email_template_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error(t('contact.consent_required', 'Please accept the terms of use.'));
      return;
    }

    const emailData = {
      ...formData,
      to_email: email_receiver,
    };

    emailjs
      .send(
        email_service_ID,
        email_template_ID,
        {
          ...formData,
          to_email: email_receiver
        },
        publicKey
      )
      .then(
        (result) => {
          setIsSubmitting(true);
          console.log(formData);

          // Simulate form submission
          setTimeout(() => {
            toast.success(`Merci ${formData.name}, Votre message a bien été envoyé nous vous recontacterons très bientôt !`);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
              consent: false
            });
            setIsSubmitting(false);
          }, 1500);
        },
        (error) => {
          toast.error(`Echec de la soumission du formulaire !`);
          console.log(error);
        }
      );
  };


  return (
    <div className="flex flex-col">
      {/* Hero with German flag gradient background */}
      <section className="w-full bgImage-contact py-20 md:py-36 lg:py-40  relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contactez Nous</h1>
              <p className="text-xl">
                Nous sommes disponible pour répondre à toutes vos questions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 shadow-sm p-6 rounded overflow-hidden shadow-german-black/20 dark:shadow-white/20"
            >
              <div className="flex flex-col  items-center gap-2 md:gap-3 mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-center">
                  <span className="text-gradient">Informations</span> de contact
                </h2>
                <p className="text-muted-foreground max-w-3xl text-xl text-center">
                  Retrouvez-nous en ligne, par téléphone ou en personne
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to={contactInfo.whatsapp}
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="phone"
                >
                  <Card className="overflow-hidden border-none bg-card shadow-lg dark:shadow-sm dark:shadow-white">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-german-red/10 flex items-center justify-center mb-4">
                        <Phone className="h-5 w-5 text-german-red" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                      <p className="text-foreground/80">{contactInfo.phone}</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  to={contactInfo.email_link}
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="email"
                >
                  <Card className="overflow-hidden border-none shadow-lg dark:shadow-sm dark:shadow-white bg-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-german-gold/10 flex items-center justify-center mb-4">
                        <Mail className="h-5 w-5 text-german-gold" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-foreground/80">{contactInfo.email}</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  to={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="location"
                  className=""
                >
                  <Card className="overflow-hidden border-none shadow-lg dark:shadow-sm dark:shadow-white bg-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-german-red/10 flex items-center justify-center mb-4">
                        <MapPin className="h-5 w-5 text-german-red" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                      <p className="text-foreground/80">{contactInfo.location}</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  to={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className=""
                >
                  <Card className="overflow-hidden border-none shadow-lg dark:shadow-sm dark:shadow-white bg-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-german-gold/10 flex items-center justify-center mb-4">
                        <Facebook className="h-5 w-5 text-german-gold" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Facebook</h3>
                      <Link
                        to={contactInfo.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:underline"
                      >
                        DeutschesHausJaunde
                      </Link>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" shadow-sm p-0 rounded overflow-hidden shadow-german-red/20 dark:shadow-german-red/80"
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

      {/* Card section */}
      <section className="shadow-sm p-6 rounded overflow-hidden shadow-german-gold">
        <Card className="border-none shadow-xl">
          <CardContent className="">
            {/* <MapPosition location={contactInfo.location} mapUrl={contactInfo.mapUrl} /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2122.384822476309!2d11.554148185019468!3d3.8791264690999006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTInNDUuMCJOIDExwrAzMycxOS4zIkU!5e0!3m2!1sfr!2scm!4v1746989409866!5m2!1sfr!2scm" style={{ border: 0, width: "100%", height: "500px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
