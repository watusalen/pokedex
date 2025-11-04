import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { usePokemons } from '../../hooks/usePokemons';
import PokemonCard from '../../components/PokemonCard';
import PokemonDetailScreen from '../../components/PokemonDetailScreen';
import Loading from '../../components/Loading';
import { PokemonDetail } from '../../types/pokemon';
import { styles } from './styles';

const HomeScreen: React.FC = () => {
  const { pokemons, loading, error, fetchNextPage, hasMore } = usePokemons();
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);

  const handleCardPress = useCallback((pokemon: PokemonDetail) => {
    setSelectedPokemon(pokemon);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPokemon(null);
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <Loading message="Carregando mais pokémons..." size="small" />;
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <FlatList
        data={pokemons}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} onPress={handleCardPress} />
        )}
        onEndReached={() => {
          if (!loading && hasMore) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
      {selectedPokemon && (
        <View style={styles.overlay}>
          <PokemonDetailScreen pokemon={selectedPokemon} onClose={handleCloseDetail} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;