import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../Style/Colors";
import OPD_TabBar from "../Navigation/OPD_TabBar";

class OPD extends Component {
  static navigationOptions = {
    title: "OPD List",
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <Icon
        style={{ marginRight: 10 }}
        name="logout"
        size={24}
        color={colors.primaryColor}
      />
    )
  };
  render() {
    return <OPD_TabBar />;
  }
}

export default OPD;
