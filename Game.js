class Game{
    constructor(){}
getState(){
var gameStateRef = database.ref("gameState");
gameStateRef.on("value",function(data){
gameState = data.val();
})
}


update(state){
database.ref("/").update({
gameState:state
});
}

async start(){
    if(gameState===0){
player = new Player();
var playerCountRef = await database.ref("playerCount").once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form();
form.display();
    }
}
play(){
form.hide();
textSize(20);
fill("green");
text("GAME START",150,120);
Player.getPlayerInfo();
if(allPlayers !== undefined){
var displayPosition= 150;
for(var plr  in allPlayers){
if(plr === "player" +player.index)
fill("red")
else
fill("yellow")
}

displayPosition+=20;
textSize(18)
text(allPlayers[plr].name  + " : " + allPlayers[plr].distance, 120, displayPosition)
}

}


}