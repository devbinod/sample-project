import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  appbar: {
    alignItems: "center"
  }
});
const NavBar = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
