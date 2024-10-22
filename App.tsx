import { useState, useCallback, useEffect } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/screens/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded, error] = useFonts({
		'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
		'Helvetica-Regular': require('./assets/fonts/Helvetica.ttf'),
		'Helvetica-Light': require('./assets/fonts/Helvetica-Light.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<NavigationContainer>
			<PaperProvider>
				<Routes />
			</PaperProvider>
		</NavigationContainer>
	);
}
