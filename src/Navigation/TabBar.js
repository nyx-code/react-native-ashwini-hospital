import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import Emr from "./TabScreens/Emr";
import ViewReport from "./TabScreens/ViewReport";
import Vitals from "./TabScreens/Vitals";
import { colors } from "../Style/Colors";

const TabBar = createMaterialTopTabNavigator(
  {
    Vital: Vitals,
    ViewReport: ViewReport,
    Emr: Emr
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

export default createAppContainer(TabBar);
