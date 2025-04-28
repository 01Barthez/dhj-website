
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { SectionTitle } from '@/components/ui/section-title';
import { fadeInUp, stagger } from '@/utils/motion/motion';
import { iconComponents } from '@/utils/mocks/mock';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const { services } = useStore();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="container relative overflow-hidden bg-background">
          <div className="absolute inset-0 hero-pattern opacity-[0.03] z-0"></div> {/* Layout */}

          <div className="w-full py-16 sm:py-20 md:py-28 relative z-10">
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
                      src="/images/StudentslearningGerman.jpg"
                      alt="Students learning German"
                      className="relative z-10 w-full h-full rounded-3xl shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features/Services Section */}
        <section className="bg-background py-16 sm:py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight text-center">
              <span className="text-gradient">Nos</span> Services
            </h2>
            <p className="text-xl text-foreground/80 text-center">
              Découvrez les formations et services que nous proposons
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              variants={stagger}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.slice(0, 4).map((service) => {
                const IconComponent = iconComponents[service.icon];

                return (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="magic-card p-6 flex flex-col items-center text-center"
                  >
                    <div className="h-12 w-12 rounded-full border border-german-gold/40 bg-german-gold/10 dark:bg-german-gold/5 flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="h-6 w-6 text-german-red dark:text-german-red/70" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 cursor-default">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-16 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className='border border-red-500 rounded-xl hover:bg-red-50'
              >
                <Link to="/services" className="text-red-500">
                  Voir tous nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container bg-background py-16 sm:py-20 md:py-28 space-y-10 md:space-y-16 lg:md:space-y-20">
          <div className="max-w-screen-md mx-auto flex flex-col items-center gap-2 md:gap-3">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-8 tracking-tight text-center">
              Soyez en demande grâce à notre&nbsp;<br /><span className="text-gradient uppercase">formation professionnelle</span>
            </h2>
            <p className="text-xl text-foreground/80 text-center">
              Transformez votre niveau en allemand en une véritable opportunité d'études ou d'emploi à l'international.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
            {/* Bloc Accordion */}
            <div className="w-full shadow-sm shadow-german-red dark:shadow-german-gold p-4 md:p-6 rounded border max-w-screen-md mx-auto ">
              <Accordion type="single" collapsible className="w-full">

                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className="text-german-red/80 dark:text-german-gold/80 text-lg md:text-xl hover:text-german-red dark:hover:text-german-gold hover:no-underline"
                  >
                    Une pédagogie axée sur la pratique
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-german-red/80 dark:bg-german-gold/80 p-4 text-base text-white dark:text-german-black"
                  >
                    Chez DHJ, l'apprentissage est basé sur des mises en situation réelles : conversations, jeux de rôles, ateliers thématiques… Vous parlez dès le premier cours, et vous progressez à votre rythme, avec confiance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger
                    className="text-german-red/80 dark:text-german-gold/80 text-lg md:text-xl hover:text-german-red dark:hover:text-german-gold hover:no-underline"
                  >
                    Des formateurs expérimentés et passionnés
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-german-red/80 dark:bg-german-gold/80 p-4 text-base text-white dark:text-german-black"
                  >
                    Nos enseignants sont certifiés, natifs ou parfaitement bilingues, et surtout passionnés par la transmission. Ils vous accompagnent avec bienveillance et adaptent les cours à vos besoins.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger
                    className="text-german-red/80 dark:text-german-gold/80 text-lg md:text-xl hover:text-german-red dark:hover:text-german-gold hover:no-underline"
                  >
                    Préparation aux examens officiels
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-german-red/80 dark:bg-german-gold/80 p-4 text-base text-white dark:text-german-black"
                  >
                    Nous vous préparons aux tests d'allemand reconnus internationalement (Goethe-Zertifikat, TestDaF, TELC…) grâce à des supports actualisés et des simulations d'examens régulières.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger
                    className="text-german-red/80 dark:text-german-gold/80 text-lg md:text-xl hover:text-german-red dark:hover:text-german-gold hover:no-underline"
                  >
                    Accompagnement et Post-Accompagnement
                  </AccordionTrigger>
                  <AccordionContent
                    className="bg-german-red/80 dark:bg-german-gold/80 p-4 text-base text-white dark:text-german-black"
                  >
                    Avec DHJ, pendant les cours vous bénéficiez d'un accompagnement personnalisé en fonction de votre niveau de difficulté, après les cours vous bénéficiez d'un accompagnement pour l'obtention de votre VISA et d'un accompagnement pour réussir une fois en Allemange.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Image CEO */}
            <div className="max-w-screen-md mx-auto w-full flex items-center flex-col gap-4">
              <img
                src="/images/CEO-DHJ_Denis_Magloire.png"
                alt="Profile CEO-DHJ"
                className="w-full"
                loading='lazy'
              />
              <span className="text-center text-foreground/90 font-extralight italic">
                Delice Magloire - <span className="font-bold"> CEO DHJ</span>
              </span>
            </div>
          </div>
        </section>


        {/* Carousel des lieux populaires d'allemagne */}
        <div className="">
          Carousel
        </div>
      </div>

      {/* Call to action */}
      <section className=" bgImage-homebaner py-20 sm:py-28 md:py-36 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-german-gold/50"></div>

        <div className="bg-german-gold/80 text-german-black rounded-lg w-fit p-6 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Commencez votre parcours linguistique avec nous
            </h2>
            <p className="text-xl">
              Apprenez l'allemand dans un environnement accueillant avec des méthodes d'enseignement modernes et efficaces.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Nous contacter dès maintenant
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
