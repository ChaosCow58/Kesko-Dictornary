function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const entries = xmlDoc.getElementsByTagName("entry");
    let divBody = "";

    for (let i = 0; i < entries.length; i++) {
        const word = entries[i].getElementsByTagName("word")[0].textContent;

        const headWord = entries[i].getElementsByTagName("headWord")[0].textContent;
        const type = entries[i].getElementsByTagName("type")[0].textContent;
        const pronounce = entries[i].getElementsByTagName("pronounce")[0].textContent;

        const definition = entries[i].getElementsByTagName("definition")[0].innerHTML;
        const definitionHTML = definition.replace(/(\r\n|\n|\r|&#13;)/gm, "<br>");
        divBody += `
        <div class='wordBox'>
            <h2>${word}</h2>
            <p><span class='speech'>Headword:</span> ${headWord}</p>
            <p><span class='speech'>Type:</span> ${type}</p>
            <p><span class='speech'>Pronunciation:</span> <span class='pronunciation'>/${pronounce}/</span></p>

            <div class='definition'>
                <h3>Definition</h3>
                <p>${definitionHTML}</p>
            </div>
        </div>
        `;
    }

    const main: any = document.getElementById("main");
    main.innerHTML += divBody;
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "/databases/UWords.xml", true);
xhttp.send();
