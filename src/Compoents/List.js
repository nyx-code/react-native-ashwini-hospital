import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import { colors } from "../Style/Colors";
import { hp } from "../Style/responsive";
import { withNavigation } from "react-navigation";
import { setPTYPEColor, setSMODEColor } from "./SelectTagColor";
import { unstable_createResource as createResource } from "react-cache";
import Loading from "../Compoents/Loading";
import { getPatientList } from "./../api/config";
import { setFontSize } from "../Compoents/SetSize";

class List extends React.Component {
  state = {
    data: []
  };
  setImage = gender => {
    if (gender === "M") {
      return require("../assets/MALE.png");
    } else {
      return require("../assets/FEMALE.png");
    }
  };

  setString = string => {
    if (string === "REF") {
      return "REFER BY";
    } else {
      return "SHARE WITH";
    }
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("user-data");

      if (value !== null) {
        const { code } = this.props;
        const data = JSON.parse(value);

        getPatientList(code, data.Code)
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
    let { data } = this.state;
    const { type, typeMode } = this.props;

    if (data) {
      if (type) {
        data = data.filter(e => e.SMODE === typeMode);
      }
    }

    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={data => data.REGNO + data.SMODE + data.PTYPE}
            initialNumToRender={8}
            maxToRenderPerBatch={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.navigate("PatientProfile", {
                    item
                  });
                }}
                style={styles.listWrapper}
              >
                <Image
                  style={styles.imgStyle}
                  source={this.setImage(item.GENDER)}
                />
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
                      Name :{" "}
                      <Text style={styles.subTitle}>{item.PAT_NAME}</Text>
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
                        {this.setString(data.SMODE)} :
                        <Text style={styles.subTitle}> {item.OTHDOC}</Text>
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Loading />
        )}
      </ScrollView>
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
    elevation: 3,
    shadowColor: "#333",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.3
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
    fontSize: setFontSize("2.1", "1.9"),
    marginHorizontal: 4
  },
  subTitle: {
    fontSize: setFontSize("2.1", "1.9"),
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
    fontSize: setFontSize("2", "1.8") //2 //1.8
  }
});

export default withNavigation(List);
