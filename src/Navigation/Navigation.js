import { createAppContainer, createStackNavigator } from "react-navigation";
import Dashboard from "../App/Dashboard";
import ListOptions from "../App/ListOptions";
import PatientProfile from "../App/PatientProfile";
import Login from "../App/Login";
import OPD_TabBar from "../Navigation/OPD_TabBar";
import IPD_TabBar from "../Navigation/IPD_TabBar";

const AppNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard
  },
  ListOptions: {
    screen: ListOptions
  },
  OPD_TabBar: {
    screen: OPD_TabBar
  },
  IPD_TabBar: {
    screen: IPD_TabBar
  },
  PatientProfile: {
    screen: PatientProfile
  }
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
