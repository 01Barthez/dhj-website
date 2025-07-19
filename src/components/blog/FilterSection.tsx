import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, X } from 'lucide-react';

interface FilterSectionProps {
  categories: string[];
  authors: string[];
  readTimes: string[];
  dateRanges: { min: string; max: string };
  selectedCategory: string;
  selectedAuthor: string;
  selectedReadTime: string;
  selectedDateRange: { start: string; end: string };
  showAdvancedFilters: boolean;
  setSelectedCategory: (category: string) => void;
  setSelectedAuthor: (author: string) => void;
  setSelectedReadTime: (time: string) => void;
  setSelectedDateRange: (range: { start: string; end: string } | ((prev: { start: string; end: string }) => { start: string; end: string })) => void;
  setShowAdvancedFilters: (show: boolean) => void;
  hasActiveFilters: () => boolean;
  clearAllFilters: () => void;
}

export function FilterSection({
  categories,
  authors,
  readTimes,
  dateRanges,
  selectedCategory,
  selectedAuthor,
  selectedReadTime,
  selectedDateRange,
  showAdvancedFilters,
  setSelectedCategory,
  setSelectedAuthor,
  setSelectedReadTime,
  setSelectedDateRange,
  setShowAdvancedFilters,
  hasActiveFilters,
  clearAllFilters
}: FilterSectionProps) {
  return (
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
                    onChange={(e) => setSelectedDateRange((prev: { start: string; end: string }) => ({ ...prev, start: e.target.value }))}
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
                    onChange={(e) => setSelectedDateRange((prev: { start: string; end: string }) => ({ ...prev, end: e.target.value }))}
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
  );
} 