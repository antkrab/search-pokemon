'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Evolution } from '@/types/pokemon';

interface PokemonEvolutionsProps {
  evolutions: Evolution[] | null;
}

const PokemonEvolutions: React.FC<PokemonEvolutionsProps> = ({ evolutions }) => {
  const searchParams = useSearchParams();
  
  if (!evolutions || evolutions.length === 0) {
    return null;
  }
  

  const createQueryString = (name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('query', name);
    return params.toString();
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Evolutions</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {evolutions.map((evolution) => (
          <Link 
            href={`/?${createQueryString(evolution.name)}`}
            key={evolution.id}
            className="bg-white shadow rounded-lg p-4 transition hover:shadow-lg hover:scale-105 flex flex-col items-center w-48"
          >
            <div className="w-full md:w-1/4 flex justify-center">
                        <Image
                        src={evolution.image}
                        alt={evolution.name}
            
                        width={96} 
                        height={96}
                        className="object-contain"
                        priority
                        />
                    </div>
            <span className="font-medium text-center">{evolution.name}</span>
            <span className="text-gray-500 text-sm">#{evolution.number}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonEvolutions;