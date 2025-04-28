
import { SiteState } from '@/utils/interface/interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create<SiteState>()(
  persist(
    (set) => ({
      contactInfo: {
        facebook: "https://www.facebook.com/DeutschesHausJaunde",
        instagram: "https://www.instagram.com/deutsches_haus_jaunde",
        email: "njofang@t-online.de",
        email_link: "mailto:njofang@t-online.de?subject=Demande%20d%27information%20-%20Deutsches%20Haus%20Jaunde&body=Bonjour%20Deutsches%20Haus%20Jaunde%20(DHJ)%2C%20j%E2%80%99ai%20d%C3%A9couvert%20vos%20services%20via%20votre%20site%20web%20et%20cela%20a%20vivement%20retenu%20mon%20attention.%20Je%20souhaiterais%20obtenir%20davantage%20d%E2%80%99informations%20%C3%A0%20ce%20sujet.%20Merci%20!&utm_source=website&utm_medium=contact_page&utm_campaign=contact_dhj",
        phone: "695220854",
        whatsapp: "https://wa.me/237695220854?text=Bonjour%20Deutsches%20Haus%20Jaunde%20(DHJ)%2C%20j%E2%80%99ai%20d%C3%A9couvert%20vos%20services%20via%20votre%20site%20web%20et%20cela%20a%20vivement%20retenu%20mon%20attention.%20Je%20souhaiterais%20obtenir%20davantage%20d%E2%80%99informations%20%C3%A0%20ce%20sujet.%20Merci%20!&utm_source=website&utm_medium=contact_page&utm_campaign=contact_dhj",
        location: "Nkolmesseng face station Neptune",
        mapUrl: "https://maps.app.goo.gl/gKSNRsfuZytcWBPZ7",
      },

      services: [
        {
          id: 1,
          title: "Cours d'allemand",
          description: "Apprenez l'allemand avec nos professeurs qualifiés et expérimentés. Différents niveaux disponibles (A1, A2, B1, B2 et C1).",
          icon: "book-open",
        },
        {
          id: 2,
          title: "Préparation aux examens",
          description: "Préparez-vous aux examens officiels d'allemand pour vos études ou votre carrière.",
          icon: "graduation-cap",
        },
        {
          id: 3,
          title: "Salles de conférence multimédia",
          description: "Un environnement moderne et interactif pour des sessions dynamiques.",
          icon: "calendar",
        },
        {
          id: 4,
          title: "Cours intensifs",
          description: "Progressez rapidement grâce à nos cours intensifs et notre méthode d'apprentissage efficace.",
          icon: "calendar",
        },
        {
          id: 4,
          title: "Culture allemande",
          description: "Découvrez la culture allemande à travers nos événements et ateliers culturels.",
          icon: "globe",
        }
      ],
      lastFetched: null,
    }),
    {
      name: 'dhj-site-storage',
    }
  )
);
