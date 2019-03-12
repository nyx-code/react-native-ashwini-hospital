import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import { Jsondata } from "./dummy";
import { hp } from "../Style/responsive";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Jsondata);
      reject("Data cannot be fetch");
    });
  }, 500);
};

class ListOptions extends Component {
  state = {
    data: []
  };

  static navigationOptions = {
    title: "OPD List"
  };

  componentDidMount() {
    console.log("did it");
    fetchData(Jsondata)
      .then(res =>
        this.setState({
          data: res
        })
      )
      .catch();
  }

  onClick = () => {
    this.props.navigation.navigate("PatientProfile");
  };

  setImage(gender) {
    if (gender === "MALE") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  }

  render() {
    console.log("s bas render");
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Header text="OPD List" />
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {data.map((data, i) => (
            <TouchableOpacity
              key={i}
              onPress={this.onClick}
              style={styles.listWrapper}
              activeOpacity={0.4}
            >
              <Image
                style={styles.imgStyle}
                source={this.setImage(data.gender)}
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
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    fontSize: hp("2.2%"),
    marginHorizontal: 4
  },
  subTitle: {
    fontSize: hp("2%"),
    color: "grey",
    marginHorizontal: 4
  }
});

export default ListOptions;
