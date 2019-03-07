import React, { Component } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Style/Colors";
import { withNavigation } from "react-navigation";

class Options extends Component {
  onClick = () => {
    // alert("Hii");
    this.props.navigation.navigate("ListOptions");
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onClick}>
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
    height: 160,
    borderRadius: 8
  },
  img: {
    width: 80,
    height: 80,
    marginVertical: 6
  },
  name: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginVertical: 8
  }
});

export default withNavigation(Options);
