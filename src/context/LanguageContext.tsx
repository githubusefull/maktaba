import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Simple translations object
const translations = {
  en: {
    home: 'Home',
    catalog: 'Catalog',
    search: 'Search',
    cart: 'Cart',
    featured: 'Featured Books',
    newArrivals: 'New Arrivals',
    popularCategories: 'Popular Categories',
    fiction: 'Fiction',
    nonFiction: 'Non-fiction',
    poetry: 'Poetry',
    history: 'History',
    philosophy: 'Philosophy',
    religion: 'Religion',
    language: 'Language',
    contactUs: 'Contact Us',
    aboutUs: 'About Us',
    readMore: 'Read More',
    addToCart: 'Add to Cart',
    details: 'Details',
    price: 'Price',
    author: 'Author',
    publisher: 'Publisher',
    publishDate: 'Publish Date',
    pages: 'Pages',
    isbn: 'ISBN',
    description: 'Description',
    relatedBooks: 'Related Books',
    copyright: 'All rights reserved',
    english: 'English',
    arabic: 'Arabic',
    french: 'French',
    quantity: 'Quantity',
    subtotal: 'Subtotal',
    orderSummary: 'Order Summary',
    tax: 'Tax',
    total: 'Total',
    checkout: 'Checkout',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    shopNow: 'Shop now',
  },
  ar: {
    home: 'الرئيسية',
    catalog: 'الكتالوج',
    search: 'بحث',
    cart: 'السلة',
    featured: 'كتب مميزة',
    newArrivals: 'وصل حديثاً',
    popularCategories: 'الفئات الشائعة',
    fiction: 'روايات',
    nonFiction: 'غير خيالية',
    poetry: 'شعر',
    history: 'تاريخ',
    philosophy: 'فلسفة',
    religion: 'دين',
    language: 'اللغة',
    contactUs: 'اتصل بنا',
    aboutUs: 'من نحن',
    readMore: 'قراءة المزيد',
    addToCart: 'أضف إلى السلة',
    details: 'التفاصيل',
    price: 'السعر',
    author: 'المؤلف',
    publisher: 'الناشر',
    publishDate: 'تاريخ النشر',
    pages: 'الصفحات',
    isbn: 'الرقم الدولي',
    description: 'الوصف',
    relatedBooks: 'كتب ذات صلة',
    copyright: 'جميع الحقوق محفوظة',
    english: 'الإنجليزية',
    arabic: 'العربية',
    french: 'الفرنسية',
    quantity: 'الكمية',
    subtotal: 'المجموع الفرعي',
    orderSummary: 'ملخص الطلب',
    tax: 'الضريبة',
    total: 'المجموع',
    checkout: 'إتمام الشراء',
    remove: 'إزالة',
    emptyCart: 'سلة التسوق فارغة',
    shopNow: 'تسوق الآن',
  },
  fr: {
    home: 'Accueil',
    catalog: 'Catalogue',
    search: 'Rechercher',
    cart: 'Panier',
    featured: 'Livres en vedette',
    newArrivals: 'Nouveautés',
    popularCategories: 'Catégories populaires',
    fiction: 'Fiction',
    nonFiction: 'Non-fiction',
    poetry: 'Poésie',
    history: 'Histoire',
    philosophy: 'Philosophie',
    religion: 'Religion',
    language: 'Langue',
    contactUs: 'Contactez-nous',
    aboutUs: 'À propos de nous',
    readMore: 'Lire la suite',
    addToCart: 'Ajouter au panier',
    details: 'Détails',
    price: 'Prix',
    author: 'Auteur',
    publisher: 'Éditeur',
    publishDate: 'Date de publication',
    pages: 'Pages',
    isbn: 'ISBN',
    description: 'Description',
    relatedBooks: 'Livres associés',
    copyright: 'Tous droits réservés',
    english: 'Anglais',
    arabic: 'Arabe',
    french: 'Français',
    quantity: 'Quantité',
    subtotal: 'Sous-total',
    orderSummary: 'Résumé de la commande',
    tax: 'Taxe',
    total: 'Total',
    checkout: 'Passer à la caisse',
    remove: 'Supprimer',
    emptyCart: 'Votre panier est vide',
    shopNow: 'Acheter maintenant',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Function to translate keys
  const translate = (key: string): string => {
    if (language === 'ar' && translations.ar[key as keyof typeof translations.ar]) {
      return translations.ar[key as keyof typeof translations.ar];
    }
    if (language === 'fr' && translations.fr[key as keyof typeof translations.fr]) {
      return translations.fr[key as keyof typeof translations.fr];
    }
    return translations.en[key as keyof typeof translations.en] || key;
  };

  // Update document language and direction when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'rtl' : '';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};