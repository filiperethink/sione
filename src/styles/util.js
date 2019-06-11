import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

export const widthPercentageToDP = widthPercent =>
  PixelRatio.roundToNearestPixel((width * parseFloat(widthPercent)) / 100);

export const heightPercentageToDP = heightPercent =>
  PixelRatio.roundToNearestPixel((height * parseFloat(heightPercent)) / 100);
