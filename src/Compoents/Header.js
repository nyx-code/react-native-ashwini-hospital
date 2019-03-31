import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  AsyncStorage
} from "react-native";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { withNavigation } from "react-navigation";

class Header extends Component {
  onBack = () => {
    this.props.navigation.pop(1);
  };

  onLogout = () => {
    AsyncStorage.removeItem("user-data")
      .then(() => {
        AsyncStorage.removeItem("loggedin-user")
          .then(() => {
            this.props.navigation.navigate("Login");
          })
          .catch(e => console.log("Error occured"));
      })
      .catch(e => console.log("Error occured"));
  };

  render() {
    const { isBack, text, isLogoutIcon } = this.props;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {isBack && (
            <Icon
              onPress={this.onBack}
              name="arrow-left"
              size={24}
              color={colors.primaryColor}
            />
          )}
          <Text style={[styles.text, isBack && { marginLeft: 12 }]}>
            {text}
          </Text>
          {isLogoutIcon && (
            <Icon
              onPress={this.onLogout}
              name="logout"
              size={24}
              color={colors.primaryColor}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.whiteColor,
    elevation: 3,
    flexDirection: "row",
    shadowColor: "#333",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3
  },
  text: {
    fontSize: 18,
    color: colors.primaryColor,
    fontWeight: "bold",
    flex: 1
  }
});

export default withNavigation(Header);
