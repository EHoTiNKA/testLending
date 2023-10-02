import "./styles/NavItem.scss";
import React, { useState } from "react";

const NavItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        className="navItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        {isHovered && <div className="itemHighlighter"></div>}
      </button>
    </>
  );
};

export default NavItem;
