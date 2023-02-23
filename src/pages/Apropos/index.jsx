import { useParams } from 'react-router-dom'
import "./Apropos.css"


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function Apropos() {
    const { questionNumber } = useParams()
 
    return (
    <div>  
        <div>
            <button type="button" class="collapsible">Fiabilité</button>
            <div class="content">
            <p>Lorem ipsum...</p>
            </div>
        </div>
        <div>
            <button type="button" class="collapsible">Respect</button>
            <div class="content">
            <p>Lorem ipsum...</p>
            </div>
        </div>
        <div>
            <button type="button" class="collapsible">Service</button>
            <div class="content">
            <p>Lorem ipsum...</p>
            </div>
        </div>
        <div>
            <button type="button" class="collapsible">Securité</button>
            <div class="content">
            <p>Lorem ipsum...</p>
            </div>
        </div>

    </div>  
    )
}




export default Apropos