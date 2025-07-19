import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { useTranslation } from 'react-i18next';

export function FooterContact() {
  const { contactInfo } = useStore();
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
        {t('footer.contact')}
      </h3>
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
  );
} 