import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";


export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    <TouchableOpacity style={styles.container} onPress = { () =>
      this.props.navigation.navigate("PostScreen", {post: this.props.post})
    } >
<View style = {styles.container}>
<View style = {styles.cardContainer}>
<View style = {styles.authorContainer}>
<View style = {styles.authorImageContainer}>
<Image
source = {require("../assetss/profile_img.png")}
style= {styles.profileImage}>   
</Image>
</View>
<View style = {styles.authorNameContainer}>
    <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
</View>
</View>
<Image source = {require("../assetss/post.jpeg")}
style = {styles.postImage}
></Image>
<View>
    <Text style = {styles.captionContainer}>
        {this.props.post.caption}
    </Text>
</View>
<View style = {styles.actionContainer}>
<View style = {styles.likeButton}>
<Ionicons name = {"heart"} size = {RFValue(30)} color = {"white"}/>
<Text style = {styles.likekText}>12k</Text>

</View>
</View>
</View>
</View>
</TouchableOpacity>




  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "blue",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "white"
  },
  descriptionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});