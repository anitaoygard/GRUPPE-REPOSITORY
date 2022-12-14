var url1 = 'https://bacit.info/hwr/20221114123929-4309f946bae8c7dc2999249c0d37a01f.json'
fetch(url1)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url1input").value = data.Slider1;
            document.querySelector("#slider2url1input").value = data.Slider2;
            document.querySelector("#slider3url1input").value = data.Slider3;
            document.querySelector("#slider4url1input").value = data.Slider4;
            document.querySelector("#slider5url1input").value = data.Slider5;
            document.querySelector("#slider6url1input").value = data.Slider6;
            document.querySelector("#slider7url1input").value = data.Slider7;
            document.querySelector("#slider8url1input").value = data.Slider8;
            document.querySelector("#slider9url1input").value = data.Slider9;
            document.querySelector("#slider10url1input").value = data.Slider10;
            document.querySelector("#slider11url1input").value = data.Slider11;

       

            document.querySelector("#slider1url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider2url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider3url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider4url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider5url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider6url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider7url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider8url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider9url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider10url1input").style.setProperty('--sliderColor1', data.Farge);
            document.querySelector("#slider11url1input").style.setProperty('--sliderColor1', data.Farge);

            document.querySelector("#navnurl1").style.setProperty('--labelColor1', data.Farge);
    })