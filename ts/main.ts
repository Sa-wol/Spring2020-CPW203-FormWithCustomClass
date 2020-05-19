class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

// shortcut to get ElementByID cast
function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function getById(id:string){
    return document.getElementById(id);
}

/**
 * Clears all errors in the validation summary
 */
function clearAllErrors(){
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    clearAllErrors();

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        let errSummary = getById("validation-summary");
        let errItem = document.createElement("li");
        errItem.innerText = "Title is required!"

        errSummary.appendChild(errItem);
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;

        let errSummary = getById("validation-summary");
        let errItem = document.createElement("li");
        errItem.innerText = "Price is required and must be a number";

        errSummary.appendChild(errItem);
    }

    return isValid;
}

/**
 * Gets all game data from form 
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{
    // TODO: Create game
    // TODO: Populate with data from the form
    // TODO: Return game
    let game = new VideoGame();

    let inputTitle = <HTMLInputElement>getById("title");
    game.title = inputTitle.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    // TODO: Display video game below the form
    let displayDiv = getById("display");

    // create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "Digital copy available online.";
    }
    else{
        notDigitalDisplay = "You can come buy a physical copy."
    }

    // template literals
    gameInfo.innerHTML = `${myGame.title} has a rating of ${myGame.rating}. ` +
                        `It costs $${myGame.price}. ${notDigitalDisplay}`;

    // add <h2> in the <dive id="dispolay">
    displayDiv.appendChild(gameHeading);
    
    // add <p> game info
    displayDiv.appendChild(gameInfo);
}
