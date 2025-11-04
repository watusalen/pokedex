# Pokédx 

Um aplicativo móvel desenvolvido em React Native para visualizar informações sobre Pokémons.

## O que é

Este app permite navegar por uma lista de Pokémons e visualizar detalhes sobre cada um deles. Os dados são obtidos através da PokéAPI, uma API pública gratuita com informações sobre todos os Pokémons.

## Funcionalidades

- **Lista de Pokémons**: Navegue por centenas de Pokémons em uma lista com scroll infinito
- **Detalhes do Pokémon**: Toque em qualquer Pokémon para ver informações detalhadas como:
  - Altura e peso
  - Tipos (Fogo, Água, Grama, etc.)
  - Estatísticas de combate (HP, Ataque, Defesa, etc.)
  - Habilidades especiais
- **Interface visual**: Cards coloridos baseados no tipo do Pokémon
- **Carregamento progressivo**: Os Pokémons são carregados conforme você navega

## Tecnologias

- React Native (Expo)
- TypeScript
- PokéAPI

## Como executar

```bash
# Instalar dependências
npm install

# Executar o app
npm start
```

Depois é só escanear o QR Code com o app Expo Go no seu celular ou executar em um emulador.