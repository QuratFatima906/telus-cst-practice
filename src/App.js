import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/Theme/Theme";
import Login from "../src/containers/Login";
import Dashboard from "../src/containers/Dashboard";
import Layout from "../src/Hoc/Layout/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}
export default App;
