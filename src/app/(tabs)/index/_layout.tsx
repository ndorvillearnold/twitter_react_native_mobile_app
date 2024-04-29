import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack>
{/* two screens one called index and the other modal  defined using the Stack.Screen*/}
{/* info in docs:  https://reactnative.dev/docs/navigation */}
			
			<Stack.Screen
				name="index"
				options={{
					// Hide the header for all other routes.
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="modal"
				options={{
					// Set the presentation mode to modal for our modal route.
					presentation: "modal",
				}}
			/>
		</Stack>
	);
}
