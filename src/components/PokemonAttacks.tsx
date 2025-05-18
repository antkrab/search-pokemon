'use client';

import React from 'react';
import { AttackSet } from '@/types/pokemon';

interface PokemonAttacksProps {
  attacks: AttackSet;
}

const PokemonAttacks: React.FC<PokemonAttacksProps> = ({ attacks }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Attacks</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2 text-blue-600">Fast Attacks</h4>
          {attacks.fast.length > 0 ? (
            <div className="space-y-2">
              {attacks.fast.map((attack, index) => (
                <div key={`fast-${index}`} className="border-b pb-2 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{attack.name}</span>
                    <span className={`pokemon-type type-${attack.type}`}>{attack.type}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Damage: {attack.damage}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No fast attacks available</p>
          )}
        </div>
        
        
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2 text-blue-600">Special Attacks</h4>
          {attacks.special.length > 0 ? (
            <div className="space-y-2">
              {attacks.special.map((attack, index) => (
                <div key={`special-${index}`} className="border-b pb-2 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{attack.name}</span>
                    <span className={`pokemon-type type-${attack.type}`}>{attack.type}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Damage: {attack.damage}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No special attacks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonAttacks;