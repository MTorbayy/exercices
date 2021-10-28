const panels = document.querySelectorAll(".container > *"); 

for(let panel of panels) {
    panel.addEventListener('click', function() { 
        panels.forEach(p => p.classList.remove("active")); 
        panel.classList.add("active"); 
})
}

const panelDiv = document.createElement('div');
console.dir(panelDiv);

panelDiv.style = "background-image: url(images/explore-the-world.jpg)";
panelDiv.className = "panel active";
/*
<div style="background-image: url(images/explore-the-world.jpg)" class="panel active">
<h3>Explore the World</h3>
</div>
*/

