import { PostState } from "../types/post";
var yesterDate = new Date();
yesterDate.setDate(yesterDate.getDate() - 1);
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
      _id: "1",
      description: "This is test1",
      postType: "Text Post",
      published: true,
      title: "Sample post1",
      createdAt: new Date()
    },
    {
      _id: "2",
      description: "This is test2",
      postType: "Text Post",
      published: true,
      title: "Sample post2",
      createdAt: yesterDate
    },
    {
      _id: "3",
      description: "This is test3",
      postType: "Video Post",
      published: true,
      title: "Sample post3",
      createdAt: new Date(),
      videoUrl: "https://youtube.com"
    },
    {
      _id: "4",
      description: "This is test4",
      postType: "Video Post",
      published: true,
      title: "Sample post4",
      createdAt: yesterDate,
      videoUrl: "https://youtube.com"
    }
  ]
};
