import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Pagination } from 'react-native-snap-carousel';
function Index() {
	const [index, setIndex] = React.useState(0);
	const isCarousel = React.useRef(null);
	const width = Dimensions.get('window').width;
	return (
		<View style={{ flex: 1 }}>
			<Carousel
				loop
				width={width}
				height={width / 2}
				autoPlay={true}
				data={[...new Array(6).keys()]}
				scrollAnimationDuration={5000}
				onSnapToItem={(index) => setIndex(index)}
				renderItem={({ index }) => (
					<View
						style={{
							flex: 1,
							borderWidth: 1,
							justifyContent: 'center',
						}}
					>
						<Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
					</View>
				)}
				ref={isCarousel}
			/>
			<Pagination
				dotsLength={5}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.92)',
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				tappableDots={true}
			/>
		</View>
	);
}

export default Index;
