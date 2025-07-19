import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '../ThemeProvider';
import { useTranslation } from 'react-i18next';
import { navigation } from '@/utils/mocks/mock';

interface NavigationMenuProps {
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
}

export function NavigationMenu({ isMobile = false, onMobileMenuClose }: NavigationMenuProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <div className="mt-16 flow-root bg-background">
        <div className="flex flex-col gap-6 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-lg font-semibold text-gray-900 dark:text-white hover:text-german-red dark:hover:text-german-gold"
              onClick={onMobileMenuClose}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild className="w-full">
            <Link
              to="/contact"
              onClick={onMobileMenuClose}
            >
              {t('actions.contact_us')}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive, isPending }) =>
              cn(
                "link-underline text-base md:text-lg duration-300 font-semibold leading-6 text-foreground hover:text-german-red dark:hover:text-german-gold transition-colors",
                isPending && "text-german-gold dark:text-german-red",
                isActive && "active text-german-red dark:text-german-gold"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button asChild variant="default" size="sm">
          <Link to="/contact">
            {t('actions.contact_us')}
          </Link>
        </Button>
      </div>
    </>
  );
} 