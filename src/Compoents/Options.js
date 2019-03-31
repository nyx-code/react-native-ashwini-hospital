import React, { Component } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Style/Colors";
import { withNavigation } from "react-navigation";
import { wp, hp } from "../Style/responsive";
import { setFontSize } from "../Compoents/SetSize";

class Options extends Component {
  render() {
    const { name, imgPath, no } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={this.props.onClick}
      >
        <Image style={styles.img} source={imgPath} />
        <Text style={styles.name}> {name} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    alignItems: "center",
    width: wp("45%"),
    margin: 8,
    elevation: 0.8,
    justifyContent: "center",
    height: hp("25%"),
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.3
  },
  img: {
    width: wp("14%"),
    height: hp("10%"),
    marginVertical: 4,
    resizeMode: "contain"
  },
  name: {
    fontSize: setFontSize("2.6", "2.2"), //2.6 //2.2
    color: "#333",
    fontWeight: "bold",
    marginVertical: 4
  },
  no: {
    fontSize: setFontSize("2.4", "2"), //2.4 //2
    fontWeight: "bold",
    color: "grey"
  }
});

export default withNavigation(Options);
