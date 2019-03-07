import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Style/Colors";

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.primaryColor
  },
  text: {
    fontSize: 18,
    color: colors.whiteColor
  }
});

export default Header;
