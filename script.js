//const panels = document.querySelectorAll(".container > *"); 

/*for (let panel of panels) {
    
 });
}*/

const images = [
    "city-on-winter",
    "explore-the-world",
    "mountains-and-clouds",
    "sunny-beach",
    "wild-forest"
];

for (let image of images) {
    const panel = createPanel(image);
    panel.addEventListener('click', function() { 
        //panels.forEach(p => p.classList.remove("active")); 
        panel.classList.add("active"); 
    });
}

function createPanel(img) {
    const panelDiv = document.createElement('div'); //On crée un élément html div dans une constante panelDiv
    //console.dir(panelDiv);
    panelDiv.style = "background-image: url(images/" + img + ".jpg)"; //On définit une image en fond d'écran pour cette constante
    panelDiv.className = "panel"; //on lui attribue la classe panel active
    panelDiv.innerHTML = "<h3>Titre</h3>";
    document.querySelector(".container").appendChild(panelDiv); //Dans l'élément container on ajoute panelDiv. Il retrouve les mêmes mises en formes css correspondant à la classe panel active.
    return panelDiv;
}


/*
<div style="background-image: url(images/explore-the-world.jpg)" class="panel active">
<h3>Explore the World</h3>
</div>
*/

