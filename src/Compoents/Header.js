import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { withNavigation } from "react-navigation";

class Header extends Component {
  onBack = () => {
    this.props.navigation.pop(1);
  };

  onLogout = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    const { isBack, text } = this.props;
    return (
      <View>
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
          <Icon
            onPress={this.onLogout}
            name="logout"
            size={24}
            color={colors.primaryColor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.whiteColor,
    elevation: 3,
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    color: colors.primaryColor,
    fontWeight: "bold",
    flex: 1
  }
});

export default withNavigation(Header);
