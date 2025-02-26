import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            technology: 'Technology',
            politics: 'Politics',
            culture: 'Culture',
            search: 'Search...'
          },
          common: {
            readMore: 'Read More',
            featured: 'Featured',
            latest: 'Latest News',
            comments: 'Comments',
            addComment: 'Add Comment',
            darkMode: 'Dark Mode',
            viewAll: 'View All'
          },
          search: {
            results: 'Search Results for',
            noResults: 'No articles found matching your search.'
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            technology: 'Tecnología',
            politics: 'Política',
            culture: 'Cultura',
            search: 'Buscar...'
          },
          common: {
            readMore: 'Leer Más',
            featured: 'Destacados',
            latest: 'Últimas Noticias',
            comments: 'Comentarios',
            addComment: 'Añadir Comentario',
            darkMode: 'Modo Oscuro',
            viewAll: 'Ver Todo'
          },
          search: {
            results: 'Resultados de búsqueda para',
            noResults: 'No se encontraron artículos que coincidan con tu búsqueda.'
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;