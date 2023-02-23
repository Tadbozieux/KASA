
import "./Apropos.css"

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Apropos() {
  const { questionNumber } = useParams();
//Le code est encapsulé dans une fonction qui est appelée lorsque l'événement window.onload est déclenché
// Cela garantit que le code ne s'exécute qu'après le chargement complet de la page.
  useEffect(() => {
    window.onload = function () {  
      let coll = document.getElementsByClassName('collapsible');
      let i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
          this.classList.toggle('active');
          let content = this.nextElementSibling;
          if (content.style.display === 'block') {
            content.style.display = 'none';
          } else {
            content.style.display = 'block';
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <div>
        <button type="button" className="collapsible">
          Fiabilite
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible">
          Respect
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible">
          Service
        </button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div>
        <button type="button" className="collapsible">
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
