import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import All from "./IPD_TabScreen/All";
import Refer from "./IPD_TabScreen/Refer";
import Sharing from "./IPD_TabScreen/Sharing";
import { colors } from "../Style/Colors";

const IPD_TabBar = createMaterialTopTabNavigator(
  {
    All: All,
    Refer: Refer,
    Sharing: Sharing
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
      }
    }
  }
);

export default createAppContainer(IPD_TabBar);
