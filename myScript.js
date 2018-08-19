
var card_display = document.getElementById("deck");
var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cards = [];
var players = [];

function startDeal() {
    players = [];
    cards = [];
    var num = Number(document.getElementById("players").value);
    for (var i = 0; i < num; i++) {
        players[i] = [];
    }
    buildCards();
    
    shuffleCards(cards);
   
    deal(cards);
}
function buildCards() {

    for (s in suits) {
        var bgColor = (suits[s] == "hearts" || suits[s] == "diams") ? "red" : "black";
        for (c in cardFace) {
            var card = {
                suit: suits[s],
                num: cardFace[c],
                bgColor: bgColor
            }
            cards.push(card);
        }
    }
}


function shuffleCards(arry) {
    for (var x = arry.length - 1; x > 0; x--) {
        var ii = Math.floor(Math.random() * (x + 1));
        var temp = arry[x];
        arry[x] = arry[ii];
        arry[ii] = temp;
    }

    return arry;

}
function deal(cs) {
    card_display.innerHTML=" ";
var num=players.length;
var p=0;
for(var i=0;i<cs.length;i++){
    players[p].push(cs[i]);
    p++;
    if(p>=num){p=0;}
}


for(var j=0;j<num;j++){
 
 card_display.innerHTML+="<br>Player:"+(j+1)+"<br>";
    for(var x=0;x<13;x++){
        var p=players[j][x];
        
        card_display.innerHTML+="<span class='card' style='color:"+p.bgColor+"'>"+p.num+"&"+p.suit+";</span>";
    }
    card_display.innerHTML+="<br>";
}
}