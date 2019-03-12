import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.text} </Text>
          <Icon name="logout" size={24} color={colors.primaryColor} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.whiteColor,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 18,
    color: colors.primaryColor,
    fontWeight: "bold"
  }
});

export default Header;
