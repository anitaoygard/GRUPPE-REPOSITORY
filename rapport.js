var url1 = 'https://bacit.info/hwr/20221114123929-4309f946bae8c7dc2999249c0d37a01f.json'
var url2 = 'https://bacit.info/hwr/20221115105925-a9a7509ca97e6dbc3b230c7a9345223c.json'
var url3 = 'https://bacit.info/hwr/20221115110721-7aadfefce767c75365a0ff4b90c47700.json'
var url4 = 'https://bacit.info/hwr/20221114124804-d14ec459bc93b2014bdfbc97e2b10549.json'
var url5 = 'https://bacit.info/hwr/20221115104139-3982a019750b704ee3092c2d78d55946.json'
var url6 = 'https://bacit.info/hwr/20221115110721-7aadfefce767c75365a0ff4b90c47700.json'

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

            document.querySelector("#navnurl1").innerHTML = data.Navn;

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
console.log(data)
    })

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

            document.querySelector("#navnurl2").innerHTML = data.Navn;

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

            document.querySelector("#navnurl3").innerHTML = data.Navn;

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

            document.querySelector("#navnurl4").innerHTML = data.Navn;

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

            document.querySelector("#navnurl5").innerHTML = data.Navn;

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
















