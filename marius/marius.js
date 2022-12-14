var url4 = 'https://bacit.info/hwr/20221114124804-d14ec459bc93b2014bdfbc97e2b10549.json'

fetch(url4)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url4input").value = data.Slider1;
            document.querySelector("#slider2url4input").value = data.Slider2;
            document.querySelector("#slider3url4input").value = data.Slider3;
            document.querySelector("#slider4url4input").value = data.Slider4;
            document.querySelector("#slider5url4input").value = data.Slider5;
            document.querySelector("#slider6url4input").value = data.Slider6;
            document.querySelector("#slider7url4input").value = data.Slider7;
            document.querySelector("#slider8url4input").value = data.Slider8;
            document.querySelector("#slider9url4input").value = data.Slider9;
            document.querySelector("#slider10url4input").value = data.Slider10;
            document.querySelector("#slider11url4input").value = data.Slider11;


            document.querySelector("#slider1url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider2url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider3url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider4url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider5url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider6url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider7url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider8url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider9url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider10url4input").style.setProperty('--sliderColor4', data.Farge);
            document.querySelector("#slider11url4input").style.setProperty('--sliderColor4', data.Farge);

            document.querySelector("#navnurl4").style.setProperty('--labelColor4', data.Farge);
    })









