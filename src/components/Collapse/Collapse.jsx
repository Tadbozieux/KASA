import './Collapse.css';
// import '../../App.css';

import React, { useState } from 'react';
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'




function Collapse({ collapsibleItems, className, customStyle  }) {
    const [collapsed, setCollapsed] = useState(Array(4).fill(false));
  
    const handleCollapsibleClick = (index) => {
      const newCollapsed = [...collapsed];
      newCollapsed[index] = !newCollapsed[index];
      setCollapsed(newCollapsed);
    };
  

  
    return (       // pour chaque collapse creation d'un bloc
      <div className={`totalCollapsible ${className}`}>
        {collapsibleItems.map((item, index) => (
          <div className={`blocCollapsible ${customStyle ? "customStyle" : ""}`} key={index}>
            <div
              type="button"
              className="collapsible"
              onClick={() => handleCollapsibleClick(index)}      // au click fonction handleCollapsibleClick avec indice
            >
              <h2>{item.title}</h2>
              <img src={collapsed[index] ? VectorUp : VectorDown} alt="Arrow" />
            </div>
            <div className={`content ${collapsed[index] ? "active" : ""}`}>
            {Array.isArray(item.content) ? (
              <ul>
                {item.content.map((element, i) => (
                  <li key={i}>{element}</li>
                ))}
              </ul>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    );
  }
  
  export default Collapse;