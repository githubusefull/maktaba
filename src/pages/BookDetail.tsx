
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import { useLanguage } from '../context/LanguageContext';
import { getBookById, getFilteredBooks } from '../data/books';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  
  const book = id ? getBookById(id) : undefined;
  
  // Get books from the same categories for the related books section
  const relatedBooks = book 
    ? getFilteredBooks("", book.categories[0]).filter(b => b.id !== book.id).slice(0, 4)
    : [];
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!book) {
    return (
      <Layout>
        <div className="section-padding animate-fade-in">
          <div className="page-container text-center">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">
              {language === 'en' ? 'Book Not Found' : 'الكتاب غير موجود'}
            </h1>
            <p className="mb-8">
              {language === 'en' 
                ? 'The book you are looking for might have been removed or is temporarily unavailable.' 
                : 'الكتاب الذي تبحث عنه قد تمت إزالته أو غير متاح مؤقتًا.'}
            </p>
            <Link to="/catalog" className="btn-primary">
              {language === 'en' ? 'Return to Catalog' : 'العودة إلى الكتالوج'}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Book details section */}
      <div className="section-padding animate-fade-in">
        <div className="page-container">
          <Link 
            to="/catalog" 
            className="inline-flex items-center gap-2 mb-8 text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            {language === 'en' ? 'Back to Catalog' : 'العودة إلى الكتالوج'}
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Book Cover */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="aspect-[2/3] max-w-md mx-auto relative">
                  <div className="absolute inset-0 -rotate-3 bg-accent/20 rounded-lg"></div>
                  <img 
                    src={book.coverImage} 
                    alt={language === 'en' ? book.title : book.titleAr}
                    className="relative rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Book Info */}
            <div>
              <div className="mb-2 opacity-80">
                <span className="uppercase tracking-wider text-sm">
                  {language === 'en' 
                    ? book.categories.join(' • ') 
                    : book.categoriesAr.join(' • ')}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-serif">
                {language === 'en' ? book.title : book.titleAr}
              </h1>
              
              <p className="mb-4 text-lg">
                {language === 'en' ? book.author : book.authorAr}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold">${book.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <span className="text-accent-foreground">{'★'.repeat(Math.floor(book.rating))}</span>
                  <span className="text-accent-foreground/30">{'★'.repeat(5 - Math.floor(book.rating))}</span>
                  <span className="ml-2 text-sm">({book.rating})</span>
                </div>
              </div>
              
              <p className="mb-8 opacity-80">
                {language === 'en' ? book.description : book.descriptionAr}
              </p>
              
              {/* Add to cart controls */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center border border-border rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground/70 hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-border">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground/70 hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button className="btn-primary flex items-center gap-2">
                  <ShoppingBag size={16} />
                  {t('addToCart')}
                </button>
              </div>
              
              {/* Book details table */}
              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-xl font-medium">{t('details')}</h3>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-foreground/70">{t('publisher')}</div>
                  <div>{language === 'en' ? book.publisher : book.publisherAr}</div>
                  
                  <div className="text-foreground/70">{t('publishDate')}</div>
                  <div>{new Date(book.publishDate).toLocaleDateString(
                    language === 'en' ? 'en-US' : 'ar-EG',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}</div>
                  
                  <div className="text-foreground/70">{t('pages')}</div>
                  <div>{book.pages}</div>
                  
                  <div className="text-foreground/70">{t('language')}</div>
                  <div>{language === 'en' ? book.language : book.languageAr}</div>
                  
                  <div className="text-foreground/70">{t('isbn')}</div>
                  <div>{book.isbn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related books section */}
      {relatedBooks.length > 0 && (
        <div className="section-padding bg-secondary/30 animate-fade-in">
          <div className="page-container">
            <h2 className="text-2xl md:text-3xl font-serif mb-8">{t('relatedBooks')}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BookDetail;