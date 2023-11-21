let search = document.querySelector("#search");
let replace = document.querySelector("#replace");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButton = document.querySelector("#search-button");
let clearButton = document.querySelector("#clear-button");
let textButton = document.querySelector("#text-button");
let replaceCountField = document.querySelector("#replace-count");
let replaceCountNum = 0;
let replaceCount;
let searchField = "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. - Michael Scott";

renderSearchAndCountFields();

// displays value in searchField
function renderSearchAndCountFields() {
    replaceCount = "Replacement Count: " + replaceCountNum;
    textField.textContent = searchField;
    replaceCountField.textContent = replaceCount
}

// clear input fields
clearButton.addEventListener("click", function (event) {
    event.preventDefault();

    search.value = "";
    replace.value = "";
})

// search and replace function when searchButton is clicked
searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    let searchText = search.value.trim();
    let replaceText = replace.value.trim();

    if (searchText === replaceText) {
        alert("Search and Replace text matches")
        return
    }
    else if (searchText == "") {
        alert("Please input a text to search")
        return
    }
    else if (replaceText == "") {
        alert("Please input a text to replace")
        return
    }
    else {
        // Clear count and check for for all instances of the searchText in searchField
        replaceCountNum = 0;
        replaceCountNum = searchField.split(searchText).length - 1;

        // checks for all instances of the searchText in searchField and replaces with replaceText
        searchField = searchField.replaceAll(searchText, replaceText);

        // clear input fields
        search.value = "";
        replace.value = "";
    }

    renderSearchAndCountFields();

});

// replace searchField when textButton it clicked
textButton.addEventListener("click", function (event) {
    event.preventDefault();

    let newText = textInput.value.trim();

    // change display text, clear input field
    searchField = newText;
    textInput.value = "";

    renderSearchAndCountFields();

});