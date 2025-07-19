import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { CheckCircle, Loader2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

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

interface RegistrationFormProps {
  defaultLevel: string;
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
}

export function RegistrationForm({ defaultLevel, onSubmit, isSubmitting }: RegistrationFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level: defaultLevel,
      consent: false
    }
  });

  return (
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
  );
} 