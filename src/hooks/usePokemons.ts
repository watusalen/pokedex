import { useState, useEffect } from 'react';
import api from '../services/api';
import { PokemonListResponse, PokemonResult, PokemonDetail } from '../types/pokemon';

interface UsePokemonsHook {
  pokemons: PokemonDetail[];
  loading: boolean;
  error: string | null;
  fetchNextPage: () => void;
  hasMore: boolean;
}

const ITEMS_PER_PAGE = 20;

export const usePokemons = (): UsePokemonsHook => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPokemonDetails = async (results: PokemonResult[]): Promise<PokemonDetail[]> => {
    const detailsPromises = results.map((pokemon) => 
      api.get<PokemonDetail>(pokemon.url).then(r => r.data)
    );
    return Promise.all(detailsPromises);
  };

  const fetchPokemons = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.get<PokemonListResponse>(
        `/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );
      
      const newPokemonsDetails = await fetchPokemonDetails(response.data.results);

      setPokemons(prev => [...prev, ...newPokemonsDetails]);
      setOffset(prev => prev + ITEMS_PER_PAGE);
      setHasMore(response.data.next !== null);
      
    } catch (err) {
      console.error('Failed to fetch pokemons:', err);
      setError('Falha ao carregar os pokémons.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchNextPage = () => {
    fetchPokemons();
  };

  return { pokemons, loading, error, fetchNextPage, hasMore };
};