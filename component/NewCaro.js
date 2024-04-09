import * as React from 'react';
import { Dimensions, View, ImageBackground, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Pagination } from 'react-native-snap-carousel';
import { Assets, Image } from 'react-native-ui-lib';
import { Card, Text } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { Button } from 'react-native-rapi-ui';
import TestBackground from '../assets/background.svg';
import data from './data';
Assets.loadAssetsGroup('icons', {
	icon1: require('../assets/g1546.png'),
	icon2: require('../assets/bg3.png'),
});
function Index() {
	const [index, setIndex] = React.useState(0);
	const isCarousel = React.useRef(null);
	const width = Dimensions.get('window').width;
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={require('../assets/cropBg.png')}
				resizeMode='cover'
				style={styles.image}
			>
				<Carousel
					loop
					width={width}
					height={width}
					autoPlay={true}
					data={data}
					scrollAnimationDuration={5000}
					onSnapToItem={(index) => setIndex(index)}
					renderItem={({ item, index }) => (
						<View
							style={{
								flex: 1,
								padding: 10,
								justifyContent: 'flex-end',
							}}
						>
							<Text
								style={{
									textAlign: 'left',
									fontSize: scale(60),
									color: 'white',
									fontWeight: '700',
									padding: scale(15),
								}}
							>
								{item.title}
							</Text>
						</View>
					)}
					ref={isCarousel}
				/>
			</ImageBackground>
			<Text
				style={{
					textAlign: 'left',
					fontSize: scale(15),
					color: 'white',
					padding: scale(10),
					margin: scale(10),
				}}
			>
				Find an easy way to buy airplane ticket with just a few clicks in the
				application.
			</Text>
			<Pagination
				dotsLength={data.length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: 'white',
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				tappableDots={true}
			/>
			<Button
				text='Get Started'
				color='#12b3a8'
				onPress={() => console.log('Button tapped')}
				style={{ margin: 20, height: scale(40) }}
			/>
			{/* <TestBackground > */}
		</View>
	);
}

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#192031',
	},
});
