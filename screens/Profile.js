import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Profile Screen</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        aliginSelf: "center",
        color: 'blue',
        marginTop: 30

    }
})