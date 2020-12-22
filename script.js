let search = document.querySelector("#search");
let replace = document.querySelector("#replace");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButton = document.querySelector("#search-button");
let textButton = document.querySelector("#text-button")

let searchField = "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. - Michael Scott";

renderSearchField();

// displays value in searchField
function renderSearchField() {
    textField.textContent = searchField
}

// search and replace function when searchButton is clicked
searchButton.addEventListener("click", function(event){
    event.preventDefault();

    let searchText = search.value.trim();
    let replaceText = replace.value.trim();

    // clear input fields
    search.value = "";
    replace.value = "";

    // checks for all instances of the searchText in searchField and replaces with replaceText
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

    renderSearchField();

});