var url5 = 'https://bacit.info/hwr/20221115104139-3982a019750b704ee3092c2d78d55946.json'


fetch(url5)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url5input").value = data.Slider1;
        document.querySelector("#slider2url5input").value = data.Slider2;
        document.querySelector("#slider3url5input").value = data.Slider3;
        document.querySelector("#slider4url5input").value = data.Slider4;
        document.querySelector("#slider5url5input").value = data.Slider5;
        document.querySelector("#slider6url5input").value = data.Slider6;
        document.querySelector("#slider7url5input").value = data.Slider7;
        document.querySelector("#slider8url5input").value = data.Slider8;
        document.querySelector("#slider9url5input").value = data.Slider9;
        document.querySelector("#slider10url5input").value = data.Slider10;
        document.querySelector("#slider11url5input").value = data.Slider11;



        document.querySelector("#slider1url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider2url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider3url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider4url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider5url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider6url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider7url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider8url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider9url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider10url5input").style.setProperty('--sliderColor5', data.Farge);
        document.querySelector("#slider11url5input").style.setProperty('--sliderColor5', data.Farge);

        document.querySelector("#navnurl5").style.setProperty('--labelColor5', data.Farge);
    })
