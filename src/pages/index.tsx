
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import FeaturedBook from '../components/FeaturedBook';
import { useLanguage } from '../context/LanguageContext';
import { getFilteredBooks, getCategories, getCategoriesAr } from '../data/books';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  
  const featuredBooks = getFilteredBooks("", "", true);
  const newArrivals = getFilteredBooks("", "", null, true);
  const categories = language === 'en' ? getCategories() : getCategoriesAr();

  // Animation for sections as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isVisible = (id: string) => visibleSections.includes(id);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className={`min-h-[90vh] flex items-center justify-center bg-primary/30 ${isVisible('hero') ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="page-container grid md:grid-cols-2 gap-8 items-center py-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              {language === 'en' 
                ? 'Discover the Wisdom of Arabic Literature' 
                : 'اكتشف حكمة الأدب العربي'}
            </h1>
            <p className="text-lg opacity-80">
              {language === 'en' 
                ? 'Explore our curated collection of philosophical works, poetry, and literature from the Islamic golden age to modern times.' 
                : 'استكشف مجموعتنا المنسقة من الأعمال الفلسفية والشعر والأدب من العصر الذهبي الإسلامي إلى العصر الحديث.'}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-primary">
                {t('catalog')}
              </Link>
              <Link to="/catalog?featured=true" className="btn-outlined">
                {t('featured')}
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg transform translate-y-8">
                  <img 
                    src={newArrivals[0]?.coverImage} 
                    alt={language === 'en' ? newArrivals[0]?.title : newArrivals[0]?.titleAr} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={featuredBooks[1]?.coverImage} 
                    alt={language === 'en' ? featuredBooks[1]?.title : featuredBooks[1]?.titleAr} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 transform translate-y-12">
                <div className="h-56 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={featuredBooks[0]?.coverImage} 
                    alt={language === 'en' ? featuredBooks[0]?.title : featuredBooks[0]?.titleAr} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={newArrivals[1]?.coverImage} 
                    alt={language === 'en' ? newArrivals[1]?.title : newArrivals[1]?.titleAr} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Books Section */}
      <section id="featured" className={`section-padding ${isVisible('featured') ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="page-container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('featured')}</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          {  featuredBooks.length > 0 && <FeaturedBook book={featuredBooks[0]} /> }

          <div className="mt-16 text-right">
            <Link 
              to="/catalog?featured=true" 
              className="inline-flex items-center gap-2 text-accent-foreground hover:gap-3 transition-all duration-300"
            >
              {language === 'en' ? 'View all featured books' : 'عرض جميع الكتب المميزة'}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section id="new-arrivals" className={`section-padding bg-secondary/30 ${isVisible('new-arrivals') ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="page-container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('newArrivals')}</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {  newArrivals.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))  }
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/catalog?newArrival=true" 
              className="btn-primary inline-flex items-center gap-2"
            >
              {language === 'en' ? 'Browse all new arrivals' : 'تصفح جميع الكتب الجديدة'}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className={`section-padding ${isVisible('categories') ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="page-container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('popularCategories')}</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category, index) => (
              <Link 
                key={index} 
                to={`/catalog?category=${category}`}
                className="card-border hover-lift group p-8 flex flex-col items-center justify-center text-center min-h-[180px]"
              >
                <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-accent-foreground transition-colors duration-300">
                  {category}
                </h3>
                <div className="w-8 h-0.5 bg-accent group-hover:w-16 transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter" className={`section-padding bg-accent/10 ${isVisible('newsletter') ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="page-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            {language === 'en' 
              ? 'Subscribe to Our Newsletter' 
              : 'اشترك في نشرتنا الإخبارية'}
          </h2>
          <p className="mb-8 opacity-80">
            {language === 'en' 
              ? 'Stay updated with our newest arrivals, exclusive offers, and literary insights.' 
              : 'ابق على اطلاع بأحدث وصولاتنا والعروض الحصرية والرؤى الأدبية.'}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={language === 'en' ? 'Your email address' : 'عنوان بريدك الإلكتروني'} 
              className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap"
            >
              {language === 'en' ? 'Subscribe' : 'اشترك'}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;