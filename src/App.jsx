import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Login from "./pages/login/Login";
import Register from "/src/pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import CreateBlog from "./components/createBlog/CreateBlog.jsx";
import DashBoard from "./components/dashBoard/DashBoard.jsx";
import BlogList from "./components/blogList/BlogList.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Posts from "./components/posts/Posts.jsx";

import "./App.css";

const App = () => {
  const [user, setUser] = useState(true); 
  const [blogs, setBlogs] = useState([]); 
  const [editBlog, setEditBlog] = useState(null);

  const addBlog = (newBlog) => {
    if (editBlog) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === editBlog.id ? { ...blog, ...newBlog } : blog
        )
      );
    } else {
      setBlogs([...blogs, newBlog]);
    }
    setEditBlog(null); 
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Router>
      <TopBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<Home blogs={blogs} />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<DashBoard />} />
        {/* <Route path="/login" element={user ? <Home /> : <Login />} /> */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route
          path="/createBlog"
          element={
            user ? (
              <CreateBlog addBlog={addBlog} blog={editBlog} />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
        <Route
          path="/blogs"
          element={
            <BlogList
              blogs={blogs}
              setBlogs={setBlogs}
              setEditBlog={setEditBlog}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
