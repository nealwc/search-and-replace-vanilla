let searchInput = document.querySelector("#search-text");
let replaceInput = document.querySelector("#replace-text");
let textInput = document.querySelector("#input-text");
let textField = document.querySelector("#text-field");
let searchButtonEl = document.querySelector("#search-button");
let textButtonEl = document.querySelector("#text-button")

// let textField = "";

searchButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked!");

    let searchText = searchInput.value.trim();
    let replaceText = replaceInput.value.trim();

    console.log(searchText);
    console.log(replaceText);

});

textButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked!");

    let searchText = textInput.value.trim();
    // textField.push.
    console.log(searchText);

    textField.textContent = searchText

});

// function renderText() {
//     // textField.innerHTML = "";
//     textField.textContent
// }

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }