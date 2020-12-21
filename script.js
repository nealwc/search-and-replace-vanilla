let search = document.querySelector("#search");
let replace = document.querySelector("#replace");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButton = document.querySelector("#search-button");
let textButton = document.querySelector("#text-button")

let searchField = "Test tests testes";

renderSearchField();

function renderSearchField() {
    textField.textContent = searchField
}

// search and replace function when "Enter" button is clicked
searchButton.addEventListener("click", function(event){
    event.preventDefault();

    let searchText = search.value.trim();
    let replaceText = replace.value.trim();

    // clear input fields
    searchText.value = "";
    replaceText.value = "";

    searchField = searchField.replace(searchText, replaceText);

    renderSearchField();

});

// 
textButton.addEventListener("click", function(event){
    event.preventDefault();

    let newText = textInput.value.trim();
    console.log(newText);

    // change display text, clear input field
    searchField = newText;
    textInput.value = "";

    renderSearchField();

});