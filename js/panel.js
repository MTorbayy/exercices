export class Panel {
    constructor(title = "no title") {
        const div = document.createElement('div'); //On crée un élément html div dans une constante div
        this.html = div;
        this.initialize(div, title);
        this.listenClickEvent();
    }

    initialize(div, title) {
        //div.style = "background-image: url(images/" + img + ".jpg)"; //On définit une image en fond d'écran pour cette constante
        div.style = "background-image: url(images/city-on-winter.jpg)";
        div.className = "panel"; //on lui attribue la classe panel active
        div.innerHTML = `<h3>${capitalizeTitle()}</h3>`;

        function capitalizeTitle() { 
            // mon super titre
            //const words = title.split(' '); // ["mon", "super", "titre"]
            //let newTitle = "";
            //words.forEach(w => { //mon (1er tour de boucle)
            //    let first = w[0].charAt(0); //m
            //    first = first.toUpperCase(); //M
            //    const rest = w.slice(1); // mon ---> on
            //    newTitle += first + rest + " "; // ---> Mon
            //});

            //Version simplifiée :
            const words = title.split(' ');
            
            const result = words.map(w => { 
                let first = w[0].charAt(0); 
                first = first.toUpperCase(); 
                const rest = w.slice(1);
                return first + rest + " "; 
            });

            return result.join(' '); // Mon Super Titre
        }
    }

    listenClickEvent() {
        this.html.addEventListener("click", () => {
            Array
            .from(this.html.parentNode.children) //Array.from pour transformer en tableau et utiliser forEach.
            .forEach(p => p.classList.remove("active"));
            // .parentNode.children : pour remonter de la div jusqu'au parent puis tous les enfants
            this.html.classList.add("active");
        });
    }

    static render(panels) { //rendu. static : méthode de classe. Séparé du reste car processus lourd, pour laisser la possibilité de l'invoquer une seule fois sur l'ensemble des instances
        panels[0].html.classList.add('active');
        panels.forEach((p) => {
            document
            .querySelector(".container")
            .appendChild(p.html); //Dans l'élément container on ajoute div. Il retrouve les mêmes mises en formes css correspondant à la classe panel active.
        });
    }
}

