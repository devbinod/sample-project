export interface Post {
  title: string;
  postType: string;
  description: string;
  videoUrl?: string;
  published: boolean;
  createdAt?: Date;
}

export interface PostState {
  posts: Array<Post>;
  post: Post;
}
