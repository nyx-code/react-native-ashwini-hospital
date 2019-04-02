import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal
} from "react-native";
import { getPatientReports } from "../../api/config";
import { colors } from "../../Style/Colors";

class ViewReport extends Component {
  state = {
    isLoading: true,
    modalVisible: false
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

  onList = () => {
    //alert(text);
    this.setState({
      modalVisible: true
    });
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <ScrollView
        style={{ flex: 1, paddingVertical: 4, backgroundColor: "#dcdcdc" }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : (
          data.map((data, i) => (
            <React.Fragment>
              <TouchableOpacity
                onPress={this.onList}
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
            <View style={styles.modalContainer}>
              <Text style={styles.mainTitle}>RESULT : </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.subtitle}>OPS</Text>
              </TouchableOpacity>
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
    marginHorizontal: 4,
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
    fontSize: 18,
    marginVertical: 4
  },
  subtitle: {
    color: "grey",
    fontSize: 16,
    marginVertical: 4
  }
});

export default ViewReport;
