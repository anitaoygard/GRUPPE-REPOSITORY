function exportJson() {
    var Navnvalue = document.getElementById('navnefelt').value;
    var Fargevalue = document.getElementById('farge').value;
    var Slider1value = document.getElementById('slider1').value;
    var Slider2value = document.getElementById('slider2').value;
    var Slider3value = document.getElementById('slider3').value;
    var Slider4value = document.getElementById('slider4').value;
    var Slider5value = document.getElementById('slider5').value;
    var Slider6value = document.getElementById('slider6').value;
    var Slider7value = document.getElementById('slider7').value;
    var Slider8value = document.getElementById('slider8').value;
    var Slider9value = document.getElementById('slider9').value;
    var Slider10value = document.getElementById('slider10').value;
    var Slider11value = document.getElementById('slider11').value;
    var jsonfil = {Navn: Navnvalue, Farge: Fargevalue, Slider1: Slider1value, Slider2: Slider2value, Slider3: Slider3value, Slider4: Slider4value, Slider5: Slider5value,
        Slider6: Slider6value, Slider7: Slider7value, Slider8: Slider8value, Slider9: Slider9value, Slider10: Slider10value, Slider11: Slider11value
    };

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




