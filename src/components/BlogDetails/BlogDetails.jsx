import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

export default function BlogDetails({ blogs }) {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <div className="blog-details-container">
        <p>Blog not found. Go back to the blog list.</p>
        <button onClick={() => navigate("/blogs")} className="back-button">
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      <h1 className="blog-title">{blog.title}</h1>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className="blog-image" />
      )}
      <p className="blog-meta">Published on: {blog.date}</p>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
      <button onClick={() => navigate("/blogs")} className="back-button">
        Back to Blogs
      </button>
    </div>
  );
}
