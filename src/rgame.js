var maxcoins = 3, mincoins = 1, cur_turn = 1, total_turn = 5, player_turn = true, gameend = false;
var player_payoff = 0, computer_payoff = 0;
var maxtext, mintext, turn_text;


function startGame(){
    
    maxtext = new component("20px", "serif", "red", 20, 50, "text");
    mintext = new component("20px", "serif", "blue", 200, 50, "text");
    turn_text = new component("20px","serif", "black",400, 20, "text");
    CGameArea.start();
}
var CGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 800;
        this.canvas.height = 80;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function() {
        ctx = CGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}


function updateGameArea(){
    CGameArea.clear();
    computerAction();
    if (gameend == true){
        maxtext.text = "Your payoff is "+ player_payoff;
        mintext.text = "Your opponent's payoff is "+ computer_payoff;
    }
    else{
        maxtext.text = "Maxcoins: "+ maxcoins;
        mintext.text = "Mincoins: "+ mincoins;
    }
    
    turn_text.text = "Current turn: " + cur_turn + "    " + (total_turn -cur_turn) + " turns to end";
    maxtext.update();
    mintext.update();
    turn_text.update();
    

}

function passAction(){
    if (player_turn == true&&gameend == false){
        maxcoins +=1;
        mincoins +=1;
        cur_turn +=1;
        player_turn = false;
    }
    if (cur_turn == total_turn + 1){
        cur_turn -=1;
        gameend = true;
        player_payoff = (maxcoins+mincoins)/2;
        computer_payoff = (maxcoins+mincoins)/2;
    }
}

function takeAction(){
    if(player_turn == true&&gameend == false){
        player_payoff = mincoins;
        computer_payoff = maxcoins;
        gameend = true;
    }
}

function computerAction(){
    if (player_turn ==false&&gameend == false){
        alert("Your opponet passes.")
        maxcoins +=1;
        mincoins +=1;
        cur_turn +=1;
        player_turn = true;

    }
}

function resetGame(){
    maxcoins = 3; 
    mincoins = 1; 
    cur_turn = 1; 
    total_turn = 5;
    player_turn = true;
    gameend = false;
    player_payoff = 0;
    computer_payoff = 0;
}


function setTotalturn(turn){
    total_turn = turn;
}