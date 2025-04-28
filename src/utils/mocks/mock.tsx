import { t } from "i18next";
import { BookOpen, Calendar, Globe, GraduationCap } from "lucide-react";

export const iconComponents: Record<string, React.ElementType> = {
    'book-open': BookOpen,
    'graduation-cap': GraduationCap,
    'calendar': Calendar,
    'globe': Globe,
};

// Define navigation links using translations
export const Navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.contact'), href: '/contact' },
];

export const navigation = [
  {
    name: 'Acceuil',
    href: '/'
  },
  {
    name: 'A propos',
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
];

// Définir les lieux touristiques
export const places = [
  {
    name: "Brandenburger Tor (Berlin)",
    position: [52.5163, 13.3777],
    image: "https://images.unsplash.com/photo-1553018320-b5b997d7392a",
    description: "Symbole historique de la réunification allemande situé à Berlin.",
  },
  {
    name: "Château de Neuschwanstein",
    position: [47.5576, 10.7498],
    image: "https://images.unsplash.com/photo-1601987077620-72bcd4acb96d",
    description: "Le château de conte de fées en Bavière qui a inspiré Disney.",
  },
  {
    name: "Cathédrale de Cologne",
    position: [50.9413, 6.9583],
    image: "https://images.unsplash.com/photo-1549366029-bc187d1db1d8",
    description: "La plus grande cathédrale gothique d'Allemagne classée UNESCO.",
  },
  {
    name: "Université de Heidelberg",
    position: [49.4100, 8.7080],
    image: "https://images.unsplash.com/photo-1616681088078-7082ef430b1d",
    description: "La plus ancienne université d'Allemagne fondée en 1386.",
  },
  {
    name: "Port de Hambourg",
    position: [53.5461, 9.9661],
    image: "https://images.unsplash.com/photo-1590402494681-55e9be2e2a1b",
    description: "Le plus grand port d'Allemagne, surnommé la 'porte du monde'.",
  },
];