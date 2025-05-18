'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@/graphql/queries';
import { PokemonQueryResponse } from '@/types/pokemon';
import SearchInput from '@/components/SearchInput';
import PokemonResult from '@/components/PokemonResult';
import NotFound from '@/components/NotFound';

export default function ClientHome() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [searchTerm, setSearchTerm] = useState(query || '');

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  const { loading, error, data } = useQuery<PokemonQueryResponse>(GET_POKEMON, {
    variables: { name: searchTerm },
    skip: !searchTerm,
    fetchPolicy: 'cache-first',
  });

  return (
    <div className="container mx-auto px-4">
      <SearchInput initialValue={searchTerm} />
      
      {loading && searchTerm && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Searching for {searchTerm}...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
          <p>Error loading data. Please try again later.</p>
        </div>
      )}
      
      {!loading && !error && searchTerm && (
        <>
          {data?.pokemon ? (
            <PokemonResult pokemon={data.pokemon} />
          ) : (
            searchTerm && <NotFound searchTerm={searchTerm} />
          )}
        </>
      )}
      
      {!searchTerm && (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600">
            Enter a Pokemon name above to start searching!
          </h2>
          <p className="mt-4 text-gray-500">
            Try searching for popular Pokemon like Pikachu, Charizard, or Eevee.
          </p>
        </div>
      )}
    </div>
  );
}