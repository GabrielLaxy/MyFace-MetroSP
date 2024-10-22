import { MD3LightTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
    fontFamily:"Helvetica-Regular",
};

const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({config: fontConfig}),
    roundness: 7,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#6C6C6C', //cinza claro
      accent: '#001789', //azul
      background: '#F9F9F9', //branco
      text:'#FFFFFF',
    },
};

export default theme;
