import React, { Component } from "react";
import { Platform } from "react-native";
import { Text, View, StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "./PostCard.js"


export default class Feed extends Component{

  
  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View style = {styles.container}>
     <SafeAreaView style = {styles.droidSafeArea}/>
      <View style = {styles.appTitle}>
      <View style = {styles.appIcon}>
      <Image source = {require('../assetss/logo.png')} style = {styles.iconImage}/>

      </View>
      <View style = {styles.appTitleTextContainer}>
     <Text style = {styles.appTitleText}>Spectagram</Text>
      </View>
      </View>
      <View style = {styles.cardContainer}>
<FlatList
keyExtractor = {this.keyExtractor}
data = {posts}
renderItem= { this.renderItem}
/>
      </View>
      </View>
     
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: "black"
    },
    droidSaeArea:{
        marginTop: Platform.OS === "android" ? statusbar.currnetHeight: RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),

      },
      cardContainer: {
        flex: 0.85
      }
})