const panels = document.querySelectorAll(".container > *"); 

for (let panel of panels) {
    panel.addEventListener('click', function() { 
        panels.forEach(p => p.classList.remove("active")); 
        panel.classList.add("active"); 
 });
}

const panelDiv = document.createElement('div'); //On crée un élément html div dans une constante panelDiv
console.dir(panelDiv);

panelDiv.style = "background-image: url(images/city-on-winter.jpg)"; //On définit une image en fond d'écran pour cette constante
panelDiv.className = "panel active"; //on lui attribue la classe panel active

document.querySelector(".container").appendChild(panelDiv); //Dans l'élément container on ajoute panelDiv. Il retrouve les mêmes mises en formes css correspondant à la classe panel active.
/*
<div style="background-image: url(images/explore-the-world.jpg)" class="panel active">
<h3>Explore the World</h3>
</div>
*/

