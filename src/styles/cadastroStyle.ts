import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingVertical: 16,
		paddingHorizontal: 25,
		backgroundColor: 'white',
	},
	scroll: {
		flexGrow: 1,
	},
	logoContainer: {},
	logo: {
		width: 1000.49 / 7.5,
		height: 263.51 / 7.5,
		alignSelf: 'center',
	},
	inputContainer: {},
	input: {
		marginBottom: 16,
		fontFamily: 'Helvetica-Regular',
	},
	checkbox: {
		marginBottom: 10,
		flexDirection: 'row',
	},
	temFuncional: {
		fontSize: 16,
        top:5,
        color:'57545b',
		fontFamily: 'Helvetica-Regular',
	},
});

export default styles;
