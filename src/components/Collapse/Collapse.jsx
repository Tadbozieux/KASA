import './Collapse.css'
import '../../App.css';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'  // Importation Chevron FontAwesome
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Collapse() {
    const { questionNumber } = useParams();
    const [collapsed, setCollapsed] = useState(false);
    
    // Cette fonction est appelée lorsque l'utilisateur clique sur un collapsible
  const handleCollapsibleClick = (e) => {
    // Récupère le bouton collapsible sur lequel l'utilisateur a cliqué
    const collapsible = e.currentTarget;
    // Ajoute ou enlève la classe "active" au bouton collapsible pour styliser le bouton en conséquence
    collapsible.classList.toggle('active');
    // Récupère l'élément qui suit directement le bouton collapsible, qui est le contenu qui sera caché ou montré
    const content = collapsible.nextElementSibling;
    // Change l'état d'affichage du contenu en fonction de son état actuel
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    setCollapsed(!collapsed);
  }
  
    return (
      <div className='totalCollapsible'>
        <div className='blocCollapsible'>
                <div type="button" className="collapsible" onClick={handleCollapsibleClick}>
                    <h2>Fiabilite</h2>
                    <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
                </div>
                <div className="content">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
            </div>
        <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={handleCollapsibleClick}>
            <h2>Respect</h2>
            <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
          </div>
          <div className="content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </div>
        <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={handleCollapsibleClick}>
            <h2>Service</h2>
            <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
          </div>
          <div className="content">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </div>
        </div>
        <div className='blocCollapsible'>
          <div type="button" className="collapsible" onClick={handleCollapsibleClick}>
            <h2>Sécurité</h2>
            <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
          </div>
          <div className="content">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </div>
      </div>
    );
  }
export default Collapse  