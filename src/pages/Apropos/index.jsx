import "./Apropos.css"

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Apropos() {
  const { questionNumber } = useParams();
  
  const handleCollapsibleClick = (e) => {
    const collapsible = e.currentTarget;
    collapsible.classList.toggle('active');
    const content = collapsible.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }

  return (
    <div>
      <div>
        <button type="button" className="collapsible" onClick={handleCollapsibleClick}>
          Fiabilite
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible" onClick={handleCollapsibleClick}>
          Respect
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible" onClick={handleCollapsibleClick}>
          Service
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible" onClick={handleCollapsibleClick}>
          Securite
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
