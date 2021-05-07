import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Recipe from "../components/Recipe";
const recipes = require("../data/Recipes");

const RecipesByCategory = ({ route, navigation }) => {
	const { item } = route.params;
	const category = item.category.split(" ")[0];

	const Recipes = () => {
		return recipes.map((item) => (
			<Recipe
				key={item.id}
				item={item}
				onPress={() => navigation.navigate("Cooking Time", { item })}
			/>
		));
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerStyle}>{category} Selection</Text>
			<Text style={styles.introText}>Discover something delicious</Text>
			<View style={{}}>
				<ScrollView
					style={{ paddingTop: 8 }}
					showsVerticalScrollIndicator={false}
				>
					<Recipes />
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "#ffffff",
	},
	headerStyle: {
		marginTop: 40,
		marginLeft: 40,
		fontSize: 40,
		color: Colors.primaryGreen,
		fontFamily: "Baskerville-SemiBoldItalic",
		marginBottom: 10,
	},
	introText: {
		fontFamily: Fonts.primary,
		fontSize: 18,
		color: Colors.primaryGray,
		marginLeft: 20,
		marginBottom: 15,
	},
});

export default RecipesByCategory;
