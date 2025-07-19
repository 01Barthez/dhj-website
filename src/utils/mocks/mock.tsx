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
    name: 'Tarifs',
    href: '/tarifs'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
];

