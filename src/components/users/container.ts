import { ThunkDispatch } from "redux-thunk";
import { User, UserState } from "../../reducers/types/user";
import { Action } from "redux";
import { getAllUsers, getSingleUser } from "../../actions/user";
import { StoreState } from "../../store/storeType";
import { connect } from "react-redux";

export interface MapDispatchToProps {
  getAllUser: () => void;
  getSingleUser: (id: number) => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<User, null, Action>
): MapDispatchToProps => {
  return {
    getAllUser: () => dispatch(getAllUsers()),
    getSingleUser: (id: number) => dispatch(getSingleUser(id))
  };
};

export interface MapStateToProps {
  user: UserState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  console.log(`states=======`, state);
  return {
    user: state.users
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
