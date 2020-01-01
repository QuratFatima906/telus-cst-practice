import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import WarningIcon from '../../Icons/WarningIcon/Warning';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100%',
  },
  Title: {
    fontSize: '21px',
  }
};

const OrgEventLog = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <p className={classes.Title}>Organization Event Log</p>
      {/* <span style={{ display: 'flex', alignItems:'flex-start', border: '1px solid red'}}>
        <WarningIcon />
        <span style={{ margin: 0, border: '1px solid red', padding:0 }}>
          <p><b>October 17, 2019 09:59 AM EDT</b></p>
          <p>New PDP Context successfully activated with SGSN CP=213.181.61.140, DP=213.181.61.140.</p>
        </span>
      </span> */}
      <Grid container>
        <Grid item md={1}>
          <WarningIcon />
        </Grid>
        <Grid item md={11}>
          <p><b>October 17, 2019 09:59 AM EDT</b></p>
          <p>New PDP Context successfully activated with SGSN CP=213.181.61.140, DP=213.181.61.140.</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(OrgEventLog);