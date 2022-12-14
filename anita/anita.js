var url3 = 'https://bacit.info/hwr/20221115110721-7aadfefce767c75365a0ff4b90c47700.json'


fetch(url3)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider1url3input").value = data.Slider1;
            document.querySelector("#slider2url3input").value = data.Slider2;
            document.querySelector("#slider3url3input").value = data.Slider3;
            document.querySelector("#slider4url3input").value = data.Slider4;
            document.querySelector("#slider5url3input").value = data.Slider5;
            document.querySelector("#slider6url3input").value = data.Slider6;
            document.querySelector("#slider7url3input").value = data.Slider7;
            document.querySelector("#slider8url3input").value = data.Slider8;
            document.querySelector("#slider9url3input").value = data.Slider9;
            document.querySelector("#slider10url3input").value = data.Slider10;
            document.querySelector("#slider11url3input").value = data.Slider11;



            document.querySelector("#slider1url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider2url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider3url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider4url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider5url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider6url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider7url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider8url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider9url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider10url3input").style.setProperty('--sliderColor3', data.Farge);
            document.querySelector("#slider11url3input").style.setProperty('--sliderColor3', data.Farge);

            document.querySelector("#navnurl3").style.setProperty('--labelColor3', data.Farge);
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
