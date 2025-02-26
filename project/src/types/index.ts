export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  date: string;
}