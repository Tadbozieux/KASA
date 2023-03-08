import './Collapse.css';
import '../../App.css';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Collapse() {
    const { questionNumber } = useParams();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsibleClick = (e) => {
        const collapsible = e.currentTarget;
        collapsible.classList.toggle('active');
        const content = collapsible.nextElementSibling;
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
        </div>
    );
}
export default Collapse;
