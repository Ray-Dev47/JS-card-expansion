const panels = document.querySelectorAll('.panel');

// console.log(panels);
// for(let i = 0; i < panels.length; i++){
//     console.log(panels[i]);
// }

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();     // called function remove
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

}

