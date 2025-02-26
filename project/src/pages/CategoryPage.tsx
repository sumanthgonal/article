import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { ArticleCard } from '../components/ArticleCard';

export const CategoryPage = () => {
  const { category } = useParams();
  const { t } = useTranslation();
  const { articles } = useStore();

  const categoryArticles = articles.filter(
    article => article.category.toLowerCase() === category?.toLowerCase()
  );

  const featuredArticles = categoryArticles.filter(article => article.featured);
  const regularArticles = categoryArticles.filter(article => !article.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 capitalize">
        {t(`nav.${category?.toLowerCase()}`)}
      </h1>

      {featuredArticles.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t('common.featured')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('common.latest')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};