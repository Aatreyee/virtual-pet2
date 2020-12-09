class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(100,30);
        var button=createInput("Feed the dog");
        button.position(50,100);
        var button=createButton("Add food");
        button.position(50,200);
       

        button.mousePressed(function(){
           
            button.hide();
           /*
            feedDog+=1;
           feedDog.update(button);
            player.updateCount(playerCount);
            */
           
        });
    }

}