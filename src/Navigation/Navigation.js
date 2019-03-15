import { createAppContainer, createStackNavigator } from "react-navigation";
import DashBoard from "../App/Dashboard";
import ListOptions from "../App/ListOptions";
import PatientProfile from "../App/PatientProfile";
import Login from "../App/Login";
import OPD_TabBar from "../Navigation/OPD_TabBar";

const AppNavigation = createStackNavigator({
  DashBoard: {
    screen: DashBoard
  },
  Login: {
    screen: Login
  },
  ListOptions: {
    screen: ListOptions
  },
  PatientProfile: {
    screen: PatientProfile
  },
  OPD_TabBar: {
    screen: OPD_TabBar
  }
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
