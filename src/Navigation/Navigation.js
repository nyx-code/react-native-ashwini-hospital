import { createAppContainer, createStackNavigator } from "react-navigation";
import DashBoard from "../App/Dashboard";
import ListOptions from "../App/ListOptions";
import PatientProfile from "../App/PatientProfile";
import Login from '../App/Login'

const AppNavigation = createStackNavigator({
  Login : {
    screen : Login,
    navigationOptions:{
      header:null
    }
  },
  DashBoard: {
    screen: DashBoard,
    navigationOptions: {
      header: null
    }
  },
  ListOptions: {
    screen: ListOptions,
    navigationOptions: {
      header: null
    }
  },
  PatientProfile: {
    screen: PatientProfile,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
