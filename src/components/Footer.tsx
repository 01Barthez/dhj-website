
import { Facebook, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/logo';
import { useStore } from '@/store/useStore';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { contactInfo } = useStore();
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-german-red/10 via-german-gold/10 to-german-black/10 dark:from-german-red/20 dark:via-german-gold/20 dark:to-german-black/20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer.navigation')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  Acceuil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  A propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-800 dark:text-gray-300 hover:text-german-red dark:hover:text-german-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer.contact')}</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Link
                  className='flex items-start'
                  to={contactInfo.whatsapp}
                >
                  <Phone className="h-5 w-5 text-german-red dark:text-german-gold flex-shrink-0 mr-3" />
                  <span className="text-base text-gray-800 dark:text-gray-300">
                    {contactInfo.phone}
                  </span>
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  className='flex items-start'
                  to={'https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Anjofang%40t-online.de%3Fsubject%3DDemande%2520d%2527information%2520-%2520Deutsches%2520Haus%2520Jaunde%26body%3DBonjour%2520Deutsches%2520Haus%2520Jaunde%2520(DHJ)%252C%2520j%25E2%2580%2599ai%2520d%25C3%25A9couvert%2520vos%2520services%2520via%2520votre%2520site%2520web%2520et%2520cela%2520a%2520vivement%2520retenu%2520mon%2520attention.%2520Je%2520souhaiterais%2520obtenir%2520davantage%2520d%25E2%2580%2599informations%2520%25C3%25A0%2520ce%2520sujet.%2520Merci%2520!%26utm_source%3Dwebsite%26utm_medium%3Dcontact_page%26utm_campaign%3Dcontact_dhj'}
                >
                  <Mail className="h-5 w-5 text-german-red dark:text-german-gold flex-shrink-0 mr-3" />
                  <span className="text-base text-gray-800 dark:text-gray-300">
                    {contactInfo.email}
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  className='flex items-start'
                  to={contactInfo.mapUrl}
                >
                  <MapPin className="h-5 w-5 text-german-red dark:text-german-gold flex-shrink-0 mr-3" />
                  <span className="text-base text-gray-800 dark:text-gray-300">
                    {contactInfo.location}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex items-center justify-between max-w-screen-md mx-auto">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Deutsches Haus Jaounde. {t('footer.rights')}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed and Developped by <Link to="https://gta-it.com" className="font-semibold text-primary/70 hover:text-primary/90">GTA Digital</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
