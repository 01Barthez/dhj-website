
export type ContactInfo = {
  facebook: string;
  instagram: string;
  whatsapp: string;
  email: string;
  email_link: string;
  phone: string;
  location: string;
  mapUrl: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export interface SiteState {
  contactInfo: ContactInfo;
  services: Service[];
  lastFetched: number | null;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

