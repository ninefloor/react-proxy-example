import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="header">
        <h1>mini codestates</h1>
      </div>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </div>
  );
};

export default Header;
