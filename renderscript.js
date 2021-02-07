const fs = require("fs");
const { dialog } = require("electron").remote;

/*
request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/yikuansun/photopeaenvironment/master/environment.json", false);
request.send();
options = request.responseText;
*/ options = fs.readFileSync("environment.json", "utf-8");
docName = "";

setTimeout(function() { document.querySelector("#loadingscreen").remove(); }, 5000);

document.querySelector("iframe").src = "https://www.photopea.com#" + encodeURI(options);

window.addEventListener("message", function(e) {
    if (e.data instanceof String) {
        console.log(e.data)
        if (e.data.includes(".psd")) {
            docName = e.data;
        }
    }
    if (e.data instanceof ArrayBuffer) {
        //try {
            fs.writeFileSync(document.querySelector("#directory_select span").innerText + "/" + docName, e.data);
        /*} catch (err) {
            document.querySelector("iframe").contentWindow.postMessage("alert(\"save failed. please select save directory\");", "*");
        }*/
    }
});

document.querySelector("#directory_select button").addEventListener("click", function() {
    document.querySelector("#directory_select span").innerText = dialog.showOpenDialogSync({
        properties: ["openDirectory"]
    });
});