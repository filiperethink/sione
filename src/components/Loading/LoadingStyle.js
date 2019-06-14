import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  loadingWrapper: {
    ...EStyleSheet.absoluteFill,
    backgroundColor: "$COLORS.detailsColor",
    opacity: 0.95,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    fontSize: 25,
    fontFamily: "$FONTS.bold",
    color: "$COLORS.baseColor"
  }
});
