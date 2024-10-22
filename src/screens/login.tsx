import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import theme from '../styles/theme';
import styles from '../styles/loginStyle';

const mascote = require('../../assets/Mascote-Metro-SP 3.png');
const logo = require('../../assets/Metro logo.png');

type RootStackParamList = {
	Login: undefined;
	Cadastro: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Login'
>;

interface LoginProps {
	navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }:LoginProps) {
	const [funcional, setFuncional] = useState('');
	const [senha, setSenha] = useState('');
	const [mostrarSenha, setMostrarSenha] = useState(false);

	const handleLogin = () => {
		console.log('Funcional:', funcional);
		console.log('Senha:', senha);
	};

	const handleMailto = (emailSubject: string) => {
		Linking.openURL(`mailto:exemplo@email.com?subject=${emailSubject}`);
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar animated={true} style="auto" />
			<View style={styles.logoContainer}>
				<Image source={logo} style={styles.logo} />
			</View>
			<View style={styles.mascotContainer}>
				<Image source={mascote} style={styles.mascote} />
			</View>
			<View style={styles.middleContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Entre na sua conta</Text>
					<Text style={styles.subtitle}>Bem vindo ao sistema!</Text>
				</View>
				<TextInput
					label="Funcional"
					value={funcional}
					onChangeText={text => setFuncional(text)}
					style={styles.input}
					mode="outlined"
					theme={theme}
				/>
				<TextInput
					label="Senha"
					value={senha}
					onChangeText={text => setSenha(text)}
					style={styles.input}
					secureTextEntry={!mostrarSenha}
					mode="outlined"
					right={
						<TextInput.Icon
							icon={mostrarSenha ? 'eye-off' : 'eye'}
							onPress={() => setMostrarSenha(!mostrarSenha)}
						/>
					}
					theme={theme}
				/>
				<TouchableOpacity onPress={() => handleMailto('Esqueci minha senha')}>
					<Text style={styles.forgotPw}>Esqueci minha senha</Text>
				</TouchableOpacity>
				<Button
					mode="contained"
					onPress={() => {
						handleLogin(); 
						navigation.navigate('Cadastro'); 
					}}
					style={styles.button}
					labelStyle={styles.buttonLabel}
				>
					Entrar
				</Button>
			</View>
			<View style={styles.bottomContainer}>
				<TouchableOpacity
					onPress={() => handleMailto('Política e termos de privacidade')}
				>
					<Text style={styles.link}>Política e termos de privacidade</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
