import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#1de9b6"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#333"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    }
  }
});

export default theme;
