import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_REGISTRATION } from '@/constants/constant';
import { RegistrationHero } from '@/components/registration/RegistrationHero';
import { RegistrationForm } from '@/components/registration/RegistrationForm';
import { RegistrationSummary } from '@/components/registration/RegistrationSummary';

const levels = {
  'a1': { name: 'A1 - Débutant', price: 110000, duration: 2 },
  'a2': { name: 'A2 - Élémentaire', price: 110000, duration: 2 },
  'b1': { name: 'B1 - Intermédiaire', price: 120000, duration: 2 },
  'b2': { name: 'B2 - Avancé', price: 120000, duration: 2 }
};

export default function Registration() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const levelParam = searchParams.get('level') || 'a1';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedLevel = levels[levelParam as keyof typeof levels] || levels.a1;
  const totalPrice = selectedLevel.price * selectedLevel.duration + 10000; // + inscription

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Préparation des données pour EmailJS
      const emailData = {
        to_email: 'njofang@t-online.de',
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: `Nouvelle inscription - Niveau ${data.level.toUpperCase()}`,
        message: `
NOUVELLE INSCRIPTION - DEUTSCHES HAUS JAOUNDE

=== INFORMATIONS PERSONNELLES ===
Nom complet: ${data.firstName} ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone}
Date de naissance: ${data.dateOfBirth}
Adresse: ${data.address}, ${data.city}

=== FORMATION CHOISIE ===
Niveau: ${selectedLevel.name}
Horaire préféré: ${data.schedule}
Coût mensuel: ${formatPrice(selectedLevel.price)} FCFA
Durée: ${selectedLevel.duration} mois
Coût total: ${formatPrice(totalPrice)} FCFA

=== PROFIL ACADÉMIQUE ===
Niveau d'études: ${data.previousStudies}
Profession: ${data.profession || 'Non spécifiée'}
Expérience en allemand: ${data.germanExperience || 'Aucune'}

=== MOTIVATION ET OBJECTIFS ===
Motivation principale: ${data.motivation}
Objectifs d'apprentissage: ${data.goals}

=== CONTACT D'URGENCE ===
Nom: ${data.emergencyName}
Téléphone: ${data.emergencyContact}

=== BESOINS SPÉCIAUX ===
${data.specialNeeds || 'Aucun besoin spécial mentionné'}

Date d'inscription: ${new Date().toLocaleDateString('fr-FR')}
        `
      };

      // Envoi via EmailJS
      await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID_REGISTRATION,
        emailData,
        PUBLIC_KEY
      );

      // Préparation du message WhatsApp
      const whatsappMessage = encodeURIComponent(`
Bonjour DHJ! 

Je viens de m'inscrire à votre formation d'allemand.

👤 ${data.firstName} ${data.lastName}
📧 ${data.email}
📞 ${data.phone}

🎓 Formation: ${selectedLevel.name}
⏰ Horaire: ${data.schedule}
💰 Total: ${formatPrice(totalPrice)} FCFA

🎯 Motivation: ${data.motivation}

J'aimerais confirmer mon inscription et connaître les prochaines étapes.

Merci!
      `);

      toast({
        title: "Inscription réussie !",
        description: "Vos informations ont été envoyées avec succès. Vous allez être redirigé vers WhatsApp.",
      });

      // Redirection vers WhatsApp après 2 secondes
      setTimeout(() => {
        window.open(`https://wa.me/237695220854?text=${whatsappMessage}`, '_blank');
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <RegistrationHero />

      <div className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/tarifs')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux tarifs
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <RegistrationForm 
                defaultLevel={levelParam}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <RegistrationSummary 
                selectedLevel={selectedLevel}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}