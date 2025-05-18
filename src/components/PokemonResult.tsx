'use client';

import React from 'react';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemon';
import PokemonAttacks from './PokemonAttacks';
import PokemonEvolutions from './PokemonEvolutions';

interface PokemonResultProps {
  pokemon: Pokemon;
}

const PokemonResult: React.FC<PokemonResultProps> = ({ pokemon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6" data-testid="pokemon-result">
      <div className="flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/4 flex justify-center">
            <Image
            src={pokemon.image}
            alt={pokemon.name}

            width={96} 
            height={96}
            className="object-contain"
            priority
            />
        </div>

        
        {/* Pokemon Details */}
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{pokemon.name}</h2>
            <span className="text-gray-500">#{pokemon.number}</span>
          </div>
          
          <div className="mt-2 flex flex-wrap">
            {pokemon.types.map((type) => (
              <span key={type} className={`pokemon-type type-${type}`}>
                {type}
              </span>
            ))}
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <span className="text-gray-600">Classification:</span>
              <span className="ml-2 font-medium">{pokemon.classification}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Max CP:</span>
              <span className="ml-2 font-medium">{pokemon.maxCP}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Max HP:</span>
              <span className="ml-2 font-medium">{pokemon.maxHP}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Flee Rate:</span>
              <span className="ml-2 font-medium">{pokemon.fleeRate}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Height:</span>
              <span className="ml-2 font-medium">
                {pokemon.height.minimum} - {pokemon.height.maximum}
              </span>
            </div>
            
            <div>
              <span className="text-gray-600">Weight:</span>
              <span className="ml-2 font-medium">
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="mb-2">
              <span className="text-gray-600 font-medium">Resistant to:</span>
              <div className="flex flex-wrap mt-1">
                {pokemon.resistant.map((type) => (
                  <span key={`resist-${type}`} className={`pokemon-type type-${type}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-gray-600 font-medium">Weaknesses:</span>
              <div className="flex flex-wrap mt-1">
                {pokemon.weaknesses.map((type) => (
                  <span key={`weak-${type}`} className={`pokemon-type type-${type}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PokemonAttacks attacks={pokemon.attacks} />
      
      
      <PokemonEvolutions evolutions={pokemon.evolutions} />
    </div>
  );
};

export default PokemonResult;