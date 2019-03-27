import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../Style/Colors";
import { wp, hp } from "../Style/responsive";
import TabBar from "../Navigation/Profile_TabBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class PatientProfile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Icon
        onPress={() => this.props.navigation.navigate("Login")}
        style={{ marginRight: 10 }}
        name="logout"
        size={24}
        color={colors.primaryColor}
      />
    )
  };
  setImage(gender) {
    if (gender === "M") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  }

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("item");
    console.log("Data :" + JSON.stringify(data));

    return (
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={this.setImage(data.GENDER)} />
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                PIN : <Text style={styles.subtitle}>{data.REGNO}</Text>
              </Text>
              <Text style={styles.title}>
                VOUCHER :{" "}
                <Text style={styles.subtitle}> {data.REFNO || data.IPDNO}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                NAME : <Text style={styles.subtitle}> {data.PAT_NAME}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                AGE : <Text style={styles.subtitle}> {data.AGE} Y</Text>
              </Text>
              <Text style={styles.title}>
                GENDER : <Text style={styles.subtitle}>{data.GENDER}</Text>
              </Text>
              <Text style={styles.title}>
                TYPE : <Text style={styles.subtitle}> OPD</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                DR : <Text style={styles.subtitle}>{data.CONDOC}</Text>
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
    width: 50,
    height: 50
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
    fontSize: hp("2.1%"),
    color: colors.lightGrey
  }
});

export default PatientProfile;
