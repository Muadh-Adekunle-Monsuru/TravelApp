import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

const CarouselCardItem = ({ item, index }) => {
	return (
		<>
			<Card style={{ width: ITEM_WIDTH }}>
				<Card.Title title='Card Title' subtitle='Card Subtitle' />
				<Card.Content>
					<Text variant='titleLarge'>{item.title}</Text>
					<Text variant='bodyMedium'>{item.body}</Text>
				</Card.Content>
				<Card.Cover source={{ uri: item.imgUrl }} />
			</Card>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 8,
		width: 200,
		paddingBottom: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	image: {
		width: 200,
		height: 300,
	},
	header: {
		color: '#222',
		fontSize: 28,
		fontWeight: 'bold',
		paddingLeft: 20,
		paddingTop: 20,
	},
	body: {
		color: '#222',
		fontSize: 18,
		paddingLeft: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
});

export default CarouselCardItem;
