import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { wp, hp } from "../Style/responsive";

const Quote = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image style={styles.img} source={require("../assets/logo.png")} />
      <Text style={styles.quote}>QUALITY CARE WITH A HUMAN TOUCH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center"
  },
  img: {
    width: wp("18%"),
    height: hp("18%")
  },
  quote: {
    fontSize: hp("2%"), //2.4
    fontWeight: "bold",
    color: "#333"
  }
});

export default Quote;
