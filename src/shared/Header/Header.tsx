import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">

          <div className="header-home">
            <i className="home-icon"></i>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>

          <div className="header-posts">
            <Link to="/posts" className="nav-link">
              Посты
            </Link>
          </div>

          <div className="header-search">
            <i className="search-icon"></i>
            <input
              type="text"
              placeholder="search"
              className="search-input"
            />
          </div>
          
        </div>

        <div className="header-profile">
          <i className="profile-icon"></i>
        </div>
      </div>
    </header>
  );
}
