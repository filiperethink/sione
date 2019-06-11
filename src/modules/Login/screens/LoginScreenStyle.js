import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  wrapperLogin: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$COLORS.baseColor"
  },
  loginTitle: {
    fontSize: 30,
    fontFamily: "$FONTS.bold",
    color: "$COLORS.detailsColor"
  },
  loginHeadline: {
    fontSize: 13,
    fontFamily: "$FONTS.normal",
    color: "$COLORS.lightTextColor"
  },
  loginDraw: {
    height: 150,
    width: 200,
    marginVertical: 20
  }
});
