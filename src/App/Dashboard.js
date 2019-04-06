import React, { Component } from "react";
import { View, StyleSheet, Image, Text, AsyncStorage } from "react-native";
import { colors } from "../Style/Colors";
import { wp, hp } from "../Style/responsive";
import Options from "../Compoents/Options";
import Header from "../Compoents/Header";
import { setFontSize } from "../Compoents/SetSize";

export class Dashboard extends Component {
  state = {
    data: {}
  };

  onOPD = () => {
    this.props.navigation.navigate("OPD_TabBar");
  };

  onIPD = () => {
    this.props.navigation.navigate("IPD_TabBar");
  };

  onDischarge = () => {
    this.props.navigation.navigate("Discharge");
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        const data = JSON.parse(value);
        // alert(data.DRNAME);
        this.setState({ data });
      } else {
        this.props.navigation.navigate("Auth");
      }
    } catch (error) {
      console.log("Error occured");
    }
  };

  render() {
    console.log("Dash");

    return (
      <View styles={styles.container}>
        <Header text="Dashboard" isLogoutIcon={true} />
        <View style={styles.profile}>
          <Image
            style={styles.imgStyle}
            source={require("../assets/doctor.png")}
          />
          <View style={styles.profileNameWrapper}>
            <Text style={styles.name}>
              {this.state.data.PRENM} {this.state.data.DRNAME}
            </Text>
            <Text style={styles.profession}>{this.state.data.DEPARTMENT}</Text>
          </View>
        </View>
        <View style={styles.dashboard}>
          <View style={styles.dashboardOptions}>
            <Options
              name="OPD"
              imgPath={require("../assets/OPD.png")}
              onClick={this.onOPD}
            />
            <Options
              name="IPD"
              imgPath={require("../assets/IPD.png")}
              onClick={this.onIPD}
            />
          </View>
          <View style={styles.dashboardOptions}>
            <Options
              name="SCHEDULE"
              onClick={() => alert("NOT IMPLEMENTED")}
              imgPath={require("../assets/Schedule.png")}
            />
            <Options
              name="DISCHARGE"
              onClick={this.onDischarge}
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
    borderRadius: 10,
    marginTop: 20
  },
  imgStyle: {
    width: wp("14%"), //16
    height: hp("8%") //10
  },
  profileNameWrapper: {
    marginHorizontal: 20,
    justifyContent: "center"
  },
  name: {
    fontSize: setFontSize("2.8", "2.4"), //2.8 //2.4
    color: colors.whiteColor,
    marginVertical: 6
  },
  profession: {
    fontSize: setFontSize("2.6", "2.2"), //2.6 //2.2
    color: colors.lightGrey,
    textAlign: "center"
  },
  dashboard: {
    justifyContent: "center",
    alignItems: "center"
  },
  dashboardOptions: {
    flexDirection: "row"
  }
});

export default Dashboard;
