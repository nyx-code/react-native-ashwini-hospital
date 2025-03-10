import React, { Component } from "react";
import { View, Text, StyleSheet, WebView, ScrollView } from "react-native";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";

class Report extends Component {
  render() {
    const { navigation } = this.props;
    const reportName = navigation.getParam("reportName");
    const data = navigation.getParam("values");

    const resultText = "";
    return (
      <View style={styles.container}>
        <Header text="REPORT" isBack={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.reportWrapper}
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.header}>Test Name : {reportName}</Text>
          </View>
          {data.map((data, i) => (
            <View style={styles.listWrapper}>
              <View style={styles.list}>
                <Text style={styles.title}>{data.Param_Description}</Text>
                <Text style={styles.subtitle}>
                  {data.IR_RESULT_NUM || data.IR_RESULT_CHAR}
                </Text>
              </View>
            </View>
          ))}
          {resultText ? (
            <WebView
              useWebKit={true}
              startInLoadingState={true}
              style={{ marginTop: 10, width: 260, height: 400 }}
              scrollEnabled={true}
              shouldRasterizeIOS={false}
              source={{ html: resultText }}
            />
          ) : (
            <View />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  listWrapper: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 0.4,
    borderWidth: 0.3,
    borderColor: colors.lightGrey
  },
  title: {
    fontSize: 14,
    color: "#333"
  },
  subtitle: {
    fontSize: 14
  },
  titleWrapper: {
    backgroundColor: colors.primaryColor,
    padding: 10
  },
  header: {
    color: colors.whiteColor,
    fontWeight: "bold",
    letterSpacing: 0.8,
    fontSize: 16
  },
  reportWrapper: {
    marginVertical: 20,
    elevation: 1,
    marginHorizontal: 10
  }
});

export default Report;
