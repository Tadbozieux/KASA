

import React, { useState } from "react";
import VectorUp from "../../assets/VectorUp.svg";
import VectorDown from "../../assets/VectorDown.svg";
// import "./CustomCollapse.css";

function CollapseMaison({ title, content }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsibleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="customCollapse">
      <div className="blocCollapsible">
        <div
          type="button"
          className="collapsible"
          onClick={() => handleCollapsibleClick()}
        >
          <h2>{title}</h2>
          <img src={collapsed ? VectorUp : VectorDown} alt="Arrow" />
        </div>
        <div className={`content ${collapsed ? "active" : ""}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollapseMaison;