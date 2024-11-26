import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogList.css";

export default function BlogList({
  blogs,
  setBlogs,
  setEditBlog,
  handleDelete,
}) {
  const navigate = useNavigate();

  const handleEdit = (blog) => {
    setEditBlog(blog);
    navigate("/createBlog"); 
  };

  const handleViewDetails = (id) => {
    navigate(`/blog/${id}`); 
  };

  return (
    <div className="my-blogs-container">
      <h2 className="heading">My Blogs</h2>

      {blogs.length === 0 ? (
        <p className="no-blogs">
          No blogs created yet. Go back and create one!
        </p>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card"
              onClick={() => handleViewDetails(blog.id)} 
            >
              {blog.image && (
                <img src={blog.image} alt={blog.title} className="blog-image" />
              )}
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-meta">
                <span className="author-name">
                  Author: {blog.author || "N/A"}
                </span>

                <span>Date: {blog.date}</span>
              </p>
              <div className="blog-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEdit(blog);
                  }}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDelete(blog.id);
                  }}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

