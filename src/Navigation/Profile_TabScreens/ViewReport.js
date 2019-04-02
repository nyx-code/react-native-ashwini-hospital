import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  WebView
} from "react-native";
import { getPatientReports } from "../../api/config";
import { colors } from "../../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class ViewReport extends Component {
  state = {
    isLoading: true,
    modalVisible: false,
    param: "",
    resultText: ""
  };
  componentDidMount = async () => {
    try {
      const { type, refNo } = this.props.screenProps;
      getPatientReports(type, refNo)
        .then(data => {
          console.log(JSON.stringify(data));
          this.setState({ data, isLoading: false });
        })
        .catch(e => alert(JSON.stringify(e)));
    } catch (error) {
      console.log("Error while retriving data");
    }
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { data, isLoading, param, resultText } = this.state;
    return (
      <ScrollView
        style={{ flex: 1, paddingVertical: 4, backgroundColor: "#dcdcdc" }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : (
          data.map((data, i) => (
            <React.Fragment key={i}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisible: true,
                    param: data.Param_Description,
                    resultText: data.IR_RESULT_TEXT
                  });
                }}
                activeOpacity={0.8}
                style={styles.wrapper}
              >
                <Text style={styles.title}>{data.INVEST_DESCRIPTION}</Text>
                <Text style={styles.data}>{data.FROMDT}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))
        )}
        <Modal
          style={{ backgroundColor: "blue" }}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)"
            }}
          >
            <View
              style={[styles.modalContainer, resultText && { height: 300 }]}
            >
              <Text style={styles.mainTitle}>DESCRIPTION : </Text>

              <Text style={styles.subtitle}>{param}</Text>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.iconWrapper}
              >
                <Icon
                  name="close-circle"
                  size={28}
                  color={colors.primaryColor}
                />
              </TouchableOpacity>
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
            </View>
          </View>
        </Modal>
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
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: 300,
    padding: 20
  },
  mainTitle: {
    color: "#333",
    fontSize: 16,
    marginVertical: 4
  },
  subtitle: {
    color: "grey",
    fontSize: 17,
    marginVertical: 4
  },
  iconWrapper: {
    position: "absolute",
    top: 20,
    left: 260
  }
});

export default ViewReport;
