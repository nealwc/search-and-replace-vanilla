let searchInput = document.querySelector("#search-text");
let replaceInput = document.querySelector("#replace-text");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButtonEl = document.querySelector("#search-button");
let textButtonEl = document.querySelector("#text-button")

let textFieldTest = "Test Test Test";

renderTextField();

function renderTextField() {
    textField.textContent = textFieldTest
}

searchButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked!");

    let searchText = searchInput.value.trim();
    let replaceText = replaceInput.value.trim();

    // clear input fields
    searchInput.value = "";
    replaceInput.value = "";

    console.log(searchText);
    console.log(replaceText);

});

textButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked!");

    let inputText = textInput.value.trim();
    console.log(inputText);

    // change display text, clear input field
    textFieldTest = inputText;
    textInput.value = "";

    renderTextField();

});
