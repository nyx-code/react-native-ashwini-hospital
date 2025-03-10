/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import Navigation from "./src/Navigation/Navigation";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Navigation);
