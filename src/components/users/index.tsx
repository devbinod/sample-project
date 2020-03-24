import React, { Component } from "react";
import container, { MapDispatchToProps, MapStateToProps } from "./container";

export type Props = MapDispatchToProps & MapStateToProps;

export type State = {
  loading: boolean;
};

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

  // getUserList = () => {
  //   const {
  //     user: { users }
  //   } = this.props;
  //   return (
  //     <div>
  //       <table>
  //         <tr>
  //           <td>Id</td>
  //           <td>Username</td>
  //           <td>Address</td>
  //           <td>Phone No</td>
  //         </tr>

  //         {users.map((user: User) => {
  //           return (
  //             <tr>
  //               <td>{user.id}</td>
  //               <td>{user.name}</td>
  //               <td>{user.address.street}</td>
  //               <td>{user.phone}</td>
  //             </tr>
  //           );
  //         })}
  //       </table>
  //     </div>
  //   );
  // };

  render() {
    console.log("this ", this.props.user);
    return <div>sdfs</div>;
  }
}

export default container(UserList);
