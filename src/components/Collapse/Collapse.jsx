import './Collapse.css';
// import '../../App.css';

import React, { useState } from 'react';
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'




function Collapse() {
    const [collapsed, setCollapsed] = useState(Array(4).fill(false));
  
    const handleCollapsibleClick = (index) => {
      const newCollapsed = [...collapsed];
      newCollapsed[index] = !newCollapsed[index];
      setCollapsed(newCollapsed);
    };
  
    const collapsibleContent = [     //creation de l'objet afin d'utiliser .map plutot que X4 les collapses
      {
        title: "Fiabilité",
        content:
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      },
      {
        title: "Respect",
        content:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
      {
        title: "Service",
        content:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
        title: "Sécurité",
        content:
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
    ];
  
    return (       // pour chaque collapse creation d'un bloc
      <div className="totalCollapsible">
        {collapsibleContent.map((item, index) => (
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