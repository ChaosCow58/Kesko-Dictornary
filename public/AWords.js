let xhr = new XMLHttpRequest();
xhr.open('GET', "/databases/words.json");


xhr.onload = function() {
    if (xhr.status === 200) {
        let words = JSON.parse(xhr.responseText);

        let verbWords = words.filter(function(word) {
            return word.group === "verb";
        });

        let AWords = words.filter(function(word) {
            return word.group === "A";
        });

       localStorage.setItem("verbData", JSON.stringify(verbWords));
       localStorage.setItem("AData", JSON.stringify(AWords));

        let placeholder = document.querySelector("#data-output");
        let out = "";

        for (let word of AWords) {

            out += `
            <div class='wordBox'>
                <h2>${word.word}</h2>
                <p><span class='speech'>Headword:</span> ${word.headword}</p>
                <p><span class='speech'>Type:</span> ${word.type}</p>
                <p><span class='speech'>Pronunciation:</span> <span class='pronunciation'>/${word.pronounce}/</span></p>

                <div class='definition'>
                    <h3>Definition</h3>
                    <p>${word.definition}</p>
                </div>
            </div>
            
            `;
        }

        for (let word of verbWords) {
            out += `
            <div class='wordBox'>
                <h2>${word.word}</h2>
                <p><span class='speech'>Headword:</span> ${word.headword}</p>
                <p><span class='speech'>Type:</span> ${word.type}</p>
                <p><span class='speech'>Pronunciation:</span> <span class='pronunciation'>/${word.pronounce}/</span></p>

                <div class='definition'>
                    <h3>Definition</h3>
                    <p>${word.definition}</p>
                </div>
            </div>
            `;
        }
        placeholder.innerHTML = out;
    }

    
};
xhr.send();
