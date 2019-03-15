import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import All from "./OPD_TabScreen/All";
import Offline from "./OPD_TabScreen/Offline";
import Online from "./OPD_TabScreen/Online";
import { colors } from "../Style/Colors";

const OPD_TabBar = createMaterialTopTabNavigator(
  {
    All: All,
    Offline: Offline,
    Online: Online
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "transparent",
        marginTop: 10
      },
      indicatorStyle: {
        backgroundColor: colors.primaryColor,
        width: "30%"
      },
      activeBackgroundColor: "#3ec9cc"
    }
  }
);

export default createAppContainer(OPD_TabBar);
