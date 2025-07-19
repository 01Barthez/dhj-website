import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function FAQSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <Card className="border-german-red/20 bg-gradient-to-r from-german-red/5 to-german-gold/5">
        <CardContent className="p-8">
          <h3 className="text-2xl font-heading font-bold mb-6 text-center">
            Questions fréquentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Modalités de paiement</h4>
              <p className="text-foreground/80 text-sm mb-4">
                Paiement mensuel possible. Frais d'inscription à régler avant le début des cours. 
                Possibilité de paiement en plusieurs fois.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Garantie qualité</h4>
              <p className="text-foreground/80 text-sm mb-4">
                Satisfaction garantie ou cours de rattrapage gratuits. 
                95% de nos étudiants recommandent nos formations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Horaires flexibles</h4>
              <p className="text-foreground/80 text-sm mb-4">
                Cours disponibles en matinée (8h-12h), après-midi (14h-18h) 
                et weekend (9h-17h).
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support continu</h4>
              <p className="text-foreground/80 text-sm mb-4">
                Accompagnement personnalisé, groupe WhatsApp d'entraide, 
                et support après formation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 