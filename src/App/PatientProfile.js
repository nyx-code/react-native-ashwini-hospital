import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import { wp, hp } from "../Style/responsive";
import TabBar from "../Navigation/Profile_TabBar";

class PatientProfile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  setImage(gender) {
    if (gender === "MALE") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={this.setImage("FEMALE")} />
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                PIN : <Text style={styles.subtitle}> 52900</Text>
              </Text>
              <Text style={styles.title}>
                VOUCHER : <Text style={styles.subtitle}> 200</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                NAME :{" "}
                <Text style={styles.subtitle}> Vrushali Nitin Mandge</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                AGE : <Text style={styles.subtitle}> 20 Y</Text>
              </Text>
              <Text style={styles.title}>
                GENDER : <Text style={styles.subtitle}> FEMALE</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                TYPE : <Text style={styles.subtitle}> OPD</Text>
              </Text>
              <Text style={styles.title}>
                DR : <Text style={styles.subtitle}> Shaileh Nitin kadam</Text>
              </Text>
            </View>
          </View>
        </View>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileWrapper: {
    backgroundColor: colors.primaryColor,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    height: hp("22%"),
    marginBottom: 10,
    overflow: "hidden"
  },
  imgContainer: {
    justifyContent: "center"
  },
  img: {
    width: wp("16%"),
    height: hp("10%")
  },
  infoWrapper: {
    justifyContent: "center"
  },
  nameSection: {
    flexDirection: "row",
    padding: 4,
    marginHorizontal: 10
  },
  title: {
    color: colors.whiteColor,
    fontSize: hp("2.2%"),
    marginHorizontal: 8
  },
  subtitle: {
    fontSize: hp("2%"),
    color: colors.lightGrey
  }
});

export default PatientProfile;
