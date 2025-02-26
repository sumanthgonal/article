import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  const { darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;