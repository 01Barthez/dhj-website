import { Link } from 'react-router-dom';
import { Facebook, Mail, Instagram } from 'lucide-react';
import Logo from '@/assets/logo';
import { useStore } from '@/store/useStore';

export function FooterBrand() {
  const { contactInfo } = useStore();

  return (
    <div>
      <Logo className="h-14 w-auto" />
      <p className="mt-4 text-sm text-gray-800 dark:text-gray-300 max-w-xs">
        Centre de formation en langue allemande situé au Cameroun, offrant des cours de qualité pour tous les niveaux.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link
          to={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-german-red dark:hover:text-german-gold transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </Link>
        <Link
          to={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-500 dark:text-gray-400 hover:text-german-red dark:hover:text-german-gold transition-colors"
        >
          <Instagram size={20} />
        </Link>
        <Link
          to={contactInfo.email_link}
          className="text-gray-500 dark:text-gray-400 hover:text-german-red dark:hover:text-german-gold transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </Link>
      </div>
    </div>
  );
} 