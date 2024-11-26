
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
import DashBoard from "../dashBoard/DashBoard";

export default function CreateBlog({ addBlog, blog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState(""); // State for author name
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null); // State for image
  const [imagePreview, setImagePreview] = useState(""); // State for image preview
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setTags(blog.tags.join(", "));
      setAuthor(blog.author || ""); // Set the author name
      setDate(blog.date);
      setImage(blog.image);
      setImagePreview(blog.image);
    }
  }, [blog]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleSubmit = () => {
    if (!title || !content || !author) {
      alert("Please fill out all required fields.");
      return;
    }
    const newBlog = {
      id: blog ? blog.id : Date.now(),
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      author,
      date: date || new Date().toLocaleDateString(),
      image: imagePreview, // Save the preview URL (you can replace this with a backend-uploaded URL)
    };

    addBlog(newBlog);
    navigate("/blogs");
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["blockquote", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
    "blockquote",
    "code-block",
  ];

  return (
    <>
      <div className="create-blog-container">
        <h2>{blog ? "Edit Blog Post" : "Create a New Blog Post"}</h2>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="blog-input title-input"
        />

        <div className="quill-editor">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            placeholder="Write your content here..."
          />
        </div>

        <input
          type="text"
          placeholder="Add Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="blog-input tags-input"
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="blog-input author-input"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="blog-input date-input"
        />

        <div className="image-upload">
          <label htmlFor="imageInput">Upload Image</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="blog-input image-input"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Blog Preview"
              className="preview-image"
            />
          )}
        </div>

        <button onClick={handleSubmit} className="publish-button">
          {blog ? "Save Changes" : "Publish"}
        </button>
      </div>
    </>
  );
}
