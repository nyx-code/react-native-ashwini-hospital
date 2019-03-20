import React, { Component, Suspense } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { colors } from "../Style/Colors";
import { hp } from "../Style/responsive";
import { withNavigation } from "react-navigation";
import Loading from "../Compoents/Loading";
import { unstable_createResource as createResource } from "react-cache";

const getData = () =>
  fetch("http://wwacoman.com/oss/opd/SMR").then(res => res.json());

const ApiResource = createResource(getData);

const List = props => {
  const onClick = () => {
    props.navigation.navigate("PatientProfile");
  };

  const setImage = gender => {
    if (gender === "M") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  };

  const actualData = ApiResource.read();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {actualData.map((data, i) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={i}
          onPress={onClick}
          style={styles.listWrapper}
        >
          <Image style={styles.imgStyle} source={setImage(data.GENDER)} />
          <View style={{ flex: 1 }}>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                PIN: <Text style={styles.subTitle}>{data.REGNO}</Text>
              </Text>
              <Text style={styles.title}>
                VOUCHER: <Text style={styles.subTitle}>{data.REFNO}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                Name : <Text style={styles.subTitle}>{data.PAT_NAME}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                AGE: <Text style={styles.subTitle}>{data.AGE} Y</Text>
              </Text>
              <Text style={styles.title}>
                GENDER: <Text style={styles.subTitle}>{data.GENDER}</Text>
              </Text>
            </View>
            <View style={styles.nameSection}>
              <Text style={styles.title}>
                LOCATION : <Text style={styles.subTitle}>{data.LOC}</Text>
              </Text>
            </View>
          </View>
          {/* 
          <View style={styles.tagWrapper}>
            <View style={[styles.tag, { backgroundColor: "tomato" }]}>
              <Text style={styles.tagText}>{data.PTYPE}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: "orange" }]}>
              <Text style={styles.tagText}>{data.SMODE}</Text>
            </View>
          </View>
        </TouchableOpacity>
           */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

class ListOptions extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  imgStyle: {
    width: 50,
    height: 50,
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
