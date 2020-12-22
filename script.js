let search = document.querySelector("#search");
let replace = document.querySelector("#replace");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButton = document.querySelector("#search-button");
let textButton = document.querySelector("#text-button")

let searchField = "Lorem test ipsum dolor sit amet, consectetur test adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

renderSearchField();

function renderSearchField() {
    textField.textContent = searchField
}

// search and replace function when searchButton is clicked
searchButton.addEventListener("click", function(event){
    event.preventDefault();

    let searchText = search.value.trim();
    let replaceText = replace.value.trim();

    // clear input fields
    searchText.value = "";
    replaceText.value = "";

    // while loop to check for all instances of the searchText in the searchField
    while(searchField.indexOf(searchText) != -1){
    searchField = searchField.replace(searchText, replaceText)
    };

    renderSearchField();

});

// replace searchField when textButton it clicked
textButton.addEventListener("click", function(event){
    event.preventDefault();

    let newText = textInput.value.trim();
    console.log(newText);

    // change display text, clear input field
    searchField = newText;
    textInput.value = "";

    // display searchField with new value
    renderSearchField();

});