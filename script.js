let player1 = true; 
let show_player = document.getElementById("player");

let field = [
    {"1": "blank"},
    {"2": "blank"},
    {"3": "blank"},

    {"4": "blank"},
    {"5": "blank"},
    {"6": "blank"},

    {"7": "blank"},
    {"8": "blank"},
    {"9": "blank"},
];


function main(number){

    field_location = parseInt(number)-1;
 

    if(player1 == true){
        field[field_location] = "red";
        player1 = false;
        show_player.innerHTML = "Player 2";
        show_player.classList.add("player2");
        show_player.classList.remove("player1");
    }
    else if(player1 == false){
        field[field_location] = "blue";
        player1 = true;
        show_player.innerHTML = "Player 1";
        show_player.classList.add("player1");
        show_player.classList.remove("player2");
    }
    console.log(field);

    for(let i = 0; i < 10; i++){
        field_var = field[i];
        if(field_var == "red"){
            let field = document.getElementById(i).classList.add("red-field");
        }
    }
}




function newGame(){
    field = [
        {"1": "blank"},
        {"2": "blank"},
        {"3": "blank"},
    
        {"4": "blank"},
        {"5": "blank"},
        {"6": "blank"},
    
        {"7": "blank"},
        {"8": "blank"},
        {"9": "blank"},
    ];
    console.log(field);

    show_player.classList.remove("player2");
    show_player.classList.add("player1");
    show_player.innerText = "Player 1";
    player1 = true;
}
