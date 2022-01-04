const panels = document.querySelectorAll('.panel');
console.log(panels); 

const closePanels = () => {
    panels.forEach( panel => {
        panel.classList.remove('active'); 
    })
}

for (const panel of panels) {
    panel.addEventListener('click', function(){
        closePanels(); 
        panel.classList.add('active'); 
    }); 
}