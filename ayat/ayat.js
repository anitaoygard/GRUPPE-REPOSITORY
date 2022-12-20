##var url6 = 'https://bacit.info/hwr/20221115105925-a9a7509ca97e6dbc3b230c7a9345223c.json'

##fetch(url6)
##    .then(response => response.json())
##    .then(data => { document.querySelector("#slider1url6input").value = data.Slider1;
##        document.querySelector("#slider2url6input").value = data.Slider2;
##        document.querySelector("#slider3url6input").value = data.Slider3;
##        document.querySelector("#slider4url6input").value = data.Slider4;
##        document.querySelector("#slider5url6input").value = data.Slider5;
##        document.querySelector("#slider6url6input").value = data.Slider6;
##        document.querySelector("#slider7url6input").value = data.Slider7;
##        document.querySelector("#slider8url6input").value = data.Slider8;
##        document.querySelector("#slider9url6input").value = data.Slider9;
##        document.querySelector("#slider10url6input").value = data.Slider10;
##        document.querySelector("#slider11url6input").value = data.Slider11;



##        document.querySelector("#slider1url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider2url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider3url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider4url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider5url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider6url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider7url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider8url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider9url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider10url6input").style.setProperty('--sliderColor2', data.Farge);
##        document.querySelector("#slider11url6input").style.setProperty('--sliderColor2', data.Farge);

##        document.querySelector("#navnurl2").style.setProperty('--labelColor2', data.Farge);
##    })




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

            document.querySelector("#navnurl6").innerHTML = data.Navn;

            document.querySelector("#slider1url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider2url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider3url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider4url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider5url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider6url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider7url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider8url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider9url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider10url6input").style.setProperty('--sliderColor6', data.Farge);
            document.querySelector("#slider11url6input").style.setProperty('--sliderColor6', data.Farge);

            document.querySelector("#navnurl6").style.setProperty('--labelColor6', data.Farge);
    })


    let canvas = document.querySelector('#myCanvas');
    let c = canvas.getContext('2d');


    c.fillStyle = '#BA0C2F';
    c.fillRect(0,0,60,60);
    c.fillStyle = '#00205B';
    c.fillRect(70,0,20,150);
    c.fillStyle = '#00205B';
    c.fillRect(0,70,200,20);
    c.fillStyle = '#BA0C2F';
    c.fillRect(0,100,60,60);
    c.fillStyle = '#BA0C2F';
    c.fillRect(100,0,100,60);
    c.fillStyle = '#BA0C2F';
    c.fillRect(100,100,100,60);
