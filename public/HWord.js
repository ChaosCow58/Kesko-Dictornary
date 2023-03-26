function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var entries = xmlDoc.getElementsByTagName("entry");
    var divBody = "";
    for (var i = 0; i < entries.length; i++) {
        var word = entries[i].getElementsByTagName("word")[0].textContent;
        var headWord = entries[i].getElementsByTagName("headWord")[0].textContent;
        var type = entries[i].getElementsByTagName("type")[0].textContent;
        var pronounce = entries[i].getElementsByTagName("pronounce")[0].textContent;
        var definition = entries[i].getElementsByTagName("definition")[0].innerHTML;
        var definitionHTML = definition.replace(/(\r\n|\n|\r|&#13;)/gm, "<br>");
        divBody += "\n        <div class='wordBox'>\n            <h2>".concat(word, "</h2>\n            <p><span class='speech'>Headword:</span> ").concat(headWord, "</p>\n            <p><span class='speech'>Type:</span> ").concat(type, "</p>\n            <p><span class='speech'>Pronunciation:</span> <span class='pronunciation'>/").concat(pronounce, "/</span></p>\n\n            <div class='definition'>\n                <h3>Definition</h3>\n                <p>").concat(definitionHTML, "</p>\n            </div>\n        </div>\n        ");
    }
    var main = document.getElementById("main");
    main.innerHTML += divBody;
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "/databases/HWords.xml", true);
xhttp.send();
