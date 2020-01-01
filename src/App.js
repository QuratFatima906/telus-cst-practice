import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/Theme/Theme";
import Login from '../src/containers/Login';
import Dashboard from "../src/containers/Dashboard";
import Layout from "../src/Hoc/Layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Login />
        {/* <Dashboard /> */}
      </Layout>
    </ThemeProvider>
  );
}
export default App;
