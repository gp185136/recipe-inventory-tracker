import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const RecipeCategory = (props) => {
	return (
		<TouchableOpacity
			style={styles.categoryContainer}
			activeOpacity={0.7}
			onPress={props.onPress}
		>
			<View>
				<Image
					style={styles.image}
					source={{
						uri: props.item.image,
					}}
				></Image>
				<Text style={styles.categoryText}>{props.item.category}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	categoryContainer: {
		shadowOffset: { width: 0, height: 0 },
		shadowColor: "gray",
		shadowOpacity: 0.5,
		shadowRadius: 3,
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: 180,
		height: 145,
		marginRight: 12,
		marginLeft: 12,
		marginBottom: 30,
	},
	image: {
		height: "82%",
		width: "100%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	categoryText: {
		fontSize: 16,
		marginTop: 5,
		marginLeft: 7,
		color: Colors.primaryBlack,
		fontFamily: "Baskerville-SemiBold",
	},
});

export default RecipeCategory;
