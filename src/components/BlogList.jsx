import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import "../style/styles.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => setBlogs(res.data.posts))
      .catch((err) => console.error(err));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blog-container">

      <h2 className="blog-title">Blogs</h2>

      <input 
        type="text" 
        placeholder="Search blogs..." 
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p className="no-blogs">No blogs found.</p>
      )}
    </div>
  );
};

export default BlogList;
