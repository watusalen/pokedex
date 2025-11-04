import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Carregando...', 
  size = 'large', 
  color = '#0066cc' 
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

export default Loading;