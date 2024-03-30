// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
			<Tabs.Screen
				name="./timeline/index.tsx"
				options={{
					/*Header titles*/
					title: "Home",

					/*tab bar icon name */
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="cog" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="test"
				options={{
					title: "test",
					tabBarIcon: ({ color }) => (
						<FontAwesome name="glass" size={28} color="black" />
					),
				}}
			/>
		</Tabs>
	);
}
