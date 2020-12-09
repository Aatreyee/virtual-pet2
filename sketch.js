var dog,dogImg;
var happyDog,happyDogImg;
var milk,milkImage;
var database;
var foodS;
var foodStock;

function preload()
{
    dogImg=loadImage("images/dogImg.png");
    happyDogImg=loadImage("images/dogImg1.png");
    milkImage=loadImage("images/milk.png");

}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.2;
  var foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
    background(46,139,87);
   fill(255,255,254);
   textSize(15);
   if(lastFed>=12)
   {
     text("Last fed: "+lastFed%12+"PM",350,30);
   }else if(lastFed==0)
   {
     text("Last fed : 12AM",350,30);
   }else{
    text("Last fed: "+lastFed+"AM",350,30);
   }
    drawSprites();
  
}

