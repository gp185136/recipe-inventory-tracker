import React from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Fonts from "../constants/Fonts";
import { Ionicons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { Divider, Button } from "react-native-elements";

const RecipeDetails = ({ route, navigation }) => {
	const { item } = route.params;
	console.log(item);
	return (
		<View style={styles.container}>
			<Text style={styles.headerStyle}>Cooking Time</Text>
			<ScrollView>
				<View
					style={{
						paddingLeft: 30,
						paddingRight: 30,
					}}
				>
					<Image
						style={styles.image}
						source={{
							uri: item.image,
						}}
					/>
					<Text style={styles.nameStyle}>{item.name}</Text>
					<Text style={styles.descriptionStyle}>
						These homestyle dish is flash-cooked to perfection,
						tossed in a garlic butter drizzle, and topped with green
						onion and fresh parsley for a juicy appetizer or main
						dish meal.
					</Text>
					<Text
						style={{
							marginTop: 9,
							fontSize: 15,
							color: Colors.primaryBlack,
							fontFamily: Fonts.primarySemiBold,
							color: Colors.primaryDarkGreen,
						}}
					>
						Read More
					</Text>
					<View
						style={{
							flexDirection: "row",
							marginTop: 26,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<SimpleLineIcons
								name="clock"
								// color={"white"}
								color={Colors.primaryDarkGreen}
								size={30}
							/>
							<Text
								style={{
									paddingTop: 5,
									fontFamily: Fonts.primarySemiBold,
									// color: "white",
									color: Colors.primaryDarkGreen,
									fontSize: 16,
								}}
							>
								{item.time}
							</Text>
						</View>

						<View
							// backgroundColor="white"
							style={{
								// marginTop: 5,
								marginBottom: 5,
								height: 50,
								borderLeftWidth: 0.5,
								borderColor: Colors.primaryGray,
								marginLeft: 20,
								marginRight: 20,
							}}
						/>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<FontAwesome5
								name="heartbeat"
								// color={"white"}
								color={Colors.primaryDarkGreen}
								size={30}
							/>
							<Text
								style={{
									paddingTop: 5,
									fontFamily: Fonts.primarySemiBold,
									// color: "white",
									color: Colors.primaryDarkGreen,
									fontSize: 16,
								}}
							>
								{item.calories} cal
							</Text>
						</View>

						<View
							style={{
								marginBottom: 5,
								height: 50,
								borderLeftWidth: 0.5,
								borderColor: Colors.primaryGray,
								marginLeft: 20,
								marginRight: 20,
							}}
						/>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Ionicons
								name="md-cart-outline"
								// color={"white"}
								color={Colors.primaryDarkGreen}
								size={30}
							/>
							<Text
								style={{
									paddingTop: 5,
									fontFamily: Fonts.primarySemiBold,
									color: "white",
									color: Colors.primaryDarkGreen,
									fontSize: 16,
								}}
							>
								{item.presentIngridients}/
								{item.totalIngridients}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
	},
	headerStyle: {
		marginTop: 40,
		marginLeft: 40,
		fontSize: 40,
		color: Colors.primaryGreen,
		fontFamily: "Baskerville-SemiBoldItalic",
		marginBottom: 20,
	},
	image: {
		height: 200,
		borderRadius: 20,
	},
	nameStyle: {
		fontSize: 28,
		color: Colors.primaryBlack,
		fontFamily: Fonts.primarySemiBold,
		paddingTop: 10,
	},
	descriptionStyle: {
		paddingTop: 10,
		fontSize: 18,
		color: Colors.primaryBlack,
		fontFamily: Fonts.primary,
	},
});

export default RecipeDetails;
