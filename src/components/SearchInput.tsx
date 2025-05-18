'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface SearchInputProps {
  initialValue?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ initialValue = '' }) => {
  const [search, setSearch] = useState(initialValue);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearch(query);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      const params = new URLSearchParams(searchParams);
      params.set('query', search.trim());
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-8" data-testid="search-form">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden bg-white">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Pokémon (e.g., Pikachu)"
                className="flex-1 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search for Pokémon"
                data-testid="search-input"
            />
            
            <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-none rounded-r-md hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                data-testid="search-button"
            >
                Search
            </button>
        </div>
    </form>

  );
};

export default SearchInput;
