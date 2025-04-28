
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-6 german-flag-gradient h-1 w-24 mx-auto rounded-full"></div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-heading mb-6">
          <span className="text-german-black dark:text-black">4</span><span className=" text-german-red">0</span><span className="text-german-gold">4</span>
        </h1>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-heading font-bold mb-10">
          Page Non Trouvée
        </h2>

        <p className="text-foreground/80 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Button asChild>
          <Link to="/">
            Retour à l'accueil
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
