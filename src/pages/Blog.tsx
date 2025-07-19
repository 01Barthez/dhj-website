import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight, Search, X, Filter, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '@/utils/data/blogData';

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

  const hasActiveFilters = () => {
    return selectedCategory !== 'Tous' || 
           selectedAuthor !== 'Tous' || 
           selectedReadTime !== 'Tous' || 
           selectedDateRange.start || 
           selectedDateRange.end ||
           searchQuery.trim();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bgImage py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-german-red to-german-gold opacity-60 w-full h-full"></div>
        
        <div className="relative text-white w-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Notre Blog
            </h1>
            <p className="text-xl mb-8">
              Découvrez nos articles, conseils et actualités sur l'apprentissage de l'allemand
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">
                Rejoignez notre communauté
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Rechercher un article, un auteur, une catégorie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-german-red/20 focus:border-german-red transition-all duration-200 placeholder:text-foreground/50"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-foreground/10 rounded-full transition-colors duration-200"
                >
                  <X className="h-4 w-4 text-foreground/50" />
                </button>
              )}
            </div>
            
            {/* Search Results Summary */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-sm text-foreground/70"
              >
                {filteredPosts.length > 0 ? (
                  <span>
                    {filteredPosts.length} résultat{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''} pour "{searchQuery}"
                  </span>
                ) : (
                  <span className="text-foreground/60">
                    Aucun résultat trouvé pour "{searchQuery}"
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Basic Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Advanced Filters Toggle */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtres avancés
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-muted/50 rounded-lg p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Author Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Auteur</label>
                    <select
                      value={selectedAuthor}
                      onChange={(e) => setSelectedAuthor(e.target.value)}
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-german-red/20 focus:border-german-red"
                    >
                      <option value="Tous">Tous les auteurs</option>
                      {authors.map((author) => (
                        <option key={author} value={author}>{author}</option>
                      ))}
                    </select>
                  </div>

                  {/* Read Time Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Durée de lecture</label>
                    <select
                      value={selectedReadTime}
                      onChange={(e) => setSelectedReadTime(e.target.value)}
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-german-red/20 focus:border-german-red"
                    >
                      <option value="Tous">Toutes les durées</option>
                      {readTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date Range Start */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Date de début</label>
                    <input
                      type="date"
                      value={selectedDateRange.start}
                      onChange={(e) => setSelectedDateRange(prev => ({ ...prev, start: e.target.value }))}
                      min={dateRanges.min}
                      max={dateRanges.max}
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-german-red/20 focus:border-german-red"
                    />
                  </div>

                  {/* Date Range End */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Date de fin</label>
                    <input
                      type="date"
                      value={selectedDateRange.end}
                      onChange={(e) => setSelectedDateRange(prev => ({ ...prev, end: e.target.value }))}
                      min={dateRanges.min}
                      max={dateRanges.max}
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:border-german-red"
                    />
                  </div>
                </div>

                {/* Clear Filters Button */}
                {hasActiveFilters() && (
                  <div className="flex justify-center mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearAllFilters}
                      className="flex items-center gap-2"
                    >
                      <X className="h-4 w-4" />
                      Effacer tous les filtres
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              Articles Populaires
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-bold line-clamp-2 hover:text-german-red transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-foreground/70 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between pt-0">
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/blog/${post.id}`}>
                          Lire la suite
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                Tous les articles
              </h2>
              <div className="text-sm text-foreground/60">
                {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
              </div>
            </div>
            
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {currentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                        <div className="relative h-48">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">{post.category}</Badge>
                          </div>
                        </div>
                        <CardHeader className="flex-1">
                          <h3 className="text-lg font-bold line-clamp-2 hover:text-german-red transition-colors">
                            <Link to={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-foreground/70 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </CardHeader>
                        <CardFooter className="pt-0">
                          <div className="w-full">
                            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime}
                              </div>
                            </div>
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link to={`/blog/${post.id}`}>
                                Lire l'article
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Précédent
                      </Button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className="w-10 h-10"
                          >
                            {page}
                          </Button>
                        ))}
                      </div>

                      {/* Next Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1"
                      >
                        Suivant
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground/60 text-lg">
                  Aucun article trouvé pour cette catégorie.
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Card className="bg-gradient-to-r from-german-red/10 to-german-gold/10 border-german-red/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Prêt à commencer votre apprentissage ?
                </h3>
                <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
                  Rejoignez des centaines d'étudiants qui ont choisi DHJ pour apprendre l'allemand. 
                  Découvrez nos formations adaptées à tous les niveaux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/tarifs">
                      Voir nos formations
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}