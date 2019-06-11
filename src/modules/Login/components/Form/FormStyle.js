import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  wrapper: {
    width: "85%",
    marginTop: 25
  },
  hyperLink: {
    fontSize: 10,
    marginTop: 10,
    textDecorationLine: "underline",
    fontFamily: "$FONTS.normal",
    color: "$COLORS.detailsColor"
    // textDecoration: "underline"
  },
  submitButton: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$COLORS.detailsColor",
    padding: 15,
    borderRadius: 25
  },
  buttonText: {
    fontFamily: "$FONTS.normal",
    color: "$COLORS.baseColor",
    fontSize: 15
  }
});
