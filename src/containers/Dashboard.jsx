import React from "react";

import { grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Headers/Header/Header";
import Button from '../components/Button/Button';

function Dashboard() {
  return (
      <div className="App" style={{ background: grey[50] }}>
        <Header />
        <Grid container>
          <Card active />
          <Card />
          <Button>Hello Qurat</Button>
        </Grid>
      </div>
  );
}

export default Dashboard;
