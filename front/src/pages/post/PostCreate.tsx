import { Section } from "../../components/atomics/sections/sections";
import CreatePostForm from "../../components/templates/content/post/CreatePostForm";

const PostCreatePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Section style={{ width: "40%" }}>
        <CreatePostForm />
      </Section>
    </div>
  );
};

export default PostCreatePage;
