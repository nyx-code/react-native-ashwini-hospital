import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  AsyncStorage
} from "react-native";
import Header from "../Compoents/Header";
import { hp } from "../Style/responsive";
import { colors } from "../Style/Colors";
import { getDoctorList } from "../api/config";

export default class DoctorList extends React.Component {
  state = {
    data: []
  };

  onList = data => {
    // alert(JSON.stringify(data));

    // AsyncStorage.setItem("user-data", JSON.stringify(res)).then(() => {
    //   alert
    // });
    AsyncStorage.setItem("current-data", JSON.stringify(data))
      .then(() => {
        // alert(JSON.stringify(data));
        this.props.navigation.navigate("HSManDashboard");
      })
      .catch(e => alert(JSON.stringify(e)));
    // this.props.navigation.navigate("HSManDashboard");
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        // const { code } = this.props;
        const data = JSON.parse(value);
        getDoctorList(data.UserName)
          .then(data => {
            this.setState({ data });
          })
          .catch(e => alert(JSON.stringify(e)));
      }
    } catch (error) {
      console.log("Error while retriving data");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="DOCTOR LIST" />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollWrapper}
        >
          {this.state.data.map((data, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              style={styles.listWrapper}
              onPress={() => this.onList(data)}
            >
              <Image
                source={{
                  uri:
                    "http://www.teainconline.com/uploads/images/tea-male-avatar.jpg"
                }}
                style={styles.img}
              />
              <View style={styles.infoWrapper}>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>Name: </Text>
                  <Text style={styles.subtitle}>{data.DrName}</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>Department: </Text>
                  <Text style={styles.subtitle}>{data.Department}</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>From Date: </Text>
                  <Text style={styles.subtitle}>{data.FromDate}</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>To Date: </Text>
                  <Text style={styles.subtitle}>{data.ToDate}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: colors.whiteColor,
    marginVertical: 2,
    marginHorizontal: 4,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { height: 0.1, width: 0 },
    shadowOpacity: 0.3,
    flexDirection: "row",
    alignItems: "center"
  },
  scrollWrapper: {
    backgroundColor: colors.lightGrey
  },
  nameSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  title: {
    fontSize: hp("2%"),
    color: "black"
  },
  subtitle: {
    fontSize: hp("1.8%"),
    color: "grey"
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  infoWrapper: {
    padding: 8,
    marginHorizontal: 8
  }
});

// import React, { Component } from "react";
// import { View, Text } from "react-native";

// export default class DoctorList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View>
//         <Text> DoctorList </Text>
//       </View>
//     );
//   }
// }
