import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Assets, Image } from 'react-native-ui-lib';
// import CarouselCards from './CarouselCards';
import Index from './NewCaro';
Assets.loadAssetsGroup('icons', {
	icon1: require('../assets/g1546.png'),
	icon2: require('../assets/bg3.png'),
});
export default function Home() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<SafeAreaView style={styles.container}>
				<Image
					style={{
						alignSelf: 'center',
						height: scale(20),
						resizeMode: 'contain',
					}}
					assetName='icon1'
				/>
				<Index />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00072D',
	},
});
