import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Search, Sun, Moon } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode, setSearchQuery } = useStore();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate('/search');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NewsHub</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.home')}
            </Link>
            <Link to="/category/technology" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.technology')}
            </Link>
            <Link to="/category/politics" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.politics')}
            </Link>
            <Link to="/category/culture" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.culture')}
            </Link>

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t('nav.search')}
                className="pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <button type="submit" className="absolute left-3 top-2.5">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {t('nav.home')}
            </Link>
            <Link to="/category/technology" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {t('nav.technology')}
            </Link>
            <Link to="/category/politics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {t('nav.politics')}
            </Link>
            <Link to="/category/culture" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {t('nav.culture')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};