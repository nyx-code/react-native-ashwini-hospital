import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { colors } from "../Style/Colors";
import { hp } from "../Style/responsive";
import { withNavigation } from "react-navigation";
import { setPTYPEColor, setSMODEColor } from "./SelectTagColor";
import { unstable_createResource as createResource } from "react-cache";

const ApiResource = createResource(code => {
  return fetch(`http://wwacoman.com/oss/${code}/SMR`).then(res => res.json());
});

const List = props => {
  const setImage = gender => {
    if (gender === "M") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  };

  const { type, typeMode, code } = props;

  let data = ApiResource.read(code);

  if (data) {
    if (type) {
      data = data.filter(e => e.SMODE === typeMode);
    }
  }

  const setString = string => {
    if (string === "REF") {
      return "REFER BY";
    } else {
      return "SHARE WITH";
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={data => data.REFNO}
          initialNumToRender={8}
          maxToRenderPerBatch={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                props.navigation.navigate("PatientProfile", {
                  item
                });
              }}
              style={styles.listWrapper}
            >
              <Image style={styles.imgStyle} source={setImage(item.GENDER)} />
              <View style={{ flex: 1 }}>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>
                    PIN: <Text style={styles.subTitle}>{item.REGNO}</Text>
                  </Text>
                  <Text style={styles.title}>
                    VOUCHER:{" "}
                    <Text style={styles.subTitle}>
                      {item.REFNO || item.IPDNO}
                    </Text>
                  </Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>
                    Name : <Text style={styles.subTitle}>{item.PAT_NAME}</Text>
                  </Text>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>
                    AGE: <Text style={styles.subTitle}>{item.AGE} Y</Text>
                  </Text>
                  <Text style={styles.title}>
                    GENDER: <Text style={styles.subTitle}>{item.GENDER}</Text>
                  </Text>
                  <View style={styles.tagWrapper}>
                    <View
                      style={[
                        styles.tag,
                        { backgroundColor: setPTYPEColor(item.PTYPE) }
                      ]}
                    >
                      <Text style={styles.tagText}>{item.PTYPE}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.nameSection}>
                  <Text style={styles.title}>
                    LOCATION : <Text style={styles.subTitle}>{item.LOC}</Text>
                  </Text>
                  <View style={styles.tagWrapper}>
                    <View
                      style={[
                        styles.tag,
                        { backgroundColor: setSMODEColor(item.SMODE) }
                      ]}
                    >
                      <Text style={styles.tagText}>
                        {item.SMODE.substr(0, 6)}
                      </Text>
                    </View>
                  </View>
                </View>
                {type && (
                  <View style={styles.nameSection}>
                    <Text style={styles.title}>
                      {setString(data.SMODE)} :
                      <Text style={styles.subTitle}> {item.OTHDOC}</Text>
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 20, color: colors.lightGrey }}>
            No Data Found
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

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
    fontSize: hp("2.1%"),
    marginHorizontal: 4
  },
  subTitle: {
    fontSize: hp("2%"),
    color: "grey",
    marginHorizontal: 4
  },
  tagWrapper: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  tagText: {
    color: "#fff",
    fontSize: hp("2%")
  }
});

export default withNavigation(List);
