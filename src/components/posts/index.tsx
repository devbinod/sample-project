import React, { Component } from "react";

import { withStyles,WithStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
  colors
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { MapStateToProps, MapDispatchToProps } from "./container";
// import { API } from "../../interceptor/index";
// import PostDetail from "./post";
const styles = (theme: Theme) => ({
  root: {
    flexGrod: 1,
    margin: 30
  },
  post: {
    margin: 10
  },
  fabButton: {
    float: "right"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  modelMinimumHeight: {
    minHeight: 300,
    minwidth: 300
  }
});

export type Props = MapStateToProps & MapDispatchToProps &WithStyles
export type State = {
    loading: boolean
}
export class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        loading: false
    }
  
  }

/
  render() {

    return (
      <div className={classes.root}>
      
      </div>
    );
  }
}

export default withStyles(styles)(Home);
