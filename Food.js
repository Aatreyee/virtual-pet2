class Food
{
    constructor(feedTime,lastFed,foodObj){
        
    }

    getFoodStock(){
        var feedTime = database.ref('foodStock');
        feedTime.on("value",function(data){
        lastFed = data.val();
        });
    }


     feedDog(){
        dogImg.addImage(happyDogImg);

        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
        Food:foodObj.getFoodStock(),
        feedTime:hour
        });
    }

  addFoodStock(){
        foodS ++;
        database.ref('/').update({
            Food:foodS
        })
    }
   
    display(){
        var x=80;
        var y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70)

        if(this.foodStock!=0){
            for(var i=0<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
               image(this.image,x,y,50,50);
                x=x=30;
            }
        }
    }
    
}
