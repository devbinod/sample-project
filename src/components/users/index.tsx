import React, { Component } from "react";
import container, { MapDispatchToProps, MapStateToProps } from "./container";
import { User } from "../../reducers/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid
} from "@material-ui/core";
import styled from "styled-components";

import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

export type Props = MapDispatchToProps & MapStateToProps & WithStyles;

export type State = {
  loading: boolean;
};

const styles = () =>
  createStyles({
    root: {
      margin: 30,
      padding: 30,
      background: "#fff"
    },
    container: {
      maxHeight: 440
    },
    tableHeader: {
      backgroundColor: "rgba(249, 245, 245, 0.87)"
    }
  });
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props.getAllUser();
  }

  getUserList = () => {
    const {
      user: { userList },
      classes
    } = this.props;
    return (
      <Grid className={classes.root}>
        <Title>User List</Title>
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user: User) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address.street}</TableCell>
                  <TableCell>{user.website}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  };

  render() {
    const {
      user: { userList }
    } = this.props;

    return (
      <div>
        {userList.length > 0 ? this.getUserList() : <div>loading.....</div>}
      </div>
    );
  }
}

export default container(withStyles(styles)(UserList));
