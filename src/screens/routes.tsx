import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Cadastro from './cadastro_funcionario';

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Cadastro"
				component={Cadastro}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
