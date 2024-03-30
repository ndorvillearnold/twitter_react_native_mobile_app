// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
			<Tabs.Screen
				name="index"
				options={{
					/*Header titles*/
					title: "header",
					headerRight: ({ color }) => (
						<Link href={"/modal"} asChild style={{ marginRight: 20 }}>
							<FontAwesome name="info-circle" size={24} color="black" />
						</Link>
					),
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
