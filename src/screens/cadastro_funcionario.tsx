import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button, IconButton, Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/cadastroStyle';
import theme from '../styles/theme';

const logo = require('../../assets/Metro logo.png');

export default function Cadastro() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [rg, setRg] = useState('');
	const [cpf, setCpf] = useState('');
	const [dataNascimento, setDataNascimento] = useState('');
	const [temFuncional, setTemFuncional] = React.useState(false);
	const [funcionl, setFuncional] = useState('');
	const [foto, setFoto] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar animated={true} style="auto" />
			<ScrollView style={styles.scroll}>
				<View style={styles.logoContainer}>
					<Image source={logo} style={styles.logo} />
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						label="Funcional"
						value={nome}
						onChangeText={text => setNome(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
					<TextInput
						label="Email"
						value={email}
						onChangeText={text => setEmail(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
					<TextInput
						label="RG"
						value={rg}
						onChangeText={text => setRg(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
					<TextInput
						label="CPF"
						value={cpf}
						onChangeText={text => setCpf(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
					<TextInput
						label="Data de Nascimento"
						value={nome}
						onChangeText={text => setFuncional(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
					<View style={styles.checkbox}>
						<Checkbox
							status={temFuncional ? 'checked' : 'unchecked'}
							onPress={() => {
								setTemFuncional(!temFuncional);
							}}
							theme={theme}
							color={theme.colors.accent}
						/>
						<Text style={styles.temFuncional}>Tem funcional</Text>
					</View>
					<TextInput
						label="Funcional"
						value={nome}
						onChangeText={text => setFuncional(text)}
						style={styles.input}
						mode="outlined"
						theme={theme}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
