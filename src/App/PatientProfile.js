import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../Style/Colors";
import { hp } from "../Style/responsive";
import TabBar from "../Navigation/Profile_TabBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { setFontSize } from "../Compoents/SetSize";

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
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                LOCATION : <Text style={styles.subtitle}>{data.LOC}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                DR : <Text style={styles.subtitle}>{data.CONDOC}</Text>
              </Text>
            </View>
          </View>
        </View>
        <TabBar screenProps={{ type: "opd", refNo: data.REGNO }} />
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
    padding: 10,
    flexDirection: "row",
    height: hp("26%"), //22
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
    fontSize: setFontSize("2.2", "1.9"), //2.2 //1.9
    marginHorizontal: 8
  },
  subtitle: {
    fontSize: setFontSize("2.1", "1.8"), //2.1 //1.8
    color: colors.lightGrey
  }
});

export default PatientProfile;
