import React from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import { colors } from "../Style/Colors";
import SplashScreen from "react-native-splash-screen";

export default class FetchScreen extends React.Component {
  componentDidMount = async () => {
    SplashScreen.hide();
    try {
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        // alert("Data found")
        this.props.navigation.navigate("App");
      } else {
        // alert("Data not found")
        this.props.navigation.navigate("Auth");
      }
    } catch (error) {
      console.log("Error occured");
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.whiteColor
        }}
      >
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }
}
