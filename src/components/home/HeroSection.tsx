import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/utils/motion/motion';
import { DotPattern } from '@/components/magic-ui/DotPattern';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="container relative overflow-hidden bg-background">
      <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="w-full py-16 sm:py-20 md:py-28 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-24 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-block rounded-xl bg-german-gold/10 border border-german-gold/50 dark:bg-red-900/40 px-2 md:px-3 py-1 text-sm font-semibold text-foreground/95">
              Centre de formation en langue allemande
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Bienvenue au <span className="text-gradient">Deutsches Haus Jaounde</span>
            </h1>
            <p className="text-xl text-foreground/85 max-w-lg">
              Votre centre d'excellence pour l'apprentissage de la langue et de la culture allemande au Cameroun.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full hover:bg-primary/70 duration-300">
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group rounded-full border-foreground/80 px-3 ">
                <Link to="/services">
                  Nos services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 duration-300" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4 bg-german-red/20 rounded-3xl transform rotate-3"></div>
              <div className="w-full h-full absolute -bottom-4 -right-4 bg-german-gold/20 rounded-3xl transform -rotate-3"></div>
              <div className=" max-w-lg min-w-96 min-h-80 max-h-96">
                <img
                  src="/images/Denis-Action.jpeg"
                  alt="Students learning German"
                  className="relative z-10 w-full h-full rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 