import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Dashboard from "../App/Dashboard";
import { colors } from "../Style/Colors";
import PatientProfile from "../App/PatientProfile";
import Login from "../App/Login";
import OPD_TabBar from "../Navigation/OPD_TabBar";
import IPD_TabBar from "../Navigation/IPD_TabBar";
import Header from "../Compoents/Header";

const AppNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  OPD_TabBar: {
    screen: OPD_TabBar,
    navigationOptions: {
      header: <Header isBack={true} text="OPD List" />
    }
  },
  IPD_TabBar: {
    screen: IPD_TabBar,
    navigationOptions: {
      header: <Header isBack={true} text="IPD List" />
    }
  },
  PatientProfile: {
    screen: PatientProfile,
    navigationOptions: {
      header: <Header isBack={true} text="Profile" />
    }
  }
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
