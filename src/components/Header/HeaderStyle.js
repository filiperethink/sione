import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const majorVersionIOS = parseInt(Platform.Version, 10);
const androidPlatform = Platform.OS === 'android';

export const styles = EStyleSheet.create({
  wrapperHeader: {
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 30,
  },

  wrapperAvatar: {
    width: androidPlatform ? 65 : 55,
    height: androidPlatform ? 65 : 55,
    borderWidth: 2,
    borderColor: '$COLORS.baseColor',
    borderRadius: androidPlatform ? 32 : 27,
    marginBottom: 5,
  },
  headerInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 12,
    fontFamily: '$FONTS.normal',
    color: '$COLORS.darkColor',
  },
  userFirstName: {
    fontSize: '$SIZE.medium',
    fontFamily: '$FONTS.bold',
    color: '$COLORS.baseColor',
  },
});
