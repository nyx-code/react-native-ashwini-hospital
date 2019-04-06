import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { getPatientReports } from "../../api/config";
import { colors } from "../../Style/Colors";
import _ from "lodash";

class ViewReport extends Component {
  state = {
    isLoading: true,
    param: "",
    resultText: "",
    data: []
  };
  componentDidMount = async () => {
    try {
      const { type, refNo } = this.props.screenProps;
      console.log(type + " " + refNo);

      getPatientReports(type, refNo)
        .then(data => {
          var groups = _.groupBy(data, "INVEST_DESCRIPTION");
          var array = [];
          _.forOwn(groups, function(value, key) {
            array.push({
              key: key,
              value: value
            });
          });
          this.setState({ data: array, isLoading: false });
        })
        .catch(e => alert(JSON.stringify(e)));
    } catch (error) {
      console.log("Error while retriving data");
    }
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <ScrollView
        style={{ flex: 1, paddingVertical: 4, backgroundColor: "#dcdcdc" }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : this.state.data.length === 0 ? (
          <Text>No data Available</Text>
        ) : (
          data.map((data, i) => (
            <React.Fragment key={i}>
              <TouchableOpacity
                onPress={() => {
                  this.props.screenProps.navigation.navigate("Report", {
                    reportName: data.key,
                    values: data.value
                  });
                }}
                activeOpacity={0.8}
                style={styles.wrapper}
              >
                <Text style={styles.title}>{data.key}</Text>
                <Text style={styles.data}>24 th June</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.whiteColor,
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 6,
    borderWidth: 0.3,
    borderColor: colors.lightGrey
  },
  title: {
    fontSize: 16,
    color: "#333",
    marginVertical: 4
  },
  date: {
    fontSize: 14,
    color: colors.lightGrey
  }
});

export default ViewReport;
