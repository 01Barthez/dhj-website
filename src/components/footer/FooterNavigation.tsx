import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function FooterNavigation() {
  const { t } = useTranslation();

  const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'A propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
        {t('footer.navigation')}
      </h3>
      <ul className="mt-4 space-y-2">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link 
              to={link.href} 
              className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 