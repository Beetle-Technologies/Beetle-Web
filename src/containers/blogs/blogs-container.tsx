import BlogCard from "../../components/blog/blog-card";
import { BlogPosts } from "../../types";

interface IBlogSection {
  blogPosts: BlogPosts;
}

const BlogSection = ({ blogPosts }: IBlogSection) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts?.article_links?.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BlogSection;
