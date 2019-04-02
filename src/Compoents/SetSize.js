import { Platform } from "react-native";
import { hp } from "../Style/responsive";

export const setFontSize = (first, second) => {
  return Platform.OS === "android" ? hp(first) : hp(second);
};
