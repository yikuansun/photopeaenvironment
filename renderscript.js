const fs = require("fs");

setTimeout(function() { document.querySelector("#loadingscreen").remove(); }, 5000);

request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/yikuansun/photopeaenvironment/master/environment.json", false);
request.send();
options = request.responseText;

document.querySelector("iframe").src = "https://www.photopea.com#" + encodeURI(options);