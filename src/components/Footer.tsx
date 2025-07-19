
import { FooterBrand } from './footer/FooterBrand';
import { FooterNavigation } from './footer/FooterNavigation';
import { FooterContact } from './footer/FooterContact';
import { FooterBottom } from './footer/FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-german-red/10 via-german-gold/10 to-german-black/10 dark:from-german-red/20 dark:via-german-gold/20 dark:to-german-black/20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
