console.log("memes are for the bois");

var img_names; //this will grab the source data of the jpeg files from api.json

var header_button = document.querySelector("#meme");
    header_button.innerHTML = "You need a break from code!";

var button = document.querySelector("#meme");
    button.onclick = function() {
        console.log("button works");
        var random = Math.floor(Math.random() * img_names.length);
        var img_random = img_names[random];//the random image
        var img = document.createElement("img");
            img.src = img_random;
            document.getElementById("headtext").className += " hidden";
            document.getElementById("headtext2").className += " hidden";
            document.getElementById("img-container").appendChild(img);

    };

fetch("https://api.myjson.com/bins/qwoxw").then(function (response) {
    response.json().then(function (theData) {
        console.log("THE DATA:", theData);
        img_names = theData;
    });
});

