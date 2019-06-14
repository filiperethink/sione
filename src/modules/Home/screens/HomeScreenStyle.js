import EStyleSheet from "react-native-extended-stylesheet";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const majorVersionIOS = parseInt(Platform.Version, 10);
export const styles = EStyleSheet.create({
  wrapperHome: {
    flex: 1,
    paddingVertical: Platform.OS === "android" ? 30 : 50,
    paddingHorizontal: 30,
    backgroundColor: "$COLORS.baseColor"
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50
  },
  userAvatar: {
    width: Platform.OS === "android" ? 65 : 50,
    height: Platform.OS === "android" ? 65 : 50,
    borderRadius: Platform.OS === "android" ? 32 : 25,
    borderWidth: 1,
    borderColor: "$COLORS.detailsColor"
  },

  calendarChoose: {
    backgroundColor: "$COLORS.detailsColor",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4
  },
  calendarText: {
    color: "$COLORS.baseColor",
    fontSize: "$SIZE.small",
    fontFamily: "$FONTS.lite"
  },
  welcomeWrapper: {
    marginBottom: 50
  },
  userName: {
    color: majorVersionIOS < 11 ? "tomato" : "$COLORS.darkColor",
    fontSize: Platform.OS === "android" ? 35 : 30,
    fontFamily: "$FONTS.bold"
  },
  welcomeText: {
    color: "$COLORS.darkColor",
    fontSize: "$SIZE.small",
    fontFamily: "$FONTS.lite"
  },
  balanceText: {
    color: "$COLORS.darkColor",
    fontSize: 13,
    fontFamily: "$FONTS.normal"
  },
  balanceValuesWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 50
  },
  balanceMoney: {
    color: "$COLORS.darkColor",
    fontSize: 12,
    fontFamily: "$FONTS.lite",
    marginRight: 5
  },
  balanceValue: {
    color: "$COLORS.coolColor",
    fontSize: 35,
    fontFamily: "$FONTS.bold"
  },
  divider: {
    height: majorVersionIOS < 12.2 ? 95 : 110,
    marginHorizontal: Platform.OS === "ios" ? "5%" : 5
  },
  wrapperControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  wrapperIncome: {
    width: width / 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  incomeText: {
    color: "$COLORS.darkColor",
    fontSize: 12,
    fontFamily: "$FONTS.lite"
  },
  incomeWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  incomeMoney: {
    color: "$COLORS.darkColor",
    fontSize: 12,
    fontFamily: "$FONTS.lite",
    marginRight: 5
  },

  incomeValue: {
    color: "$COLORS.detailsColor",
    fontSize: 21,
    marginVertical: 3,
    fontFamily: "$FONTS.bold"
  },
  incomeAlert: {
    color: "$COLORS.coolColor",
    fontSize: 9,
    fontFamily: "$FONTS.lite"
  },

  wrapperDebit: {
    width: width / 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  debitText: {
    color: "$COLORS.darkColor",
    fontSize: 12,
    fontFamily: "$FONTS.lite"
  },
  debitWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  debitMoney: {
    color: "$COLORS.darkColor",
    fontSize: 12,
    fontFamily: "$FONTS.lite",
    marginRight: 5
  },

  debitValue: {
    color: "$COLORS.dangerColor",
    fontSize: 21,
    marginVertical: 3,
    fontFamily: "$FONTS.bold"
  },

  debitAlert: {
    color: "$COLORS.lightTextColor",
    fontSize: 9,
    fontFamily: "$FONTS.lite"
  }
});
