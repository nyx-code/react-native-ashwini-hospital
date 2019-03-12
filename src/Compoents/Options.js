import React, { Component } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Style/Colors";
import { withNavigation } from "react-navigation";
import { wp, hp } from "../Style/responsive";

class Options extends Component {
  onClick = () => {
    this.props.navigation.navigate("ListOptions");
  };

  render() {
    const { name, imgPath, no } = this.props;
    console.log("options render");
    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.container}
        onPressIn={this.onClick}
      >
        <Image style={styles.img} source={imgPath} />
        <Text style={styles.name}> {name} </Text>
        <Text style={styles.no}>({no})</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: 10,
    elevation: 1,
    alignItems: "center",
    width: wp("50%"),
    height: hp("26%"),
    borderWidth: 0.4,
    borderColor: "grey"
  },
  img: {
    width: wp("14%"),
    height: hp("12%"),
    marginVertical: 4,
    resizeMode: "contain"
  },
  name: {
    fontSize: hp("2.6%"),
    color: "#333",
    fontWeight: "bold",
    marginVertical: 4
  },
  no: {
    fontSize: hp("2.4%"),
    fontWeight: "bold"
  }
});

export default withNavigation(Options);
