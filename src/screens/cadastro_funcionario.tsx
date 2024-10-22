import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/loginStyle';



export default function Cadastro() {

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>Cadastro</Text>
			</View>
		</SafeAreaView>
	);
}
