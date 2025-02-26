import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { ArticleCard } from '../components/ArticleCard';

export const SearchPage = () => {
  const { t } = useTranslation();
  const { articles, searchQuery } = useStore();

  const filteredArticles = articles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower) ||
      article.author.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {t('search.results')} "{searchQuery}"
      </h2>
      {filteredArticles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t('search.noResults')}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};