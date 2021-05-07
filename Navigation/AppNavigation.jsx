import React from "react";
import { moduleName } from "react-native";
import RecipeCategories from "../Screens/RecipeCategories";
import RecipeDetails from "../Screens/RecipeDetails";
import RecipesByCategory from "../Screens/RecipesByCategory";
import Favorites from "../Screens/Favorites";
import Inventory from "../Screens/Inventory";
import GroceryList from "../Screens/GroceryList";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RecipesStack = () => {
	return (
		<Stack.Navigator headerMode="screen">
			<Stack.Screen
				name="Categories"
				component={RecipeCategories}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Recipes"
				component={RecipesByCategory}
				options={{
					headerBackTitleVisible: false,
					title: false,
					headerTintColor: Colors.primaryBlack,
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="Cooking Time"
				component={RecipeDetails}
				options={{
					headerBackTitleVisible: false,
					title: false,
					headerTintColor: Colors.primaryBlack,
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
};

const FavoritesStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Favorites" component={Favorites} />
		</Stack.Navigator>
	);
};

const InventoryStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Inventory" component={Inventory} />
		</Stack.Navigator>
	);
};

const GroceryListStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Shopping List" component={GroceryList} />
		</Stack.Navigator>
	);
};

const MainNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName="Recipes"
			tabBarOptions={{
				activeTintColor: Colors.primaryGreen,
				inactiveTintColor: Colors.primaryGray,
				labelStyle: { fontSize: 11 },
			}}
		>
			<Tab.Screen
				name="Inventory"
				component={InventoryStack}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="cube" size={30} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="My Shopping"
				component={GroceryListStack}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="list" size={30} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Recipes"
				component={RecipesStack}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="bowl" size={30} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={FavoritesStack}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="heart" size={30} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainNavigation;
