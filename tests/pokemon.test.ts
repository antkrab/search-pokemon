import { bulbasaurMock, charmanderMock, squirtleMock } from './mocks/pokemonMocks';

describe('Pokemon Type Tests', () => {
  const hasPokemonType = (types: string[], typeToCheck: string): boolean => {
    return types.includes(typeToCheck);
  };

  describe('Bulbasaur', () => {
    it('should be a Grass type Pokemon', () => {
      expect(hasPokemonType(bulbasaurMock.types, 'Grass')).toBe(true);
    });

    it('should be a Poison type Pokemon', () => {
      expect(hasPokemonType(bulbasaurMock.types, 'Poison')).toBe(true);
    });

    it('should not be a Fire type Pokemon', () => {
      expect(hasPokemonType(bulbasaurMock.types, 'Fire')).toBe(false);
    });

    it('should not be a Water type Pokemon', () => {
      expect(hasPokemonType(bulbasaurMock.types, 'Water')).toBe(false);
    });
  });

  describe('Charmander', () => {
    it('should be a Fire type Pokemon', () => {
      expect(hasPokemonType(charmanderMock.types, 'Fire')).toBe(true);
    });

    it('should not be a Grass type Pokemon', () => {
      expect(hasPokemonType(charmanderMock.types, 'Grass')).toBe(false);
    });

    it('should not be a Water type Pokemon', () => {
      expect(hasPokemonType(charmanderMock.types, 'Water')).toBe(false);
    });
  });

  describe('Squirtle', () => {
    it('should be a Water type Pokemon', () => {
      expect(hasPokemonType(squirtleMock.types, 'Water')).toBe(true);
    });

    it('should not be a Fire type Pokemon', () => {
      expect(hasPokemonType(squirtleMock.types, 'Fire')).toBe(false);
    });

    it('should not be a Grass type Pokemon', () => {
      expect(hasPokemonType(squirtleMock.types, 'Grass')).toBe(false);
    });
  });

  describe('Pokemon Type Validation', () => {
    it('should verify that Bulbasaur is a Grass and Poison type', () => {
      expect(bulbasaurMock.types).toEqual(['Grass', 'Poison']);
      expect(bulbasaurMock.types).toHaveLength(2);
    });

    it('should verify that Charmander is only a Fire type', () => {
      expect(charmanderMock.types).toEqual(['Fire']);
      expect(charmanderMock.types).toHaveLength(1);
    });

    it('should verify that Squirtle is only a Water type', () => {
      expect(squirtleMock.types).toEqual(['Water']);
      expect(squirtleMock.types).toHaveLength(1);
    });
  });
});