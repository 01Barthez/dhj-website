
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/assets/logo';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';
import { TopBar } from './navbar/TopBar';
import { NavigationMenu } from './navbar/NavigationMenu';
import { MobileMenu } from './navbar/MobileMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/20 backdrop-blur-md shadow-sm border-b border-german-red/30"
          : "bg-transparent"
      )}
    >
      <TopBar />

      <nav className="flex items-center justify-between container py-2 md:py-3 lg:py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex flex-col items-center select-none">
            <Logo className="h-20 w-auto" />
            <h6 className="sr-only font-bold -mt-3 ">
              <span className="text-german-black">Deutsches&nbsp;</span>
              <span className="text-german-red">Haus&nbsp;</span>
              <span className="text-german-gold">Jaounde</span>
            </h6>
          </Link>
        </div>

        <div className="flex lg:hidden gap-2">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t('actions.open_menu')}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <NavigationMenu />
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
}
