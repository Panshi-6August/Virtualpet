class Food {
constructor(){ 
var foodStock,foodObj
    }
    //getFoodStock, updateFoodStock, deductFood methods inside Food class
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
var x=80,y=100;
imageMode(CENTER)
image(this.image,720,220,70,70)

if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
        x=80;
        y=y+50;}
}
}
    }
//In the display() function of the Food.js file
// use the preloaded image of the Milk Bottle and write an if-else condition to add milk bottle images on the screen
}