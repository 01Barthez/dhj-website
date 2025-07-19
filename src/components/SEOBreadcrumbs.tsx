import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const SEOBreadcrumbs: React.FC<SEOBreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-background border-b py-3" aria-label="Breadcrumb">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-foreground/70">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
              {item.href && !item.current ? (
                <Link 
                  to={item.href} 
                  className="flex items-center hover:text-german-red transition-colors"
                  aria-label={item.name}
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.name}
                </Link>
              ) : (
                <span 
                  className={`${item.current ? 'text-foreground font-medium' : ''} truncate`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}; 