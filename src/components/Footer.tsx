
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-semibold mb-4 inline-block">
              <span className="text-accent-foreground">Bookish</span>
            </Link>
            <p className="mb-4 opacity-80 max-w-xs">
              {language === 'en' 
                ? 'A curated collection of the finest Arabic literature and philosophy.' 
                : 'مجموعة منتقاة من أفضل الأدب والفلسفة العربية.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-accent-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">{t('catalog')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=philosophy" className="opacity-80 hover:opacity-100">
                  {t('philosophy')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=religion" className="opacity-80 hover:opacity-100">
                  {t('religion')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=fiction" className="opacity-80 hover:opacity-100">
                  {t('fiction')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=poetry" className="opacity-80 hover:opacity-100">
                  {t('poetry')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=history" className="opacity-80 hover:opacity-100">
                  {t('history')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">{t('aboutUs')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="opacity-80 hover:opacity-100">
                  {language === 'en' ? 'Shipping' : 'الشحن'}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="opacity-80 hover:opacity-100">
                  {language === 'en' ? 'Returns' : 'الإرجاع'}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="opacity-80 hover:opacity-100">
                  {language === 'en' ? 'FAQ' : 'الأسئلة الشائعة'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium mb-4">{t('contactUs')}</h4>
            <address className="not-italic opacity-80">
              <p>{language === 'en' ? '123 Book Street' : '١٢٣ شارع الكتاب'}</p>
              <p>{language === 'en' ? 'Literary District' : 'حي الأدب'}</p>
              <p>{language === 'en' ? 'Cairo, Egypt' : 'القاهرة، مصر'}</p>
              <p className="mt-2">info@bookish.com</p>
              <p>+20 12 345 6789</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center opacity-70">
          <p>
            &copy; {currentYear} Bookish. {t('copyright')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;