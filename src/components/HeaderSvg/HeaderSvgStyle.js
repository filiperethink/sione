import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    zIndex: -9999,
    width: width + 50,
    height: 160
  }
});
