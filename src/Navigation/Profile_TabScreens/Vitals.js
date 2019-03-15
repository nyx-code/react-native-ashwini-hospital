import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { wp, hp } from "../../Style/responsive";
import { colors } from "../../Style/Colors";

class Vitals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <Image
            style={styles.img}
            source={require("../../assets/blood-pressure.png")}
          />
          <TextInput
            placeholder="Blood Pressure"
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Image
            style={styles.img}
            source={require("../../assets/pulse.png")}
          />
          <TextInput
            placeholder="Pulse"
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Image
            style={styles.img}
            source={require("../../assets/oxygen.png")}
          />
          <TextInput
            placeholder="Blood OxygenSat"
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Image
            style={styles.img}
            source={require("../../assets/temperature.png")}
          />
          <TextInput
            placeholder="Temperature"
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  textInput: {
    borderBottomWidth: 0.6,
    width: wp("60%"),
    borderBottomColor: colors.primaryColor,
    marginHorizontal: 10
  },
  text: {
    fontSize: hp("2.2%"),
    color: "#333"
  },
  buttonWrapper: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    width: wp("80%"),
    margin: 10,
    alignItems: "center"
  },
  buttonText: {
    fontSize: hp("2.4%"),
    color: colors.whiteColor
  },
  img: {
    width: wp("6%"),
    height: hp("6%"),
    resizeMode: "contain",
    marginTop: 8
  }
});

export default Vitals;
