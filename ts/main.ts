class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function getById(id:string){
    return document.getElementById(id);
}

function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid(){
    return true;
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
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "Digital copy available online.";
    }
    else{
        gameMediumDisplay = "You can come buy a physical copy."
    }

    // template literals
    gameInfo.innerHTML = `${myGame.title} has a rating of ${myGame.rating}. 
                        It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

    // add <h2> in the <dive id="dispolay">
    displayDiv.appendChild(gameHeading);
    
    //Add <p> game info
    displayDiv.appendChild(gameInfo);
}
