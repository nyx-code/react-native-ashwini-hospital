import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { colors } from "../Style/Colors";
import Options from "../Compoents/Options";

export class Dashboard extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.dayWrapper}>
          <Text style={styles.day}>MONDAY, 8 MARCH</Text>
        </View>
        <View style={styles.profile}>
          <Image
            style={styles.imgStyle}
            source={require("../assets/doctor.png")}
          />
          <View style={styles.profileNameWrapper}>
            <Text style={styles.name}>DR. Nilesh Kadam</Text>
            <Text style={styles.profession}>MEDICINE</Text>
          </View>
        </View>
        <View style={styles.dashboard}>
          <View style={styles.dashboardOptions}>
            <Options name="OPD" imgPath={require("../assets/OPD.png")} />
            <Options name="IPD" imgPath={require("../assets/IPD.png")} />
          </View>
          <View style={styles.dashboardOptions}>
            <Options
              name="SCHEDULE"
              imgPath={require("../assets/Schedule.png")}
            />
            <Options
              name="DISCHARGE"
              imgPath={require("../assets/Discharge.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },
  dayWrapper: {
    height: 40,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: "sans-serif"
  },
  day: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold"
  },
  profile: {
    margin: 10,
    flexDirection: "row",
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    padding: 10,
    marginBottom: 20
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  profileNameWrapper: {
    marginHorizontal: 20,
    justifyContent: "center"
  },
  name: {
    fontSize: 18,
    color: colors.whiteColor
  },
  profession: {
    fontSize: 16,
    color: colors.lightGrey
  },
  dashboard: {
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center"
  },
  dashboardOptions: {
    flexDirection: "row"
  }
});

export default Dashboard;
