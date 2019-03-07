import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Style/Colors";

class Options extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.img} source={this.props.imgPath} />
        <Text style={styles.name}> {this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: 20,
    margin: 20,
    elevation: 4,
    alignItems: "center",
    width: 160,
    height: 160
  },
  img: {
    width: 80,
    height: 80,
    marginVertical: 6
  },
  name: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    marginVertical: 8
  }
});

export default Options;
