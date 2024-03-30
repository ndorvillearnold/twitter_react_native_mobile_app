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
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
const Tweet = ({ item }) => (
	<Link asChild href="(tabs)/index/details">
		<View style={styles.itemContainer}>
			<Image style={styles.profileImage} source={{ uri: item.imageUrl }} />

			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text>{item.post}</Text>

				{/* Loop to loop through items, for attachement? means does this propert exist*/}
				{item.attachment?.map((attachment, attachmentIndex) => (
					<Image
						style={styles.postImage}
						key={attachmentIndex}
						source={{ uri: attachment.uri }}
					/>
				))}

				<View
					style={{
						flexDirection: "row",
						padding: 10,
						justifyContent: "space-evenly",
					}}
				>
					<EvilIcons name="comment" size={24} color="black" />
					<EvilIcons name="retweet" size={24} color="black" />
					<Feather name="thumbs-up" size={20} color="black" />
					<EvilIcons name="chart" size={24} color="black" />
				</View>
			</View>
			<Icon
				name="more-horiz"
				size={24}
				color="black"
				style={styles.iconContainer}
			/>
		</View>
	</Link>
);

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	textContainer: {
		flex: 1,
	},
	title: {
		fontWeight: "bold",
	},
	iconContainer: {
		flexDirection: "row",
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 16,
	},
	postImage: {
		width: "50%",
		aspectRatio: 1,
		borderRadius: 60,
	},
});
export default Tweet;
