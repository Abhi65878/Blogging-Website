import React from "react";
import { useNavigate } from "react-router-dom";
import "./posts.css";

export default function Posts({ blogs = [] }) {
  const navigate = useNavigate();

  const defaultBlogs = [
    {
      id: 1,
      title: "Understanding React Basics",
      author: "John Doe",
      date: "2024-11-25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "JavaScript Tips and Tricks",
      author: "Jane Smith",
      date: "2024-11-20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "The Power of TypeScript",
      author: "Robert Brown",
      date: "2024-11-18",
      image: "https://via.placeholder.com/150",
    },
  ];

  const blogList = blogs.length > 0 ? blogs : defaultBlogs;

  const handlePostClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="posts-container">
      <h2 className="posts-heading">All Blogs</h2>
      {blogList.length === 0 ? (
        <p className="no-posts">No blogs available yet.</p>
      ) : (
        <div className="posts-grid">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="post-card"
              onClick={() => handlePostClick(blog.id)}
            >
              {blog.image && (
                <img src={blog.image} alt={blog.title} className="post-image" />
              )}
              <h3 className="post-title">{blog.title}</h3>
              <p className="post-meta">
                <span className="author-name">
                  Author: {blog.author || "N/A"}
                </span>
                <span className="author-name">Date: {blog.date}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
