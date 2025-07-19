import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FeaturesSection() {
  return (
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
        <div className="max-w-screen-md mx-auto w-full flex overflow-hidden items-center flex-col gap-4">
          <img
            src="/images/CEO-DHJ.png"
            alt="Profile CEO-DHJ"
            className="w-full select-none pointer-events-none max-h-[40rem] object-contain"
            loading='lazy'
          />
          <span className="text-center text-foreground/90 font-extralight italic">
            Delice Magloire - <span className="font-bold"> CEO DHJ</span>
          </span>
        </div>
      </div>
    </section>
  );
} 