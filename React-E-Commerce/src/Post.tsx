import { useState } from "react";

export const Post = () => {
  const [postTitle, setPostTitle] = useState<string | null>("");

  // custom type that you could use when declaring what a dataset should return for lets say a GET HTTP request from a server or API
  type PostProps = {
    id: number;
    title: string;
    message?: string;
  }[];
  // I designed how my data should return and message is optional ?: also put [] to indicate that data that has this type is in an array

  // example async getcall to API
  async function getPosts(): Promise<PostProps> {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    return res.json();
  }

  const changeTitle = () => {
    setPostTitle(null);
  };
  return (
    <>
      <h1>{postTitle}</h1>
      <PostChild id={postTitle.id} title={postTitle.title} toggle={false} />
    </>
  );
};
// you can declare what types of props/data dynamic child components take
type PostChildProps = {
  id: number;
  title: string;
  toggle: false;
};
// you can extract the proptypes from the interface PostChildProps
// use toggle?: true to make it optional
export default function PostChild({ id, title, toggle }: PostChildProps) {
  return (
    <>
      <h1>hello</h1>
      <p>id: {id}</p>
      <p>id: {title}</p>
      <button></button>
    </>
  );
}
