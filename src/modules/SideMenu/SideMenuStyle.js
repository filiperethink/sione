import EStyleSheet from "react-native-extended-stylesheet";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: "lightgrey"
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: "lightgrey"
  }
});
