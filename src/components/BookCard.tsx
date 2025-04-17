
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../data/books';
import { useLanguage } from '../context/LanguageContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { language, t } = useLanguage();
  
  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className="card-border hover-lift overflow-hidden transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[2/3] overflow-hidden">
          {/* Book Cover */}
          <img 
            src={book.coverImage} 
            alt={language === 'en' ? book.title : book.titleAr} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {book.featured && (
              <span className="text-xs px-2 py-1 bg-accent/90 text-accent-foreground rounded">
                {t('featured')}
              </span>
            )}
            {book.newArrival && (
              <span className="text-xs px-2 py-1 bg-secondary/90 text-secondary-foreground rounded">
                {t('newArrivals')}
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-medium mb-1 line-clamp-2 group-hover:text-accent-foreground transition-colors duration-300">
            {language === 'en' ? book.title : book.titleAr}
          </h3>
          <p className="text-sm text-foreground/70 mb-auto">
            {language === 'en' ? book.author : book.authorAr}
          </p>
          
          <div className="mt-2 flex items-center justify-between">
            <span className="font-semibold">${book.price.toFixed(2)}</span>
            <div className="flex items-center">
              <span className="text-accent-foreground">★</span>
              <span className="text-sm ml-1">{book.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;