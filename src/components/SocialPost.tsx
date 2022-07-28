import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPost.css";

const SocialPost = () => {
  const [post, setPosts] = useState<Post[]>(
    /*(<Post> is an annotation*/ [
      {
        title: "Pasta",
        thought: "off the chain",
      },
      {
        title: "React",
        thought: "Shit is hard",
      },
    ]
  );

  const deleteAPost = (index: number): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };
  return (
    <div className="SocialPost">
      <PostForm />
      <ul>
        {post.map((item, index) => (
          <PostInList
            post={item}
            onDelete={() => deleteAPost(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPost;
