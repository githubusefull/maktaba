
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, Search, ShoppingBag, X, Globe, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 px-16 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="page-container  flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-green-400' : ''}`}>
            {t('home')}
          </Link>
          <Link to="/catalog" className={`nav-link ${isActive('/catalog') ? 'active-nav-link' : ''}`}>
            {t('catalog')}
          </Link>
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Language dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors duration-300 focus:outline-none">
              <Globe size={20} />
              <span className="ml-1">
                {language === 'en' ? 'English' : language === 'ar' ? 'العربية' : 'Français'}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover/95 backdrop-blur-sm border border-border shadow-md">
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setLanguage('en')}
              >
                <span>English</span>
                {language === 'en' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setLanguage('ar')}
              >
                <span>العربية</span>
                {language === 'ar' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setLanguage('fr')}
              >
                <span>Français</span>
                {language === 'fr' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/cart" className="relative text-foreground/80 hover:text-foreground transition-colors duration-300">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Mobile language dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground/80 hover:text-foreground transition-colors duration-300 focus:outline-none">
              <Globe size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover/95 backdrop-blur-sm border border-border shadow-md">
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setLanguage('en')}
              >
                <span>English</span>
                {language === 'en' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setLanguage('ar')}
              >
                <span>العربية</span>
                {language === 'ar' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setLanguage('fr')}
              >
                <span>Français</span>
                {language === 'fr' && <Check size={16} className="ml-2 text-accent" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/cart" className="relative text-foreground/80 hover:text-foreground transition-colors duration-300">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full glass-morphism py-4 animate-fade-in">
          <div className="page-container">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search')}
                className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full glass-morphism py-4 animate-fade-in">
          <nav className="page-container flex flex-col space-y-4">
            <Link to="/" className={`py-2 ${isActive('/') ? 'text-foreground font-medium' : 'text-foreground/80'}`}>
              {t('home')}
            </Link>
            <Link to="/catalog" className={`py-2 ${isActive('/catalog') ? 'text-foreground font-medium' : 'text-foreground/80'}`}>
              {t('catalog')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
