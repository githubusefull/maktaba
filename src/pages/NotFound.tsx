
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { language } = useLanguage();
  
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 animate-fade-in">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-serif mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            {language === 'en' ? 'Page Not Found' : 'الصفحة غير موجودة'}
          </h2>
          <p className="mb-8 opacity-80">
            {language === 'en' 
              ? 'The page you are looking for might have been removed or is temporarily unavailable.' 
              : 'الصفحة التي تبحث عنها قد تمت إزالتها أو غير متاحة مؤقتًا.'}
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            {language === 'en' ? 'Return to Homepage' : 'العودة إلى الصفحة الرئيسية'}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
