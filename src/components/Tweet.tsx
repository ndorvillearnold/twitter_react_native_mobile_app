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
					<EvilIcons
						style={styles.itemContainer}
						name="comment"
						size={22}
						color="gray"
					/>
					<EvilIcons
						style={styles.itemContainer}
						name="retweet"
						size={22}
						color="gray"
					/>
					<Feather
						style={styles.itemContainer}
						name="thumbs-up"
						size={18}
						color="gray"
					/>
					<EvilIcons
						style={styles.itemContainer}
						name="chart"
						size={22}
						color="gray"
					/>
					<EvilIcons
						style={styles.itemContainer}
						name="share-apple"
						size={22}
						color="black"
					/>
				</View>
			</View>
			<Icon name="more-horiz" size={24} color="black" style={styles.sticky} />
		</View>
	</Link>
);

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: "row",
		// alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: "lightgrey",
		backgroundColor: "white",
	},
	textContainer: {
		flex: 1,
	},
	title: {
		fontWeight: "600",
	},
	iconContainer: {
		flexDirection: "row",
	},
	sticky: {
		// alignSelf: "flex-end",
		// position: "absolute",
		right: "auto",
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 16,
	},
	postImage: {

		// aspectRatio: 16 / 9: it specifies that the width of the element should be 16 units and the height should be 9 units. 
		//This is commonly used to maintain a consistent aspect ratio for elements like images or video players.
		width: "100%",
		aspectRatio: 16 / 9,
		marginVertical: 10, //This line sets the vertical margin (space) around an element to 10 units
		borderRadius: 15, //This line sets the radius of the corners of an element's border to 15 units. It creates rounded corners for the element
	},
});
export default Tweet;
