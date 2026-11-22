import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'dark' | 'light';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <nav aria-label="Breadcrumb" className="w-full py-2">
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors hover:underline ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Home className="h-3.5 w-3.5 shrink-0" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.url} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              {isLast ? (
                <span
                  aria-current="page"
                  className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                    isDark ? 'text-emerald-400' : 'text-emerald-700'
                  }`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className={`transition-colors hover:underline ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
