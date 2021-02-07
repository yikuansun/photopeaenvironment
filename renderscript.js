const fs = require("fs");

request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/yikuansun/photopeaenvironment/master/environment.json", false);
request.send();
options = request.responseText;

setTimeout(function() { document.querySelector("#loadingscreen").remove(); }, 5000);

document.querySelector("iframe").src = "https://www.photopea.com#" + encodeURI(options);

window.addEventListener("message", function(e) {
    if (e.data instanceof ArrayBuffer) {
        blob = new Blob([e.data], {type: "image/psd"});
        a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "true";
        a.click();
    }
});