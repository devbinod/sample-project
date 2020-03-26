import { ThunkDispatch } from "redux-thunk";
import { PostState, Post } from "../../reducers/types/post";
import { Action } from "redux";
import { StoreState } from "../../store/storeType";
import { connect } from "react-redux";
import { getAllPost, getSinglePost } from "../../actions/post";

export interface MapDispatchToProps {
  getAllPost: () => void;
  getSinglePost: (id: string) => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<Post, null, Action>
): MapDispatchToProps => {
  return {
    getAllPost: () => dispatch(getAllPost()),
    getSinglePost: (id: string) => dispatch(getSinglePost(id))
  };
};

export interface MapStateToProps {
  post: PostState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    post: state.post
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
