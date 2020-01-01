import React, { Component } from 'react';

import Grid from "@material-ui/core/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Headers/Header/Header";
import Aux from '../Hoc/Auxiliary/Auxiliary';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import OrgHeading from '../components/OrgHeading/OrgHeading';
import OrgTable from '../components/Tables/OrgTable/OrgTable';
// import OrgEventLog from '../components/Tables/OrgEventLog/OrgEventLog';

class Dashboard extends Component {
  state = {
    //Standard drawer is closed with icons only
    isOpenDrawer: false,
    //First card is always clicked to populate initial data
    cardClicked: true,
  };
  //function to open drawer
  drawerHandler = () => {
    this.setState({ isOpenDrawer: true });
  }
  //Toogle Drawer 
  sideDrawerToogleHandler = () => {
    this.setState((prevState) => {
      return { isOpenDrawer: !prevState.isOpenDrawer };
    });
  }

  //Toogle card Clicked state
  toogleCard = () => {
    this.setState((prevState) => {
      return { cardClicked: !prevState.cardClicked }
    });
  }
  render() {
    return (
      <Aux>
        <Header isOpen={this.state.isOpenDrawer}
          menuClicked={this.sideDrawerToogleHandler}
        />
        <SideDrawer open={this.state.isOpenDrawer} />
        <Grid container direction="row"
          justify="space-around"
          alignItems="center"
          style={{ width: 'calc(100vw - 80px)', marginLeft: '80px', marginTop: '15px', paddingRight: '15px' }}
        >
          <Grid container>
            <Card active={this.state.cardClicked} orgName="Global Profile" numOfSims="59" status="Connected" simsActivated="45" />
            <Card active={!this.state.cardClicked} orgName="Domestic Profile" numOfSims="59" status="Not Connected" simsActivated="45" />
          </Grid>
          {/* Organization Heading row */}
          <Grid container justify="space-between">
            <Grid item md={8}>
              <OrgHeading />
            </Grid>
            <Grid item md={4}>
              {/* <OrgEventLog /> */}
            </Grid>
          </Grid>
          <Grid container >
          <Grid item md={8}>
              <OrgTable />
            </Grid>
          </Grid>

        </Grid>
      </Aux>
    );
  }
}

export default Dashboard;
