'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@/graphql/queries';
import { PokemonQueryResponse } from '@/types/pokemon';
import PokemonResult from '@/components/PokemonResult';
import NotFound from '@/components/NotFound';

interface PokemonPageProps {
  params: {
    name: string;
  };
}

export default function PokemonPage({ params }: PokemonPageProps) {
  const router = useRouter();
  const pokemonName = params.name;
  
  
  const decodedName = decodeURIComponent(pokemonName);

  
  const { loading, error, data } = useQuery<PokemonQueryResponse>(GET_POKEMON, {
    variables: { name: decodedName },

    fetchPolicy: 'cache-first',
  });

  
  useEffect(() => {
    router.push(`/?query=${encodeURIComponent(decodedName)}`);
  }, [decodedName, router]);

  return (
    <div className="container mx-auto px-4">
      
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading {decodedName}...</p>
        </div>
      )}
      
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
          <p>Error loading data. Redirecting to search page...</p>
        </div>
      )}
      
      
      {!loading && !error && (
        <>
          {data?.pokemon ? (
            <PokemonResult pokemon={data.pokemon} />
          ) : (
            <NotFound searchTerm={decodedName} />
          )}
        </>
      )}
    </div>
  );
}