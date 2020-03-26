import { UserState } from "../reducers/types/user";
import { PostState } from "../reducers/types/post";

export type StoreState = {
  user: UserState;
  post: PostState;
};
