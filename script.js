import {Panel} from './js/panel.js';


const panels = [
    new Panel("city on winter"),
    new Panel("explore the world"),
    new Panel("mountains and clouds"),
    new Panel("sunny beach"),
    new Panel("wild forest")
];

Panel.render(panels) // Invoque render sur toutes les instances du tableau car c'est une méthode de classe.


//for (let image of images) {
//    const panel = createPanel(image);
//    panel.addEventListener('click', function() { 
//        //panels.forEach(p => p.classList.remove("active")); 
//        panel.classList.add("active"); 
//    });
//}