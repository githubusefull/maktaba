
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import { useLanguage } from '../context/LanguageContext';
import { getFilteredBooks, getCategories, getCategoriesAr } from '../data/books';
import { Search, X } from 'lucide-react';

const Catalog = () => {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [newArrivalFilter, setNewArrivalFilter] = useState<boolean | null>(null);
  
  const categories = language === 'en' ? getCategories() : getCategoriesAr();
  
  // Initialize state from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const newArrival = searchParams.get('newArrival');
    const search = searchParams.get('search');
    
    if (category) setSelectedCategory(category);
    if (featured === 'true') setFeaturedFilter(true);
    if (newArrival === 'true') setNewArrivalFilter(true);
    if (search) setSearchTerm(search);
  }, [searchParams]);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCategory) params.set('category', selectedCategory);
    if (featuredFilter) params.set('featured', 'true');
    if (newArrivalFilter) params.set('newArrival', 'true');
    if (searchTerm) params.set('search', searchTerm);
    
    setSearchParams(params);
  }, [selectedCategory, featuredFilter, newArrivalFilter, searchTerm, setSearchParams]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search term is already being tracked in state and updating the URL
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setFeaturedFilter(null);
    setNewArrivalFilter(null);
    setSearchParams({});
  };
  
  const filteredBooks = getFilteredBooks(
    searchTerm,
    selectedCategory,
    featuredFilter,
    newArrivalFilter
  );
  
  return (
    <Layout>
      <div className="section-padding animate-fade-in">
        <div className="page-container">
          <h1 className="text-3xl md:text-4xl font-serif mb-8">{t('catalog')}</h1>
          
          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('search')}
                className="w-full px-4 py-3 pr-12 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground"
              >
                <Search size={20} />
              </button>
            </form>
            
            <div className="flex flex-wrap gap-4">
              {/* Category filters */}
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('popularCategories')}</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
                      className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                        category === selectedCategory
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary/50 text-foreground/80 hover:bg-secondary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Additional filters */}
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'en' ? 'More Filters' : 'المزيد من الفلاتر'}</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFeaturedFilter(featuredFilter ? null : true)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      featuredFilter
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary/50 text-foreground/80 hover:bg-secondary'
                    }`}
                  >
                    {t('featured')}
                  </button>
                  <button
                    onClick={() => setNewArrivalFilter(newArrivalFilter ? null : true)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      newArrivalFilter
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary/50 text-foreground/80 hover:bg-secondary'
                    }`}
                  >
                    {t('newArrivals')}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Active filters summary */}
            {(searchTerm || selectedCategory || featuredFilter || newArrivalFilter) && (
              <div className="flex items-center justify-between pt-2">
                <div className="text-sm">
                  <span className="text-foreground/70">
                    {language === 'en' 
                      ? `Showing ${filteredBooks.length} results` 
                      : `عرض ${filteredBooks.length} نتائج`}
                  </span>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm flex items-center gap-1 text-accent-foreground hover:underline"
                >
                  <X size={16} />
                  {language === 'en' ? 'Clear all filters' : 'مسح جميع الفلاتر'}
                </button>
              </div>
            )}
          </div>
          
          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg opacity-70">
                {language === 'en' 
                  ? 'No books found matching your criteria.' 
                  : 'لم يتم العثور على كتب تطابق معاييرك.'}
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 btn-outlined"
              >
                {language === 'en' ? 'Clear filters' : 'مسح الفلاتر'}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;