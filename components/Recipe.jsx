import React from "react";
import { Divider, Button } from "react-native-elements";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import Fonts from "../constants/Fonts";

const height = Dimensions.get("window").height;

const Recipe = (props) => {
	return (
		<View style={{ paddingLeft: 20, paddingRight: 20 }}>
			<TouchableOpacity
				style={styles.categoryContainer}
				activeOpacity={0.7}
				onPress={props.onPress}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
					}}
				>
					<Image
						style={styles.image}
						source={{
							uri: props.item.image,
						}}
					></Image>
					<View
						style={{
							flex: 1,
							// backgroundColor: Colors.primaryGreen,
							borderBottomRightRadius: 10,
							borderTopRightRadius: 10,
							alignItems: "center",
							justifyContent: "center",
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
							{props.item.time}
						</Text>
						<Divider
							// backgroundColor="white"
							style={{
								marginTop: 5,
								marginBottom: 5,
								height: 1.3,
							}}
						/>
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
							{props.item.calories} cal
						</Text>

						<Divider
							// backgroundColor="white"
							style={{
								marginTop: 5,
								marginBottom: 5,
								height: 1.3,
							}}
						/>

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
							{props.item.presentIngridients}/
							{props.item.totalIngridients}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 10,
					marginBottom: 8,
				}}
			>
				<Text style={styles.nameText}>{props.item.name}</Text>

				<TouchableOpacity
					activeOpacity={0.7}
					style={{
						shadowOffset: { width: 0, height: 0 },
						shadowColor: "gray",
						shadowOpacity: 0.3,
						shadowRadius: 5,
						backgroundColor: Colors.primaryGreen,
						width: 34,
						height: 34,

						borderRadius: 17,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: 25,
							fontFamily: Fonts.primarySemiBold,
							alignItems: "center",
							textAlignVertical: "center",
							color: "white",
						}}
					>
						+
					</Text>
				</TouchableOpacity>
			</View>

			<Divider
				style={{
					marginTop: 10,
					marginBottom: 30,
					height: 1.3,
					backgroundColor: "#cfcfcf",
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	categoryContainer: {
		shadowOffset: { width: 0, height: 0 },
		shadowColor: "gray",
		shadowOpacity: 0.5,
		shadowRadius: 5,
		backgroundColor: "white",
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		// width: "85%",
		height: 200,
		// paddingLeft: 12,
		// marginLeft: 12,
	},
	image: {
		height: 200,
		width: "75%",
	},
	nameText: {
		fontSize: 24,

		color: Colors.primaryBlack,
		fontFamily: "Baskerville-SemiBold",
	},
});

export default Recipe;
