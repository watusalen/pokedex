import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { PokemonDetail } from '../../types/pokemon';
import { translateType, translateStatName, translateAbilityName } from '../../utils/translators';
import { getTypeColor } from '../../constants/pokemonTypes';
import { styles } from './styles';

interface PokemonDetailScreenProps {
  pokemon: PokemonDetail | null;
  onClose: () => void;
}

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = ({ pokemon, onClose }) => {
  if (!pokemon) {
    return null;
  }

  const imageUrl = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;

  return (
    <View style={styles.detailScreenContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
      
      <Text style={styles.detailName}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      
      <Image source={{ uri: imageUrl }} style={styles.detailImage} />
      
      <View style={styles.basicInfoContainer}>
        <Text style={styles.detailText}>ID: #{pokemon.id}</Text>
        <Text style={styles.detailText}>Altura: {pokemon.height / 10} m</Text>
        <Text style={styles.detailText}>Peso: {pokemon.weight / 10} kg</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.detailSectionTitle}>Tipos:</Text>
        <View style={styles.detailTypesContainer}>
          {pokemon.types.map((typeInfo) => (
            <View 
              key={typeInfo.slot} 
              style={[styles.detailTypeBadge, { backgroundColor: getTypeColor(typeInfo.type.name) }]}
            >
              <Text style={styles.detailTypeText}>
                {translateType(typeInfo.type.name)}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.detailSectionTitle}>Atributos:</Text>
        {pokemon.stats.map((statInfo) => (
          <Text key={statInfo.stat.name} style={styles.detailText}>
            {translateStatName(statInfo.stat.name)}: {statInfo.base_stat}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.detailSectionTitle}>Habilidades:</Text>
        {pokemon.abilities.map((abilityInfo) => (
          <Text key={abilityInfo.ability.name} style={styles.detailText}>
            {translateAbilityName(abilityInfo.ability.name)}
            {abilityInfo.is_hidden && ' (oculta)'}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PokemonDetailScreen;