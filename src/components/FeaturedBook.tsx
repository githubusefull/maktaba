
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../data/books';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook: React.FC<FeaturedBookProps> = ({ book }) => {
  const { language, t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="mb-2 opacity-80">
          <span className="uppercase tracking-wider text-sm">
            {language === 'en' 
              ? book.categories.join(' • ') 
              : book.categoriesAr.join(' • ')}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-serif">
          {language === 'en' ? book.title : book.titleAr}
        </h2>
        
        <p className="mb-2 text-lg">
          {language === 'en' ? book.author : book.authorAr}
        </p>
        
        <p className="mb-6 opacity-80 line-clamp-3 md:line-clamp-4">
          {language === 'en' ? book.description : book.descriptionAr}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to={`/book/${book.id}`} 
            className="btn-primary flex items-center gap-2"
          >
            {t('readMore')}
            <ArrowRight size={16} />
          </Link>
          
          <button className="btn-outlined">
            {t('addToCart')}
          </button>
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <div className="relative aspect-[2/3] max-w-xs mx-auto">
          <div className="absolute inset-0 -rotate-6 bg-accent/30 rounded-lg"></div>
          <img 
            src={book.coverImage} 
            alt={language === 'en' ? book.title : book.titleAr}
            className="relative rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
