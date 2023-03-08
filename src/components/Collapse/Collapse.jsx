import './Collapse.css'
import '../../App.css';
import { useParams } from 'react-router-dom';


function Collapse() {
    const { questionNumber } = useParams();
    
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
export default Collapse  