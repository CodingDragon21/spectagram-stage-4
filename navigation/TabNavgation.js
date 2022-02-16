import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
      screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>{
              var iconName
              if(route.name === "Feed"){
                  iconName = focused
                  ? "book"
                  : "book-outline"       
              } else if (route.name === "CreatePost"){
                  iconName = focused ? "create" : "create-outline"
              }
              return <Ionicons name = {iconName} size = {size} color= {color}/>
          },
      })}
 tabBarOptions = {{
     activeTintColor: "orange",
     inactiveTintColor: 'gray',
 }}
        >
            <Tab.Scren name = "Feed" component={Feed}/>
            <Tab.Screen name = "CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#1e381c",
        height: "9%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(25),
        height: RFValue(25)
    }
});

export default BottomTabNavigator;