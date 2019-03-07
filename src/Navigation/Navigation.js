import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import DashBoard from "../App/Dashboard";
import ListOptions from "../App/ListOptions";

const AppNavigation = createStackNavigator({
  DashBoard: {
    screen: DashBoard
  },
  ListOptions: {
    screen: ListOptions
  }
});

export default createAppContainer(AppNavigation);
