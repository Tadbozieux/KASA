import './Collapse.css';
// import '../../App.css';

import React, { useState } from 'react';
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'




function Collapse({ collapsibleItems  }) {
    const [collapsed, setCollapsed] = useState(Array(4).fill(false));
  
    const handleCollapsibleClick = (index) => {
      const newCollapsed = [...collapsed];
      newCollapsed[index] = !newCollapsed[index];
      setCollapsed(newCollapsed);
    };
  

  
    return (       // pour chaque collapse creation d'un bloc
      <div className="totalCollapsible">
        {collapsibleItems .map((item, index) => (
          <div className="blocCollapsible" key={index}>
            <div
              type="button"
              className="collapsible"
              onClick={() => handleCollapsibleClick(index)}      // au click fonction handleCollapsibleClick avec indice
            >
              <h2>{item.title}</h2>
              <img src={collapsed[index] ? VectorUp : VectorDown} alt="Arrow" />
            </div>
            <div className={`content ${collapsed[index] ? "active" : ""}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Collapse;