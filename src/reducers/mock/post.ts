import { PostState } from "../types/post";

export const mockPost: PostState = {
  post: {
    description: "This is test",
    postType: "Text Post",
    published: true,
    title: "Sample post",
    createdAt: new Date()
  },
  posts: [
    {
      description: "This is test1",
      postType: "Text Post",
      published: true,
      title: "Sample post1",
      createdAt: new Date()
    },
    {
      description: "This is test2",
      postType: "Text Post",
      published: true,
      title: "Sample post2",
      createdAt: new Date()
    },
    {
      description: "This is test3",
      postType: "Video Post",
      published: true,
      title: "Sample post3",
      createdAt: new Date(),
      videoUrl: "https://youtube.com"
    },
    {
      description: "This is test4",
      postType: "Video Post",
      published: true,
      title: "Sample post4",
      createdAt: new Date(),
      videoUrl: "https://youtube.com"
    }
  ]
};
