import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";

export default function Topbar({ user, setUser }) {
  const navigate = useNavigate();

  const [searchActive, setSearchActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setUser(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="https://facebook.com">
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </Link>

        <Link to="https://twitter.com">
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </Link>

        <Link to="https://instagram.com">
          <i className="topIcon fa-brands fa-instagram"></i>
        </Link>

        <Link to="https://linkedin.com">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </Link>
      </div>

      {/* Conditional rendering for mobile view */}
      <div className="topCenter">
        {isMobile ? (
          <div className="topMenuIcon" onClick={toggleMenu}>
            <i class="fa-solid fa-bars"></i> {/* Hamburger Menu */}
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem active">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/sidebar">
                ABOUT
              </Link>
            </li>

            {user && (
              <li className="topListItem">
                <Link className="link" to="/settings">
                  PROFILE
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem">
                <Link className="link" to="/blogs">
                  BLOGLIST
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem">
                <Link className="link" to="/createBlog">
                  CREATE
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </ul>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="mobileMenu">
          <ul className="topList">
            <li className="topListItem active">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/sidebar">
                ABOUT
              </Link>
            </li>

            {user && (
              <li className="topListItem">
                <Link className="link" to="/settings">
                  PROFILE
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem">
                <Link className="link" to="/blogs">
                  BLOGLIST
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem">
                <Link className="link" to="/createBlog">
                  CREATE
                </Link>
              </li>
            )}

            {user && (
              <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li>
            )}

            {!user && (
              <>
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      <div className="topRight">
        <div className="topProfile" onClick={toggleDropdown}>
          {user ? (
            <i
              className="topSearchIcon fa-solid fa-magnifying-glass"
              onClick={toggleSearch}
            ></i>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
              </ul>
              
              
          )}
          
        </div>

        <div className="topSearch">
          {searchActive && (
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
              autoFocus
              onBlur={() => setSearchActive(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}