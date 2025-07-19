import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

interface RegistrationSummaryProps {
  selectedLevel: {
    name: string;
    price: number;
    duration: number;
  };
  totalPrice: number;
}

export function RegistrationSummary({ selectedLevel, totalPrice }: RegistrationSummaryProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
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
  );
} 