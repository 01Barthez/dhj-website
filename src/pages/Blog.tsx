import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '@/utils/data/blogData';
import { BlogHero } from '@/components/blog/BlogHero';
import { SearchSection } from '@/components/blog/SearchSection';
import { FilterSection } from '@/components/blog/FilterSection';
import { BlogPostsSection } from '@/components/blog/BlogPostsSection';
import { BlogCTASection } from '@/components/blog/BlogCTASection';

// Convertir l'objet blogPosts en tableau
const blogPostsArray = Object.values(blogPosts);

// Fonctions pour extraire les valeurs uniques des données
const getUniqueCategories = () => {
  const categories = [...new Set(blogPostsArray.map(post => post.category))];
  return ['Tous', ...categories];
};

const getUniqueAuthors = () => {
  return [...new Set(blogPostsArray.map(post => post.author))];
};

const getUniqueReadTimes = () => {
  return [...new Set(blogPostsArray.map(post => post.readTime))];
};

const getDateRanges = () => {
  const dates = blogPostsArray.map(post => new Date(post.date));
  const minDate = new Date(Math.min(...dates.map(date => date.getTime())));
  const maxDate = new Date(Math.max(...dates.map(date => date.getTime())));
  
  return {
    min: minDate.toISOString().split('T')[0],
    max: maxDate.toISOString().split('T')[0]
  };
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedAuthor, setSelectedAuthor] = useState('Tous');
  const [selectedReadTime, setSelectedReadTime] = useState('Tous');
  const [selectedDateRange, setSelectedDateRange] = useState({ start: '', end: '' });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(blogPostsArray);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const postsPerPage = 6;

  // Extraire les valeurs uniques
  const categories = getUniqueCategories();
  const authors = getUniqueAuthors();
  const readTimes = getUniqueReadTimes();
  const dateRanges = getDateRanges();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = blogPostsArray;
    
    // Filter by category
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by author
    if (selectedAuthor !== 'Tous') {
      filtered = filtered.filter(post => post.author === selectedAuthor);
    }
    
    // Filter by read time
    if (selectedReadTime !== 'Tous') {
      filtered = filtered.filter(post => post.readTime === selectedReadTime);
    }
    
    // Filter by date range
    if (selectedDateRange.start || selectedDateRange.end) {
      filtered = filtered.filter(post => {
        const postDate = new Date(post.date);
        const startDate = selectedDateRange.start ? new Date(selectedDateRange.start) : null;
        const endDate = selectedDateRange.end ? new Date(selectedDateRange.end) : null;
        
        if (startDate && endDate) {
          return postDate >= startDate && postDate <= endDate;
        } else if (startDate) {
          return postDate >= startDate;
        } else if (endDate) {
          return postDate <= endDate;
        }
        return true;
      });
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, selectedAuthor, selectedReadTime, selectedDateRange, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const clearAllFilters = () => {
    setSelectedCategory('Tous');
    setSelectedAuthor('Tous');
    setSelectedReadTime('Tous');
    setSelectedDateRange({ start: '', end: '' });
    setSearchQuery('');
  };

  const hasActiveFilters = (): boolean => {
    return selectedCategory !== 'Tous' || 
           selectedAuthor !== 'Tous' || 
           selectedReadTime !== 'Tous' || 
           selectedDateRange.start !== '' || 
           selectedDateRange.end !== '' ||
           searchQuery.trim() !== '';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BlogHero />
      <SearchSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredPosts={filteredPosts}
        clearSearch={clearSearch}
      />
      <FilterSection
        categories={categories}
        authors={authors}
        readTimes={readTimes}
        dateRanges={dateRanges}
        selectedCategory={selectedCategory}
        selectedAuthor={selectedAuthor}
        selectedReadTime={selectedReadTime}
        selectedDateRange={selectedDateRange}
        showAdvancedFilters={showAdvancedFilters}
        setSelectedCategory={setSelectedCategory}
        setSelectedAuthor={setSelectedAuthor}
        setSelectedReadTime={setSelectedReadTime}
        setSelectedDateRange={setSelectedDateRange}
        setShowAdvancedFilters={setShowAdvancedFilters}
        hasActiveFilters={hasActiveFilters}
        clearAllFilters={clearAllFilters}
      />
      <BlogPostsSection
        filteredPosts={filteredPosts}
        currentPosts={currentPosts}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      <BlogCTASection />
    </div>
  );
}