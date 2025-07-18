import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { ArrowLeft, CheckCircle, Loader2, FileText } from 'lucide-react';
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_REGISTRATION } from '@/constants/constant';

const levels = {
  'a1': { name: 'A1 - Débutant', price: 110000, duration: 2 },
  'a2': { name: 'A2 - Élémentaire', price: 110000, duration: 2 },
  'b1': { name: 'B1 - Intermédiaire', price: 120000, duration: 2 },
  'b2': { name: 'B2 - Avancé', price: 120000, duration: 2 }
};

const scheduleOptions = [
  'Matinée (8h-12h)',
  'Après-midi (14h-18h)',
  'Weekend (9h-17h)',
  'Cours du soir (18h-20h)'
];

const motivationOptions = [
  'Études en Allemagne',
  'Opportunités professionnelles',
  'Passion pour la langue',
  'Voyage et culture',
  'Certification officielle',
  'Autre'
];

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(9, 'Numéro de téléphone invalide'),
  dateOfBirth: z.string().min(1, 'Date de naissance requise'),
  address: z.string().min(10, 'Adresse complète requise'),
  city: z.string().min(2, 'Ville requise'),
  level: z.string().min(1, 'Niveau requis'),
  schedule: z.string().min(1, 'Horaire préféré requis'),
  motivation: z.string().min(1, 'Motivation requise'),
  germanExperience: z.string().optional(),
  previousStudies: z.string().min(2, 'Niveau d\'études requis'),
  profession: z.string().optional(),
  emergencyContact: z.string().min(9, 'Contact d\'urgence requis'),
  emergencyName: z.string().min(2, 'Nom du contact d\'urgence requis'),
  specialNeeds: z.string().optional(),
  goals: z.string().min(10, 'Objectifs d\'apprentissage requis'),
  consent: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions'),
});

type FormData = z.infer<typeof formSchema>;

export default function Registration() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const levelParam = searchParams.get('level') || 'a1';

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level: levelParam,
      consent: false
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedLevel = levels[levelParam as keyof typeof levels] || levels.a1;
  const totalPrice = selectedLevel.price * selectedLevel.duration + 10000; // + inscription

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const onSubmit = async (data: FormData) => {
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
      {/* Hero Section */}
      <section className="w-full bgImage py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>
        
        <div className="relative text-white w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Formulaire d'inscription
            </h1>
            <p className="text-lg">
              Dernière étape pour rejoindre DHJ et réaliser vos rêves en allemand
            </p>
          </motion.div>
        </div>
      </section>

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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-heading font-bold">
                      Informations d'inscription
                    </h2>
                    <p className="text-foreground/70">
                      Veuillez remplir tous les champs obligatoires pour finaliser votre inscription.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Informations personnelles */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Informations personnelles
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Prénom *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Votre prénom" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Votre nom" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="votre@email.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Téléphone *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+237 6XX XXX XXX" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date de naissance *</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Adresse complète *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Rue, quartier, BP..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ville *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Yaoundé, Douala..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Formation choisie */}
                        <div className="space-y-4 border-t pt-6">
                          <h3 className="text-lg font-semibold">Formation et horaires</h3>
                          
                          <FormField
                            control={form.control}
                            name="level"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Niveau choisi *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {Object.entries(levels).map(([key, level]) => (
                                      <SelectItem key={key} value={key}>
                                        {level.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="schedule"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Horaire préféré *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choisissez votre horaire" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {scheduleOptions.map((schedule) => (
                                      <SelectItem key={schedule} value={schedule}>
                                        {schedule}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Profil académique */}
                        <div className="space-y-4 border-t pt-6">
                          <h3 className="text-lg font-semibold">Profil académique et professionnel</h3>
                          
                          <FormField
                            control={form.control}
                            name="previousStudies"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Niveau d'études *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Baccalauréat, Licence, Master..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="profession"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Profession actuelle</FormLabel>
                                <FormControl>
                                  <Input placeholder="Étudiant, Ingénieur, Enseignant..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="germanExperience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expérience préalable en allemand</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Décrivez votre niveau actuel, formations antérieures..."
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Motivation et objectifs */}
                        <div className="space-y-4 border-t pt-6">
                          <h3 className="text-lg font-semibold">Motivation et objectifs</h3>
                          
                          <FormField
                            control={form.control}
                            name="motivation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Motivation principale *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Pourquoi apprendre l'allemand ?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {motivationOptions.map((motivation) => (
                                      <SelectItem key={motivation} value={motivation}>
                                        {motivation}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="goals"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Objectifs d'apprentissage *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Décrivez vos objectifs spécifiques : obtenir une certification, étudier en Allemagne, travailler dans une entreprise allemande..."
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Contact d'urgence */}
                        <div className="space-y-4 border-t pt-6">
                          <h3 className="text-lg font-semibold">Contact d'urgence</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="emergencyName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom du contact *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Nom et prénom" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="emergencyContact"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Téléphone d'urgence *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+237 6XX XXX XXX" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Besoins spéciaux */}
                        <div className="space-y-4 border-t pt-6">
                          <FormField
                            control={form.control}
                            name="specialNeeds"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Besoins spéciaux ou remarques</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Allergies, besoins d'accessibilité, remarques particulières..."
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Consentement */}
                        <div className="border-t pt-6">
                          <FormField
                            control={form.control}
                            name="consent"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm">
                                    J'accepte les conditions générales et autorise DHJ à utiliser mes données 
                                    pour le traitement de mon inscription et la communication liée à ma formation. *
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Finaliser mon inscription
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-4"
              >
                <Card className="border-german-red/20">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Récapitulatif</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="font-semibold">Formation choisie</Label>
                      <p className="text-foreground/80">{selectedLevel.name}</p>
                    </div>
                    
                    <div>
                      <Label className="font-semibold">Durée</Label>
                      <p className="text-foreground/80">{selectedLevel.duration} mois</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>Frais d'inscription</span>
                        <span>{formatPrice(10000)} FCFA</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Formation ({selectedLevel.duration} mois)</span>
                        <span>{formatPrice(selectedLevel.price * selectedLevel.duration)} FCFA</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                        <span>Total</span>
                        <span className="text-german-red">{formatPrice(totalPrice)} FCFA</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Inclus dans votre formation :</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>✓ Matériel pédagogique</li>
                        <li>✓ Accès plateforme en ligne</li>
                        <li>✓ Certificat de niveau</li>
                        <li>✓ Support personnalisé</li>
                        <li>✓ Préparation aux examens</li>
                      </ul>
                    </div>

                    <Badge variant="secondary" className="w-full justify-center">
                      Paiement mensuel possible
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}