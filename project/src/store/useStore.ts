import { create } from 'zustand';
import { Article, Comment } from '../types';

interface Store {
  articles: Article[];
  comments: Comment[];
  darkMode: boolean;
  searchQuery: string;
  setDarkMode: (dark: boolean) => void;
  addComment: (comment: Comment) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<Store>((set) => ({
  articles: [
    {
      id: '1',
      title: 'The Future of AI in Journalism',
      excerpt: 'How artificial intelligence is reshaping the news industry and changing the way we consume information.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Technology',
      author: 'John Doe',
      date: '2024-03-15',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Breakthrough',
      excerpt: 'Scientists achieve major milestone in quantum computing, opening new possibilities for technological advancement.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Technology',
      author: 'Sarah Chen',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      featured: true
    },
    {
      id: '3',
      title: 'The Rise of Sustainable Tech',
      excerpt: 'How tech companies are leading the charge in environmental sustainability and green innovation.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Technology',
      author: 'Michael Green',
      date: '2024-03-13',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e'
    },
    {
      id: '4',
      title: 'Global Climate Summit Results',
      excerpt: 'World leaders reach historic agreement on climate change measures at latest summit.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Politics',
      author: 'Emma Wilson',
      date: '2024-03-15',
      imageUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee',
      featured: true
    },
    {
      id: '5',
      title: 'New International Trade Policies',
      excerpt: 'Major economies announce significant changes to international trade agreements.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Politics',
      author: 'Robert Martinez',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9'
    },
    {
      id: '6',
      title: 'Electoral Reform Debate',
      excerpt: 'Lawmakers propose comprehensive electoral system changes sparking nationwide discussion.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Politics',
      author: 'Lisa Thompson',
      date: '2024-03-13',
      imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c'
    },
    {
      id: '7',
      title: 'Renaissance Art Exhibition Opens',
      excerpt: 'Major museum unveils unprecedented collection of Renaissance masterpieces.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Culture',
      author: 'Isabella Romano',
      date: '2024-03-15',
      imageUrl: 'https://images.unsplash.com/photo-1544333323-ce21dde64f74',
      featured: true
    },
    {
      id: '8',
      title: 'Global Music Festival Returns',
      excerpt: 'International music festival announces comeback with groundbreaking lineup.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Culture',
      author: 'James Lee',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea'
    },
    {
      id: '9',
      title: 'Indigenous Art Movement',
      excerpt: 'Contemporary indigenous artists reshape modern art landscape with innovative expressions.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Culture',
      author: 'Maya Johnson',
      date: '2024-03-13',
      imageUrl: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714'
    }
  ],
  comments: [],
  darkMode: false,
  searchQuery: '',
  setDarkMode: (dark) => set({ darkMode: dark }),
  addComment: (comment) => set((state) => ({
    comments: [...state.comments, comment]
  })),
  setSearchQuery: (query) => set({ searchQuery: query })
}));