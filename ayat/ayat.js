var url6 = 'https://bacit.info/hwr/20221115111205-31b5094714a420e0bb6ff86469b0817d.json'

fetch(url6)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url6input").value = data.Slider1;
        document.querySelector("#slider2url6input").value = data.Slider2;
        document.querySelector("#slider3url6input").value = data.Slider3;
        document.querySelector("#slider4url6input").value = data.Slider4;
        document.querySelector("#slider5url6input").value = data.Slider5;
        document.querySelector("#slider6url6input").value = data.Slider6;
        document.querySelector("#slider7url6input").value = data.Slider7;
        document.querySelector("#slider8url6input").value = data.Slider8;
        document.querySelector("#slider9url6input").value = data.Slider9;
        document.querySelector("#slider10url6input").value = data.Slider10;
        document.querySelector("#slider11url6input").value = data.Slider11;



        document.querySelector("#slider1url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider2url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider3url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider4url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider5url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider6url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider7url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider8url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider9url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider10url6input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider11url6input").style.setProperty('--sliderColor2', data.Farge);

        document.querySelector("#navnurl2").style.setProperty('--labelColor2', data.Farge);
    })
