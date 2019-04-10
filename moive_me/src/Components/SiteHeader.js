import React from "react";

const SiteHeader = () => {
  return (
    <div>
      <header className="site-header">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <div className="search" />
        </div>
        <h1 className="site-title">Movie DB</h1>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="movie-logo" src="movie-db-logo.svg" alt="" />
        </a>
      </header>
    </div>
  );
};

export default SiteHeader;
