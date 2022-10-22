import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  configureFonts,
} from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";

type CustomColors = {
  primary1: string;
  light1: string;
  light2: string;
  dark1: string;
  dark2: string;
  backgroundItem: string;
};
type PaperColors = Theme["colors"];
type Colors = PaperColors & CustomColors;
export interface CustomTheme extends Theme {
  colors: Colors;
  roundness: number;
  fonts: any;
}
// const fontConfig = {
// 	medium : {
// 		fontFamily : 'Poppins-Bold'
// 	},
// 	test : {
// 		fontFamily : 'Poppins-Regular'
// 	},
// }
const theme: CustomTheme = {
  ...PaperDefaultTheme,
  roundness: 10,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#181818",
    accent: "#A9A9A9",
    background: "#ffff",
    backgroundItem: "#fff",
    surface: "#92d9f3",
    text: "#181818",
    primary1: "#662d91",
    light1: "#d399fe",
    light2: "#995cc8",
    dark1: "#502671",
    dark2: "#35184b",
    backdrop: "black",
    disabled: "lightgrey",
    error: "#cc3300",
  },
  /*
    
    fonts: {
      regular: "Poppins-Regular",
      medium: "Poppins-Bold",
    },
    */
};

export default theme;
