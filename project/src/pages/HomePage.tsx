import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArticleCard } from '../components/ArticleCard';

export const HomePage = () => {
  const { t } = useTranslation();
  const { articles } = useStore();
  const featuredArticles = articles.filter(article => article.featured);

  // Group latest articles by category
  const categories = ['Technology', 'Politics', 'Culture'];
  const articlesByCategory = categories.reduce((acc, category) => {
    acc[category] = articles
      .filter(article => article.category === category && !article.featured)
      .slice(0, 3); // Show only 3 articles per category
    return acc;
  }, {} as Record<string, typeof articles>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('common.featured')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map(article => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </section>

      {/* Articles by Category */}
      {categories.map(category => (
        <section key={category} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t(`nav.${category.toLowerCase()}`)}
            </h2>
            <Link
              to={`/category/${category.toLowerCase()}`}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
            >
              {t('common.viewAll')} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesByCategory[category].map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};