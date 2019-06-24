import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  loadingWrapper: {
    ...EStyleSheet.absoluteFill,
    zIndex: 9999,
    backgroundColor: '$COLORS.detailsColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 25,
    fontFamily: '$FONTS.bold',
    color: '$COLORS.baseColor',
  },
});
