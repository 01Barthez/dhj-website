import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingPlan {
  id: string;
  level: string;
  title: string;
  description: string;
  monthlyPrice: number;
  duration: number;
  registrationFee: number;
  totalPrice: number;
  popular: boolean;
  features: string[];
  goals: string[];
}

interface PricingCardsProps {
  pricingPlans: PricingPlan[];
}

export function PricingCards({ pricingPlans }: PricingCardsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-german-red text-white border-0 px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Populaire
              </Badge>
            </div>
          )}
          <Card className={`h-full relative overflow-hidden ${plan.popular ? 'border-german-red shadow-lg scale-105' : ''}`}>
            <CardHeader className="text-center pb-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${
                plan.popular ? 'bg-german-red text-white' : 'bg-german-gold/10 text-german-red'
              }`}>
                <span className="text-2xl font-bold">{plan.level}</span>
              </div>
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-foreground/70 text-sm">{plan.description}</p>
            </CardHeader>

            <CardContent className="pb-4">
              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-german-red mb-2">
                  {formatPrice(plan.monthlyPrice)} FCFA
                  <span className="text-base font-normal text-foreground/70">/mois</span>
                </div>
                <div className="text-sm text-foreground/70">
                  Durée: {plan.duration} mois
                </div>
                <div className="text-lg font-semibold mt-2">
                  Total: {formatPrice(plan.totalPrice)} FCFA
                </div>
                <div className="text-xs text-foreground/60 mt-1">
                  + {formatPrice(plan.registrationFee)} FCFA d'inscription
                </div>
              </div>

              {/* Goals */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Objectifs du niveau :</h4>
                <ul className="space-y-2">
                  {plan.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-german-red mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Inclus dans la formation :</h4>
                <ul className="space-y-2">
                  {plan.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-german-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.features.length > 4 && (
                  <p className="text-xs text-foreground/60 mt-2">
                    + {plan.features.length - 4} autres avantages
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-german-red hover:bg-german-red/90' : ''}`}
              >
                <Link to={`/inscription?level=${plan.id}`}>
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 