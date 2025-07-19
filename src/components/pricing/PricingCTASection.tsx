import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function PricingCTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Card className="bg-gradient-to-r from-german-red/10 to-german-gold/10 border-german-red/20">
        <CardContent className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Prêt à commencer votre aventure allemande ?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
            Rejoignez plus de 500 étudiants qui ont choisi DHJ pour apprendre l'allemand. 
            Nos formations vous préparent efficacement pour vos projets d'études et de carrière.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/inscription">
                Commencer maintenant
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">
                Demander des informations
              </Link>
            </Button>
          </div>
          <p className="text-sm text-foreground/60 mt-4">
            Séance d'information gratuite • Test de niveau inclus • Garantie satisfaction
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
} 