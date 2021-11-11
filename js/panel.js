export class Panel {
    constructor(title = "no title") {
        const div = document.createElement('div'); //On crée un élément html div dans une constante div
        this.html = div;
        this.initialize(div, title);
    }

    initialize(div, title) {
        //div.style = "background-image: url(images/" + img + ".jpg)"; //On définit une image en fond d'écran pour cette constante
        div.style = "background-image: url(images/city-on-winter.jpg)";
        div.className = "panel"; //on lui attribue la classe panel active
        div.innerHTML = "<h3>" + title + "</h3>";
    }

    render() { //rendu. static : méthode de classe. Séparé du reste car processus lourd, pour laisser la possibilité de l'invoquer une seule fois sur l'ensemble des instances
        document.querySelector(".container").appendChild(this.html); //Dans l'élément container on ajoute div. Il retrouve les mêmes mises en formes css correspondant à la classe panel active.
    }
}

