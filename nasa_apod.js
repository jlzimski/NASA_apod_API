var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "1IXgSAYCUO2p4cTcvakFgdiNICMnwgkSLyX2xuWx";

let image = document.getElementById("image");
let explanation = document.getElementById("explanation")



fetch(url + api_key) 
    .then(response => response.json())
    .then(json => display(json));





function display(json) {
    //console.log(json);  // *
    let apod = json;
    console.log(apod);  // **

    image.src = json.url;
    explanation.innerHTML = json.explanation
}









    // for(a of apod) {
    //     console.log(a);
    //     let hdurl = document.createElementbyId('hdurl')
    //     console.log(hdurl);
    // }




