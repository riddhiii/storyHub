import React from "react";
import { StyleSheet,Image, Text, View } from "react-native";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WriteStory from "./screens/WriteStory";
import ReadStory from "./screens/ReadStory";
import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: WriteStory },
  ReadStory: { screen: ReadStory }
});
const AppNavigator =createSwitchNavigator({
  Login:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});