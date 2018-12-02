import ReactDOM from "react-dom";
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import ButtonAppBar from "./Navigation";
import BottomAppBar from "./Footer";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ButtonAppBar />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <BottomAppBar />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
