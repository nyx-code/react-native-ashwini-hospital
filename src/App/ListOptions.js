import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import { data } from "./dummy";

class ListOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="OPD List" />
        {data.map((data, i) => (
          <View key={i} style={styles.listWrapper}>
            <Image
              style={styles.imgStyle}
              source={require("../assets/doctor.png")}
            />
            <View>
              <View style={styles.nameSection}>
                <Text style={styles.title}>
                  PIN: <Text style={styles.subTitle}>{data.pin}</Text>
                </Text>
                <Text style={styles.title}>
                  VOUCHER: <Text style={styles.subTitle}>{data.voucher}</Text>
                </Text>
              </View>
              <View style={styles.nameSection}>
                <Text style={styles.title}>
                  Name : <Text style={styles.subTitle}>{data.name}</Text>
                </Text>
              </View>
              <View style={styles.nameSection}>
                <Text style={styles.title}>
                  AGE: <Text style={styles.subTitle}>{data.age} Y</Text>
                </Text>
                <Text style={styles.title}>
                  GENDER: <Text style={styles.subTitle}>{data.gender}</Text>
                </Text>
              </View>
              <View style={styles.nameSection}>
                <Text style={styles.title}>
                  LOCATION :{" "}
                  <Text style={styles.subTitle}>{data.location}</Text>
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  imgStyle: {
    width: 60,
    height: 60,
    alignSelf: "center"
  },
  listWrapper: {
    backgroundColor: colors.whiteColor,
    flexDirection: "row",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 4,
    elevation: 3
  },
  detailsWrapper: {
    padding: 6
  },
  nameSection: {
    flexDirection: "row",
    padding: 4,
    marginHorizontal: 8
  },
  title: {
    color: "#333",
    fontSize: 16,
    marginHorizontal: 4
  },
  subTitle: {
    fontSize: 16,
    color: "grey",
    marginHorizontal: 4
  }
});

export default ListOptions;
