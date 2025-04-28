
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Facebook, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/assets/logo';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useStore } from '@/store/useStore';
import { navigation } from '@/utils/mocks/mock';

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
  const { contactInfo } = useStore();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/20 backdrop-blur-md shadow-sm border-b border-german-red/30"
          : "bg-transparent"
      )}
    >
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
              aria-label="phone"
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
              aria-label="phone"
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
              aria-label="phone"
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

      <nav className="flex items-center justify-between container py-2 md:py-3 lg:py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex flex-col items-center select-none">
            <Logo className="h-20 w-auto" />
            <h6 className="sr-only font-bold -mt-3 "><span className="text-german-black">Deutsches&nbsp;</span><span className=" text-german-red">Haus&nbsp;</span><span className="text-german-gold"> Jaounde</span></h6>
          </Link>
        </div>

        <div className="flex lg:hidden gap-2">
          {/* <LanguageSwitcher /> */}
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
          {/* <LanguageSwitcher /> */}
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
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background backdrop-blur-md shadow-sm lg:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="fixed inset-0 z-50">
          <div className="flex min-h-full flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Deutsches Haus Jaounde</span>
                <Logo className="h-12 w-auto" /> {/* Increased logo size */}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{t('actions.close_menu')}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-16 flow-root bg-background">
              <div className="flex flex-col gap-6 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-german-red dark:hover:text-german-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('actions.contact_us')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}
