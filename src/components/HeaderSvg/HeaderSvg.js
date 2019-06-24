import React from "react";
import Svg, { Path } from "react-native-svg";

import { styles } from "./HeaderSvgStyle";

const HeaderSvg = props => (
  <Svg style={styles.container} fill="none" {...props}>
    <Path
      d="M374 0H0v133.896c147.091 32.406 228.965 31.87 500 1V0z"
      fill="#857CBF"
    />
  </Svg>
);

export default HeaderSvg;

// Original d="M374 0H0v133.896c147.091 32.406 228.965 31.87 374 0V0z"
