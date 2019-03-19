import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { colors } from "../Style/Colors";
import { Jsondata } from "./dummy";
import { hp } from "../Style/responsive";
import { withNavigation } from "react-navigation";
import Loading from "../Compoents/Loading";

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
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    console.log("did it");
    fetchData(Jsondata)
      .then(res =>
        this.setState({
          data: res,
          isLoaded: true
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
        {this.state.isLoaded ? (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {data.map((data, i) => (
              <TouchableOpacity
                key={i}
                onPress={this.onClick}
                style={styles.listWrapper}
                //activeOpacity={0.}
              >
                <Image
                  style={styles.imgStyle}
                  source={this.setImage(data.gender)}
                />
                <View style={{ flex: 1 }}>
                  <View style={styles.nameSection}>
                    <Text style={styles.title}>
                      PIN: <Text style={styles.subTitle}>{data.pin}</Text>
                    </Text>
                    <Text style={styles.title}>
                      VOUCHER:{" "}
                      <Text style={styles.subTitle}>{data.voucher}</Text>
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
                <View style={styles.tagWrapper}>
                  <View style={[styles.tag, { backgroundColor: "orange" }]}>
                    <Text style={styles.tagText}>CSH</Text>
                  </View>
                  <View style={[styles.tag, { backgroundColor: "tomato" }]}>
                    <Text style={styles.tagText}>REF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <Loading />
        )}
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
    fontSize: hp("2.1%"),
    color: "grey",
    marginHorizontal: 4
  },
  tagWrapper: {
    alignItems: "flex-end",
    paddingLeft: 8
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginVertical: 4,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  tagText: {
    color: "#fff",
    fontSize: hp("2%")
  }
});

export default withNavigation(ListOptions);
