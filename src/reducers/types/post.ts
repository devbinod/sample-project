export type PostType = "Text Post" | "Video Post";

export interface Post {
  [key: string]: any;
  _id?: string;
  title: string;
  postType: PostType;
  description: string;
  videoUrl?: string;
  published?: boolean;
  createdAt?: Date;
}

export interface PostState {
  posts: Array<Post>;
  post: Post;
}
