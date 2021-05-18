class Form{
    constructor(){
    this.input=createInput("name");
    this.button=createButton("start");
    this.greeting=createElement("H5");
    }
     
    hide(){
this.greeting.hide();
this.button.hide();
this.input.hide();
    }
    display(){
var title = createElement("h2");
title.html("MULTIPLAYER CAR RACING GAME");
title.position(400,140);
this.input.position(470,260);
this.button.position(470,350)
this.button.mousePressed(function(){
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1;
player.index = playerCount
player.update();
player.updateCount(playeCount);
this.greeting.html("HELLO! WELCOME TO MY GAME  "+ player.name);
this.greeting.postion(130,160);
});
    }
}