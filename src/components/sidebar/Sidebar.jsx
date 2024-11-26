import React, { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  
  return (
    <div>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT Us</span>
        <img
          className="sidebarImg"
          src="src\assets\Img\unnamed.png"
          alt=""
        />
        <div className="sidebar-border">
          {/* <p className="sidebar-content"> */}
          <h3 className="sidebar-margin"> Welcome to NeuformBlog!</h3>
          <p className="sidebar-p">
            At NeuformBlog, we are passionate about fostering a community where
            ideas, creativity, and inspiration come to life through the power of
            story telling. Our platform empowers individuals and businesses to
            share their unique voices, engage with their audience, and make
            meaningful connections through blogging. Founded on the principles
            of innovation and collaboration, NeuformBlog is more than just a
            blogging platform—it's a space where writers, readers, and thought
            leaders come together to explore new perspectives, spark
            conversations, and create impact.
          </p>
          <h3 className="sidebar-margin">What We Offer:</h3>
          <ul>
            <li className="sidebar-p">
              User-Friendly Blogging Tools: NeuformBlog provides an intuitive
              interface that makes creating and managing blogs effortless for
              everyone—from beginners to professionals.
            </li>
            <li className="sidebar-p">
              Customization and Creativity: Personalize your blog to reflect
              your identity with a wide range of design options and features.
            </li>
            <li className="sidebar-p">
              Community Engagement: Connect with readers and like-minded
              bloggers to build meaningful relationships and grow your audience.
            </li>
            <li className="sidebar-p">
              Insights and Analytics: Gain valuable insights into your blog's
              performance to help you improve and refine your content strategy.
            </li>
          </ul>
          <h3 className="sidebar-margin">Our Mission:</h3>
          <p className="sidebar-p">
            We aim to transform the way people share knowledge and stories by
            providing a seamless blogging experience that inspires and connects.
            At NeuformBlog, we believe that every voice deserves to be heard,
            and every story has the potential to inspire change.
          </p>
          <p className="sidebar-p">
            Join us at NeuformBlog and be a part of a vibrant community where
            ideas take shape and innovation leads the way.
          </p>
          {/* </p> */}
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle" onClick={toggleCategories}>
          CATEGORIES {isCategoriesOpen ? "▲" : "▼"}
        </span>
        {isCategoriesOpen && (
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
        )}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebarIconLink"
          >
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebarIconLink"
          >
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebarIconLink"
          >
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebarIconLink"
          >
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
