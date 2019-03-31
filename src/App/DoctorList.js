import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../Compoents/Header";

export default class DoctorList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="DOCTOR LIST" />
      </View>
    );
  }
}
