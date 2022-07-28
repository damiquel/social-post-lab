import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
}

const PostForm = ({ onAdd }: Props) => {
  return <div className="PostForm"> Waddup my boy!</div>;
};

export default PostForm;
