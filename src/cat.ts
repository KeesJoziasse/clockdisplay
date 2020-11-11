class cat{

    private mood :number = 100;
    private hunger :number = 100;
    private energy :number = 100;
    



    public timeTick(){
        this.mood -= 5;
        this.hunger -= 5;
        this.energy -= 5;
        console.log(this.mood);
        console.log(this.hunger);
        console.log(this.energy);

        if(this.hunger === 50){
            console.log("I need more lasagne!")
        } if(this.mood === 50){
            console.log("I need to play some more!")
        } if(this.energy === 50){
            console.log("Hello? I'm dying over here!")
        }

    }
    
   

}



