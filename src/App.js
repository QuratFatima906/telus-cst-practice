import React from "react";

import "./App.css";
import { grey } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/Theme/Theme";
import Login from '../src/containers/Login';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ background: grey[50] }}>
       <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
