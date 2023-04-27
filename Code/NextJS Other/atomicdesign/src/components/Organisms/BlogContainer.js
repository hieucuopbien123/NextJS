import Title from "../Atoms/Title";
import AuthorDetail from "../Molecules/AuthorDetail";
import BlogContent from "../Molecules/BlogContent";

export default function BlogContainer() {
  return (
    <div className="blog-container">
      <Title />
      <AuthorDetail />
      <BlogContent />
    </div>
  );
}