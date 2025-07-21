import { Link } from 'react-router-dom';
import { X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '../ThemeProvider';
import { useTranslation } from 'react-i18next';
import Logo from '@/assets/logo';
import { NavigationMenu } from './NavigationMenu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background backdrop-blur-md shadow-sm lg:hidden transform transition-transform duration-300 ease-in-out overflow-x-hidden w-full",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="fixed inset-0 z-50 w-full">
        <div className="flex min-h-full flex-col px-6 py-6 w-full">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={onClose}>
              <span className="sr-only">Deutsches Haus Jaounde</span>
              <Logo className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={onClose}
              >
                <span className="sr-only">{t('actions.close_menu')}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <NavigationMenu isMobile onMobileMenuClose={onClose} />
        </div>
      </div>
    </div>
  );
} 