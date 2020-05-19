var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function getInputById(id) {
    return document.getElementById(id);
}
function getById(id) {
    return document.getElementById(id);
}
function clearAllErrors() {
    var errSummary = getById("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        var errSummary = getById("validation-summary");
        var errItem = document.createElement("li");
        errItem.innerText = "Title is required!";
        errSummary.appendChild(errItem);
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        var errSummary = getById("validation-summary");
        var errItem = document.createElement("li");
        errItem.innerText = "Price is required and must be a number";
        errSummary.appendChild(errItem);
    }
    return isValid;
}
function getVideoGame() {
    var game = new VideoGame();
    var inputTitle = getById("title");
    game.title = inputTitle.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    if (digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "Digital copy available online.";
    }
    else {
        notDigitalDisplay = "You can come buy a physical copy.";
    }
    gameInfo.innerHTML = myGame.title + " has a rating of " + myGame.rating + ". " +
        ("It costs $" + myGame.price + ". " + notDigitalDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
