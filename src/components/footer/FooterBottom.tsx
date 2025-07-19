import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function FooterBottom() {
  const { t } = useTranslation();

  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex items-center justify-between max-w-screen-md mx-auto">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Deutsches Haus Jaounde. {t('footer.rights')}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Designed and Developped by{' '}
        <Link 
          to="https://gta-it.com" 
          className="font-semibold text-primary/70 hover:text-primary/90"
        >
          GTA Digital
        </Link>
      </p>
    </div>
  );
} 