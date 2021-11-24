import {Panel} from './js/panel.js';


const panels = [
    new Panel("city on winter"),
    new Panel("explore the world"),
    new Panel("mountains and clouds"),
    new Panel("sunny beach"),
    new Panel("wild forest")
];

buildPage();
addEventListener('hashchange', buildPage);

function buildPage() {
    document.querySelector('.container').innerHTML = '';
    switch (location.hash.substring(1)) { //Pour récupérer le #
        case 'home' :
            updateFooterLink("admin"); 
            Panel.render(panels); // Invoque render sur toutes les instances du tableau car c'est une méthode de classe.
            break;
        case 'admin' :
            updateFooterLink("home"); 
            break;
    } 

    function updateFooterLink(route) {
        const footerLink = document.querySelector('footer a');
        footerLink.href = "#" + route;
        footerLink.innerText = route;
    }
}


