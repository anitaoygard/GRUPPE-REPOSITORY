const sliders = document.querySelectorAll('.slider-wrapper');

sliders.forEach(slider=>{slider.addEventListener('input', ()=>{
    slider.lastElementChild.innerHTML = slider.firstElementChild.value
})
});

function exportJson() {
    var Navnvalue = document.getElementById('navnefelt').value;
    var Fargevalue = document.getElementById('farge').value;
    var Slider1value = document.getElementById('slider1').value;
    var Slider2value = document.getElementById('slider2').value;
    var Slider3value = document.getElementById('slider3').value;
    var Slider4value = document.getElementById('slider4').value;
    var Slider5value = document.getElementById('slider5').value;
    var jsonfil = {Navn: Navnvalue, Farge: Fargevalue, Slider1: Slider1value, Slider2: Slider2value, Slider3: Slider3value, Slider4: Slider4value, Slider5: Slider5value};
    fetch('https://bacit.info', {method: 'POST', headers: {
            'Content-Type': 'application/json',},
        body: JSON.stringify(jsonfil),})
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
