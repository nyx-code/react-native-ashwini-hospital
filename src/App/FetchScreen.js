import React from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import { colors } from "../Style/Colors";
import SplashScreen from "react-native-splash-screen";

export default class FetchScreen extends React.Component {
  componentDidMount = async () => {
    SplashScreen.hide();
    try {
      const value = await AsyncStorage.getItem("loggedin-user");
      if (value !== null) {
        // alert("Data found")
        if (value === "doctor") {
          this.props.navigation.navigate("App");
        } else if (value === "houseman") {
          this.props.navigation.navigate("DoctorList");
        }
      } else {
        // alert("Data not found");
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
