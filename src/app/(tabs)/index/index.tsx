import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ScrollView,
	Alert,
	Image,
	ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Tweet from "@components/Tweet";

const data = [
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "Naomy",
		post: "whats up people",
		attachment: [
			{
				uri: "https://i.pravatar.cc/300",
			},
		],
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "Ruth Rosario",
		post: "Que pa so!!!",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "Beautina",
		post: "Que pa so!!!",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "PimpC",
		post: "Relationship status = single",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
		like: "likeBtn",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
	{
		imageUrl: "https://i.pravatar.cc/300",
		title: "wannaBMe",
		post: "Did you hear that Cardi B new fire single out now?",
	},
];

export default function App() {
	return (
		<SafeAreaView>
			{/* Tweet is a componenet I created */}
			<FlatList data={data} renderItem={Tweet} />
		</SafeAreaView>
	);
}
