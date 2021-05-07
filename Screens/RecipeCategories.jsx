import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Colors from "../constants/Colors";
const categories = require("../data/RecipeCategories.js");
import RecipeCategory from "../components/RecipeCategory";

const RecipeCategories = ({ navigation }) => {
	const Categories = (item) => {
		return (
			<RecipeCategory
				item={item.item}
				onPress={() => {
					navigation.navigate("Recipes", { item: item.item });
				}}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerStyle}>Recipe Categories</Text>
			<FlatList
				data={categories}
				renderItem={Categories}
				keyExtractor={(item, index) => index.toString()}
				numColumns={2}
				style={{
					width: "100%",
					height: "100%",
				}}
				contentContainerStyle={{ alignItems: "center" }}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	headerStyle: {
		marginTop: 50,
		marginLeft: 20,
		fontSize: 40,
		color: Colors.primaryGreen,
		fontFamily: "Baskerville-SemiBoldItalic",
		marginBottom: 20,
	},
});

export default RecipeCategories;
