import React, { Component } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Style/Colors";
import { withNavigation } from "react-navigation";
import { wp, hp } from "../Style/responsive";

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
        <Text style={styles.no}>({no})</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: 10,
    alignItems: "center",
    width: wp("50%"),
    height: hp("26%"),
    borderWidth: 0.4,
    borderColor: colors.lightGrey
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
