var btnTranslate = document.querySelector("button");
var txtInput = document.querySelector("#input-txt");
var translateOutput = document.querySelector("#output");


var url = "https://api.funtranslations.com/translate/minion.json"

function translationURL(input) {
    return url + "?" + "text=" + input
}

function handleError(error) {
    alert("Something went wrong!")
}

function clickEventHandler() {
    var inputTxt = txtInput.value;
    var finalUrl = translationURL(inputTxt);  
    // console.log(finalUrl);
    fetch(finalUrl)
        .then(response => response.json())
        .then(json => {
           translateOutput.innerText = json.contents.translated;
        })
        .catch(handleError);
};

btnTranslate.addEventListener("click", clickEventHandler);


function translationURL(inputTxt) {
    var encodedURI = encodeURI(inputTxt);
    return `${url}?text=${encodedURI}`;
}