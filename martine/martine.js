var url2 = 'https://bacit.info/hwr/20221115105925-a9a7509ca97e6dbc3b230c7a9345223c.json'

fetch(url2)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url2input").value = data.Slider1;
        document.querySelector("#slider2url2input").value = data.Slider2;
        document.querySelector("#slider3url2input").value = data.Slider3;
        document.querySelector("#slider4url2input").value = data.Slider4;
        document.querySelector("#slider5url2input").value = data.Slider5;
        document.querySelector("#slider6url2input").value = data.Slider6;
        document.querySelector("#slider7url2input").value = data.Slider7;
        document.querySelector("#slider8url2input").value = data.Slider8;
        document.querySelector("#slider9url2input").value = data.Slider9;
        document.querySelector("#slider10url2input").value = data.Slider10;
        document.querySelector("#slider11url2input").value = data.Slider11;



        document.querySelector("#slider1url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider2url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider3url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider4url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider5url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider6url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider7url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider8url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider9url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider10url2input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider11url2input").style.setProperty('--sliderColor2', data.Farge);

        document.querySelector("#navnurl2").style.setProperty('--labelColor2', data.Farge);
    })