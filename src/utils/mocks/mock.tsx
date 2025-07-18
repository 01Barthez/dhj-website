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
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Tarifs',
    href: '/tarifs'
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
    image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRlbmJ1cmdlciUyMHRvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Symbole historique de la réunification allemande situé à Berlin.",
  },
  {
    name: "Château de Neuschwanstein",
    position: [47.5576, 10.7498],
    image: "https://www.neuschwanstein.de/bilder/schloss/neuschwanstein_ostansicht_www.kreativ-instinkt.de_DI016842-790.jpg",
    description: "Le château de conte de fées en Bavière qui a inspiré Disney.",
  },
  {
    name: "Cathédrale de Cologne",
    position: [50.9413, 6.9583],
    image: "https://media.istockphoto.com/id/172397882/photo/cologne-cathedral-and-bridge-in-germany.webp?s=1024x1024&w=is&k=20&c=U6bv-erO-c1rhp_cBzJZFhfsS0wGwkbciFArzO-CfK4=",
    description: "La plus grande cathédrale gothique d'Allemagne classée UNESCO.",
  },
  {
    name: "Université de Heidelberg",
    position: [49.4100, 8.7080],
    image: "https://images.unsplash.com/photo-1717915604623-8c5d2cb3d870?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "La plus ancienne université d'Allemagne fondée en 1386.",
  },
  {
    name: "Port de Hambourg",
    position: [53.5461, 9.9661],
    image: "https://media.istockphoto.com/id/1162543908/photo/panoramic-view-over-cargo-crane-container-terminal-in-hamburg.jpg?s=1024x1024&w=is&k=20&c=R004Pj2r7X-beOlhXYhagE6YfYrachSZD_SnHyKHz9g=",
    description: "Le plus grand port d'Allemagne, surnommé la 'porte du monde'.",
  },
  {
    name: "Zugspitze",
    position: [47.4210, 10.9840],
    image: "https://images.unsplash.com/photo-1595789279570-3db5a5339ba1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Le plus haut sommet d'Allemagne offrant des vues panoramiques.",
  },
  {
    name: "Palais de Sanssouci (Potsdam)",
    position: [52.4044, 13.0384],
    image: "https://images.unsplash.com/photo-1723194790246-4e61b6df5f57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Résidence d'été de Frédéric le Grand, roi de Prusse.",
  },
  {
    name: "Forêt-Noire",
    position: [48.0000, 8.0000],
    image: "https://media.istockphoto.com/id/521383509/photo/black-forest-germany.webp?s=1024x1024&w=is&k=20&c=ExN3yMKI__Z4YWKpWk2a80S8xfmZKfyjpSuw6G4GFZ0=",
    description: "Région montagneuse célèbre pour ses forêts denses et ses villages pittoresques.",
  },
  {
    name: "Marienplatz (Munich)",
    position: [48.1371, 11.5754],
    image: "https://plus.unsplash.com/premium_photo-1661886457733-2d936843cd70?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Place centrale de Munich connue pour son hôtel de ville et son carillon.",
  },
  {
    name: "Frauenkirche (Dresde)",
    position: [51.0510, 13.7416],
    image: "https://media.istockphoto.com/id/181070373/photo/frauenkirche-at-dusk-dresden-germany.webp?s=1024x1024&w=is&k=20&c=l4MRuY2TFGFCWaX8W6F_VPzGT-KYMTr35psmEkv22cM=",
    description: "Église baroque reconstruite après la Seconde Guerre mondiale.",
  },
  {
    name: "Rothenburg ob der Tauber",
    position: [49.3780, 10.1797],
    image: "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ville médiévale bien préservée avec des remparts et des maisons à colombages.",
  },
  {
    name: "Vieille ville de Bamberg",
    position: [49.8917, 10.8910],
    image: "https://media.istockphoto.com/id/1334326919/photo/bamberg-germany-half-timebered-town-hall-and-bridge-decorated-by-flowers-bavaria.webp?s=1024x1024&w=is&k=20&c=wefNE8wzHxvG-H9TGA9_X6vc-VTjuscYyGfwmSa67NI=",
    description: "Centre historique classé au patrimoine mondial de l'UNESCO.",
  },
  {
    name: "Holstentor (Lübeck)",
    position: [53.8667, 10.6864],
    image: "https://media.istockphoto.com/id/1018435914/photo/historic-salt-storehouses-l%C3%BCbeck-brick-buildings-trave-river-at-night-lubeck-germany.webp?s=1024x1024&w=is&k=20&c=t-Nj5N3xEBt_GQNigtOUyA8TiCrM8es-WVwGY3Ic19U=",
    description: "Porte médiévale emblématique de la ville hanséatique de Lübeck.",
  },
  {
    name: "Résidence de Würzburg",
    position: [49.7920, 9.9380],
    image: "https://media.istockphoto.com/id/846498904/photo/wurzburg-residence-germany.webp?s=1024x1024&w=is&k=20&c=hlK_4V6HzFKO3FVuw5DvtDE1n3Q19uU9DY9OwPyBa3U=",
    description: "Palais baroque inscrit au patrimoine mondial de l'UNESCO.",
  },
  {
    name: "Cathédrale d'Aix-la-Chapelle",
    position: [50.7753, 6.0839],
    image: "https://plus.unsplash.com/premium_photo-1694475706705-e48c72fc4677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ancienne chapelle palatine de Charlemagne, site du patrimoine mondial.",
  },
  {
    name: "Université de Leipzig",
    position: [51.3397, 12.3731],
    image: "https://media.istockphoto.com/id/175594503/photo/augustusplatz-in-leipzig-germany.webp?s=1024x1024&w=is&k=20&c=pLACa0J0qRtIpJHdV5oaAWmwu7aEnVUmL51kLHL9CN4=",
    description: "L'une des plus anciennes universités d'Allemagne, fondée en 1409.",
  },
  {
    name: "Skyline de Francfort",
    position: [50.1109, 8.6821],
    image: "https://media.istockphoto.com/id/2182307768/photo/frankfurt-city-skyline-at-twilight-germany.webp?s=1024x1024&w=is&k=20&c=LvzvzkgWQ7zXYn9GfLUDaN04ZpeuwvlgmfOyHWxh2G8=",
    description: "Centre financier avec une silhouette urbaine moderne.",
  },
  {
    name: "Château de Nuremberg",
    position: [49.4582, 11.0785],
    image: "https://media.istockphoto.com/id/1697682280/photo/sinwell-tower-in-nuremberg-castle.webp?s=1024x1024&w=is&k=20&c=rcNRz-yw7jj1_P0NtR-hdO7oxw2HgSzwg8_MrQO57yM=",
    description: "Forteresse médiévale dominant la vieille ville de Nuremberg.",
  }
]

