import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { colors } from "../Style/Colors";
import { wp, hp } from "../Style/responsive";
import Options from "../Compoents/Options";
import Header from "../Compoents/Header";

export class Dashboard extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Header text="Dashboard" />
        <View style={styles.profile}>
          <Image
            style={styles.imgStyle}
            source={require("../assets/doctor.png")}
          />
          <View style={styles.profileNameWrapper}>
            <Text style={styles.name}>DR. Shailesh Kadam</Text>
            <Text style={styles.profession}>MEDICINE</Text>
          </View>
        </View>
        <View style={styles.dashboard}>
          <View style={styles.dashboardOptions}>
            <Options
              name="OPD"
              no={20}
              imgPath={require("../assets/OPD.png")}
            />
            <Options
              name="IPD"
              no={40}
              imgPath={require("../assets/IPD.png")}
            />
          </View>
          <View style={styles.dashboardOptions}>
            <Options
              name="SCHEDULE"
              no={20}
              imgPath={require("../assets/Schedule.png")}
            />
            <Options
              name="DISCHARGE"
              no={11}
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
    backgroundColor: "red",
    justifyContent: "space-between"
  },
  profile: {
    margin: 10,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    height: hp("24%"),
    justifyContent: "center",
    borderRadius: 10
  },
  imgStyle: {
    width: wp("16%"),
    height: hp("10%")
  },
  profileNameWrapper: {
    marginHorizontal: 20,
    justifyContent: "center"
  },
  name: {
    fontSize: hp("2.8%"),
    color: colors.whiteColor,
    marginVertical: 6
  },
  profession: {
    fontSize: hp("2.6%"),
    color: colors.lightGrey,
    textAlign: "center"
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
