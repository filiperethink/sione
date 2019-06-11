import EStyleSheet from "react-native-extended-stylesheet";
import { Platform } from "react-native";

export const styles = EStyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.OS === "android" ? 10 : 20,
    // backgroundColor: "tomato",
    borderBottomColor: "$COLORS.detailsColor",
    borderBottomWidth: EStyleSheet.hairlineWidth,
    marginBottom: 15
  },
  icon: {
    width: 19,
    height: 19,
    marginRight: 10
  },
  input: {
    color: "$COLORS.detailsColor",
    fontFamily: "$FONTS.lite"
  },
  errorText: {
    fontFamily: "$FONTS.lite",
    color: "$COLORS.dangerColor",
    fontSize: 12
  }
});
