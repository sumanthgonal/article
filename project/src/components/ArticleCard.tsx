import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured }) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${featured ? 'col-span-2 row-span-2' : ''}`}>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
          {article.category}
        </span>
        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
          {article.title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {article.author} • {new Date(article.date).toLocaleDateString()}
            </span>
          </div>
          <Link
            to={`/article/${article.id}`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 text-sm font-medium"
          >
            {t('common.readMore')} →
          </Link>
        </div>
      </div>
    </div>
  );
};