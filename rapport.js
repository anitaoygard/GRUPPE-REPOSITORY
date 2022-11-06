var url1 = 'https://bacit.info/hwr/20221106025340-599fb6f7abacd2778246b1572122f26a.json'
var url2 = 'https://bacit.info/hwr/20221106025431-4aa4e931425328d15f191efe40cceaa3.json'
var url3 = 'https://bacit.info/hwr/20221106025506-4bcd91d9ce4e466fa1578ca33950b2da.json'

fetch(url1)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider11input").value = data.Slider1;
        document.querySelector("#slider21input").value = data.Slider2;
        document.querySelector("#slider31input").value = data.Slider3;
        document.querySelector("#slider41input").value = data.Slider4;
        document.querySelector("#slider51input").value = data.Slider5;
        document.querySelector("#slider11label").innerHTML = data.Navn;
        document.querySelector("#slider11input").style.setProperty('--sliderColor1', data.Farge);
        document.querySelector("#slider21input").style.setProperty('--sliderColor1', data.Farge);
        document.querySelector("#slider31input").style.setProperty('--sliderColor1', data.Farge);
        document.querySelector("#slider41input").style.setProperty('--sliderColor1', data.Farge);
        document.querySelector("#slider51input").style.setProperty('--sliderColor1', data.Farge);
        document.querySelector("#slider11label").style.setProperty('--labelColor1', data.Farge);
    })

fetch(url2)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider12input").value = data.Slider1;
        document.querySelector("#slider22input").value = data.Slider2;
        document.querySelector("#slider32input").value = data.Slider3;
        document.querySelector("#slider42input").value = data.Slider4;
        document.querySelector("#slider52input").value = data.Slider5;
        document.querySelector("#slider22label").innerHTML = data.Navn;
        document.querySelector("#slider12input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider22input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider32input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider42input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider52input").style.setProperty('--sliderColor2', data.Farge);
        document.querySelector("#slider22label").style.setProperty('--labelColor2', data.Farge);
    })

fetch(url3)
    .then(response => response.json())
    .then(data => { document.querySelector("#slider13input").value = data.Slider1;
        document.querySelector("#slider23input").value = data.Slider2;
        document.querySelector("#slider33input").value = data.Slider3;
        document.querySelector("#slider43input").value = data.Slider4;
        document.querySelector("#slider53input").value = data.Slider5;
        document.querySelector("#slider33label").innerHTML = data.Navn;
        document.querySelector("#slider13input").style.setProperty('--sliderColor3', data.Farge);
        document.querySelector("#slider23input").style.setProperty('--sliderColor3', data.Farge);
        document.querySelector("#slider33input").style.setProperty('--sliderColor3', data.Farge);
        document.querySelector("#slider43input").style.setProperty('--sliderColor3', data.Farge);
        document.querySelector("#slider53input").style.setProperty('--sliderColor3', data.Farge);
        document.querySelector("#slider33label").style.setProperty('--labelColor3', data.Farge);
    })

