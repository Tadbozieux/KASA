import './Collapse.css';
import '../../App.css';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Collapse() {
const { questionNumber } = useParams();
const [collapsed, setCollapsed] = useState(Array(4).fill(false));
    
const handleCollapsibleClick = (index) => {
  const newCollapsed = [...collapsed];
  newCollapsed[index] = !newCollapsed[index];
  setCollapsed(newCollapsed);
}

return (
  <div className='totalCollapsible'>
      <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={() => handleCollapsibleClick(0)}>
              <h2>Fiabilite</h2>
              <FontAwesomeIcon icon={collapsed[0] ? faChevronUp : faChevronDown} />
          </div>
          <div className={`content ${collapsed[0] ? 'active' : ''}`}>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
      </div>
      <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={() => handleCollapsibleClick(1)}>
              <h2>Respect</h2>
              <FontAwesomeIcon icon={collapsed[1] ? faChevronUp : faChevronDown} />
          </div>
          <div className={`content ${collapsed[1] ? 'active' : ''}`}>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
      </div>
      <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={() => handleCollapsibleClick(2)}>
              <h2>Service</h2>
              <FontAwesomeIcon icon={collapsed[2] ? faChevronUp : faChevronDown} />
          </div>
          <div className={`content ${collapsed[2] ? 'active' : ''}`}>
              <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question..</p>
          </div>
      </div>
      <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={() => handleCollapsibleClick(3)}>
              <h2>Sécurité</h2>
              <FontAwesomeIcon icon={collapsed[3] ? faChevronUp : faChevronDown} />
          </div>
          <div className={`content ${collapsed[3] ? 'active' : ''}`}>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes..</p>
          </div>
      </div>
  </div>
);

  }
export default Collapse  