import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Dashboard from "../App/Dashboard";
import PatientProfile from "../App/PatientProfile";
import DoctorLogin from "../App/DoctorLogin";
import OPD_TabBar from "../Navigation/OPD_TabBar";
import IPD_TabBar from "../Navigation/IPD_TabBar";
import Header from "../Compoents/Header";
import Login from "../App/Login";
import Admin from "../App/Admin";
import FetchScreen from "../App/FetchScreen";
import Discharge from "../Navigation/Discharge";
import DoctorList from "../App/DoctorList";

const AuthNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  DoctorLogin: {
    screen: DoctorLogin,
    navigationOptions: {
      header: null
    }
  },
  Admin: {
    screen: Admin,
    navigationOptions: {
      header: null
    }
  }
});

const AppNavigation = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  DoctorList: {
    screen: DoctorList,
    navigationOptions: {
      header: null
    }
  },
  OPD_TabBar: {
    screen: OPD_TabBar,
    navigationOptions: {
      header: <Header isLogoutIcon={true} isBack={true} text="OPD List" />
    }
  },
  IPD_TabBar: {
    screen: IPD_TabBar,
    navigationOptions: {
      header: <Header isLogoutIcon={true} isBack={true} text="IPD List" />
    }
  },
  PatientProfile: {
    screen: PatientProfile,
    navigationOptions: {
      header: <Header isLogoutIcon={true} isBack={true} text="Profile" />
    }
  },
  Discharge: {
    screen: Discharge,
    navigationOptions: {
      header: <Header text="Discharge" isLogoutIcon={true} isBack={true} />
    }
  }
});

const Navigation = createSwitchNavigator(
  {
    Initial: FetchScreen,
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: "Initial"
  }
);

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
