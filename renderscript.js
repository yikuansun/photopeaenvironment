const fs = require("fs");

setTimeout(function() { document.querySelector("#loadingscreen").remove(); }, 5000);

options = fs.readFileSync(__dirname + "/environment.json", {encoding: "utf-8"});

document.querySelector("iframe").src = "https://www.photopea.com#" + encodeURI(options);