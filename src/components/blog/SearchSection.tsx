import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPosts: any[];
  clearSearch: () => void;
}

export function SearchSection({ searchQuery, setSearchQuery, filteredPosts, clearSearch }: SearchSectionProps) {
  return (
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
  );
} 