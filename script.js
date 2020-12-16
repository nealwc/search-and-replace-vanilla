let searchInput = document.querySelector("#search-text");
let replaceInput = document.querySelector("#replace-text");
let buttonEl = document.querySelector("#enter-button")

let text = "";

buttonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked!");

    let searchText = searchInput.value.trim();
    let replaceText = replaceInput.value.trim();

    console.log(searchText);
    console.log(replaceText);

})