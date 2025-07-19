import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function BlogCTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <Card className="bg-gradient-to-r from-german-red/10 to-german-gold/10 border-german-red/20">
        <CardContent className="p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Prêt à commencer votre apprentissage ?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont choisi DHJ pour apprendre l'allemand. 
            Découvrez nos formations adaptées à tous les niveaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/tarifs">
                Voir nos formations
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 