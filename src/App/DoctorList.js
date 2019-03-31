import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import Header from "../Compoents/Header";
import { hp } from "../Style/responsive";
import { colors } from "../Style/Colors";

export default class DoctorList extends React.Component {
  onList = () => {
    this.props.navigation.navigate("HSManDashboard");
  };

  render() {
    const data = new Array(10, 20, 30, 40, 50, 60, 70, 80);
    return (
      <View style={{ flex: 1 }}>
        <Header text="DOCTOR LIST" />
        <ScrollView contentContainerStyle={styles.scrollWrapper}>
          {data.map((data, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              style={styles.listWrapper}
              onPress={this.onList}
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
                  <Text style={styles.subtitle}>Dr. Joshi Vijay P.</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>Department: </Text>
                  <Text style={styles.subtitle}>NEURO SURGERY</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>From Date: </Text>
                  <Text style={styles.subtitle}>1/1/2019 12:00:00 AM</Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>To Date: </Text>
                  <Text style={styles.subtitle}>3/31/2019 12:00:00 AM</Text>
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
    flex: 1,
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
