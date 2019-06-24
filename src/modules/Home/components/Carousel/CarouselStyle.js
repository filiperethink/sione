import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window',
);

const itemWidth = viewportWidth - 80;

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const styles = EStyleSheet.create({
  wrapperIncome: {
    backgroundColor: '#f4f5f9',
    borderWidth: EStyleSheet.hairlineWidth,
    borderColor: '#d9e1e8',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0, // needed for shadow
  },
  wrapperCarousel: {},
  incomeText: {
    color: '$COLORS.darkColor',
    fontSize: 12,
    fontFamily: '$FONTS.lite',
  },
  incomeWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  incomeMoney: {
    color: '$COLORS.darkColor',
    fontSize: 12,
    fontFamily: '$FONTS.lite',
    marginRight: 5,
  },
  incomeValue: {
    color: '$COLORS.coolColor',
    fontSize: 25,
    marginVertical: 3,
    fontFamily: '$FONTS.bold',
  },
  investValue: {
    color: '$COLORS.detailsColor',
    fontSize: 25,
    marginVertical: 3,
    fontFamily: '$FONTS.bold',
  },
  debitValue: {
    color: '$COLORS.dangerColor',
    fontSize: 25,
    marginVertical: 3,
    fontFamily: '$FONTS.bold',
  },
  incomeAlert: {
    color: '$COLORS.darkColor',
    fontSize: 10,
    fontFamily: '$FONTS.lite',
  },
});
