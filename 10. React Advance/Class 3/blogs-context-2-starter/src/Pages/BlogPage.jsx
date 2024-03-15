import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import BlogDetails from "./BlogDetails"

const BlogPage = () => {
  const [blog, setBlog] = useState();
  const [relatedBlog, setRelatedBlog] = useState();
  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  const { loading, setLoading } = useContext(AppContext);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlog(data.relatedBlog);
    } catch (error) {
      console.log("Error found");
      setBlog(null);
      setRelatedBlog([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>

      {loading ? (
        <p>Loading</p>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedBlog.map((post) => (
            <div>
              <BlogDetails key={post.id} post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>No Blog Found</div>
      )}
    </div>
  );
};

export default BlogPage;
