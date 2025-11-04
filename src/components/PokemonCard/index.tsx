import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PokemonDetail } from '../../types/pokemon';
import { styles } from './styles';
import { translateType } from '../../utils/translators';
import { getTypeColor } from '../../constants/pokemonTypes';

interface PokemonCardProps {
  pokemon: PokemonDetail;
  onPress: (pokemon: PokemonDetail) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPress }) => {
  const imageUrl = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(pokemon)}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((typeInfo) => (
          <View 
            key={typeInfo.slot} 
            style={[styles.typeBadge, { backgroundColor: getTypeColor(typeInfo.type.name) }]}
          >
            <Text style={styles.typeText}>
              {translateType(typeInfo.type.name)}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;