import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const majorVersionIOS = parseInt(Platform.Version, 10);
const androidPlatform = Platform.OS === 'android';

export const styles = EStyleSheet.create({
  wrapperHome: {
    flex: 1,
    backgroundColor: '$COLORS.baseColor',
  },
  wrapperHeader: {
    flexDirection: 'row',
    width: width - 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: androidPlatform ? 30 : 50,
    left: 30,
  },
  headerInner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userAvatar: {
    width: androidPlatform ? 65 : 50,
    height: androidPlatform ? 65 : 50,
    borderRadius: androidPlatform ? 32 : 25,
    borderWidth: 2,
    marginRight: 15,
    borderColor: '$COLORS.baseColor',
  },
  welcomeWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontSize: 12,
    fontFamily: '$FONTS.normal',
    color: '$COLORS.darkColor',
  },
  userFirstName: {
    fontSize: '$SIZE.big',
    fontFamily: '$FONTS.bold',
    color: '$COLORS.baseColor',
  },
  calendarChoose: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: '$COLORS.baseColor',
  },
  calendarText: {
    fontSize: androidPlatform ? '$SIZE.small' : 12,
    fontFamily: '$FONTS.bold',
    color: '$COLORS.detailsColor',
  },
  balanceWrapper: {
    marginTop: 50,
    paddingHorizontal: 50,
    marginBottom: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  balanceText: {
    color: '$COLORS.darkColor',
    fontSize: 13,
    fontFamily: '$FONTS.normal',
  },
  balanceValuesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  balanceMoney: {
    color: '$COLORS.darkColor',
    fontSize: 12,
    fontFamily: '$FONTS.lite',
    marginRight: 5,
  },
  balanceValue: {
    color: '$COLORS.coolColor',
    fontSize: 35,
    fontFamily: '$FONTS.bold',
  },

  containerSwiper: {
    height: 50,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  swipeable: {
    alignSelf: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    // backgroundColor: "$COLORS.detailsColor"
  },
  childSwiper: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$COLORS.detailsColor',
  },
  textSwiper: {
    color: '$COLORS.baseColor',
    fontSize: 15,
    fontFamily: '$FONTS.bold',
  },
  leftStyles: {
    backgroundColor: '$COLORS.coolColor',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    flex: 1,
    paddingLeft: 20,
  },
  leftTextStyles: {
    alignSelf: 'flex-start',
    color: '$COLORS.baseColor',
    fontSize: 12,
    fontFamily: '$FONTS.bold',
  },
  rightTextStyles: {
    alignSelf: 'flex-end',
    color: '$COLORS.baseColor',
    fontSize: 12,
    fontFamily: '$FONTS.bold',
  },
  rightStyles: {
    backgroundColor: '$COLORS.dangerColor',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    flex: 1,
    paddingRight: 20,
  },
});
