import EStyleSheet from "react-native-extended-stylesheet";
import * as theme from "./styles/constants";

function initTheme() {
  EStyleSheet.build(theme);
}

export default { initTheme };
