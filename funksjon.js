var url1 = 'https://bacit.info/hwr/20221114123929-4309f946bae8c7dc2999249c0d37a01f.json';
var url2 = 'https://bacit.info/hwr/20221115105925-a9a7509ca97e6dbc3b230c7a9345223c.json';
var url3 = 'https://bacit.info/hwr/20221115110721-7aadfefce767c75365a0ff4b90c47700.json';
var url4 = 'https://bacit.info/hwr/20221114124804-d14ec459bc93b2014bdfbc97e2b10549.json';
var url5 = 'https://bacit.info/hwr/20221115104139-3982a019750b704ee3092c2d78d55946.json';
var url6 = 'https://bacit.info/hwr/20221115111205-31b5094714a420e0bb6ff86469b0817d.json';

var urllist = [url1, url2, url3, url4, url5, url6];

function drawSlider(url){
    fetch(url)
  .then(response => response.json())
  .then(data => {
    for (var key in data) {
      var value = data[key];
      if (key.startsWith("Slider")) {
        var sliderElement = document.createElement("input");
        sliderElement.type = "range";
        sliderElement.className = 'url';
        sliderElement.id = "url";
        sliderElement.min = "0";
        sliderElement.max = "1000";
        sliderElement.value = value;
        document.body.appendChild(sliderElement);
      }
}}
);
}
urllist.forEach(element => drawSlider(element));