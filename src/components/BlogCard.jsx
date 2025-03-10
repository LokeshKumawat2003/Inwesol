import "../style/styles.css";

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <h3 className="blog-title">{blog.title}</h3>
    <p className="blog-body">{blog.body.substring(0, 1000)}...</p>
    
  </div>
);

export default BlogCard;
