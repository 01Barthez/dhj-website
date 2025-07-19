import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail, Instagram } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function TopBar() {
  const { contactInfo } = useStore();

  return (
    <div className="bg-german-red/20 dark:bg-german-gold/20 border-b border-german-red/40">
      <div className="container flex items-center justify-center md:justify-end py-1 gap-10">
        <span className="text-xs whitespace-nowrap sm:text-sm font-semibold cursor-default">
          Contactez Nous Sur Nos Réseaux:
        </span>
        <div className="flex items-center gap-2">
          <Link
            to={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="phone"
            className="p-1 text-german-red/60 hover:text-german-red/80 border border-german-red/60 hover:border-german-red/80 dark:text-german-gold/60 dark:hover:text-german-gold/80 dark:border-german-gold/60 dark:hover:border-german-gold/80 bg-transparent rounded-full"
          >
            <Phone
              size={14}
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </Link>

          <Link
            to={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            className="p-1 text-german-red/60 hover:text-german-red/80 border border-german-red/60 hover:border-german-red/80 dark:text-german-gold/60 dark:hover:text-german-gold/80 dark:border-german-gold/60 dark:hover:border-german-gold/80 bg-transparent rounded-full"
          >
            <Facebook
              size={14}
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </Link>

          <Link
            to={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            className="p-1 text-german-red/60 hover:text-german-red/80 border border-german-red/60 hover:border-german-red/80 dark:text-german-gold/60 dark:hover:text-german-gold/80 dark:border-german-gold/60 dark:hover:border-german-gold/80 bg-transparent rounded-full"
          >
            <Instagram
              size={14}
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </Link>

          <Link
            to={contactInfo.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
            className="p-1 text-german-red/60 hover:text-german-red/80 border border-german-red/60 hover:border-german-red/80 dark:text-german-gold/60 dark:hover:text-german-gold/80 dark:border-german-gold/60 dark:hover:border-german-gold/80 bg-transparent rounded-full"
          >
            <Mail
              size={14}
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </Link>
        </div>
      </div>
    </div>
  );
} 