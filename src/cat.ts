class Cat{

    public mood :number = 100;
    public hunger :number = 0;
    public energy :number = 100;

    public moodyCat: string = "I need to play some more!";
    public hungryCat: string = "I need some more lasagne!";
    public dyingCat: string = "Hello? I'm dying over here!";

    

    hungry = (ev:MouseEvent) => {
        this.hunger -=50;
        console.log("The cat is satisfied!");
    }
    tired = (ev:MouseEvent) => {
        this.energy += 10;
        console.log("The cat has new energy!")
    }
    bored = (ev:MouseEvent) =>{
        this.mood += 10;
        console.log("The cat isn't bored anymore!")
    }
    constructor(){
        this.addValues();
    }

    

    



    public timeTick(){

        // this.mood -= 5;
        // this.hunger += 5;
        // this.energy -= 5;
        console.log(this.mood);
        console.log(this.hunger);
        console.log(this.energy);

        if (this.mood >= 5) {
            this.mood-=5;
        } else {
            console.log("mood = 0");
            
        }

        if (this.hunger <= 95){
            this.hunger+=5;
        } else {
            console.log("hungry = 100");
        }

        if (this.energy >= 5){
            this.energy-=5;
        } else {
            console.log("engergy = 0");
        }

        document.getElementById('counter').innerHTML = " ";
        const counter =document.getElementById('counter');
        const catPlaytime = document.createElement('p') as HTMLElement;
        catPlaytime.innerHTML = `Mood points: ${this.mood}`;
        counter.appendChild(catPlaytime);

        const catFood = document.createElement('p') as HTMLElement;
        catFood.innerHTML = `Hunger points: ${this.hunger}`;
        counter.appendChild(catFood);

        const catSleep = document.createElement('p') as HTMLElement;
        catSleep.innerHTML = `Energy points: ${this.energy}`;
        counter.appendChild(catSleep);

        if(this.hunger === 50){
            console.log(this.hungryCat)
            document.getElementById('garfield').innerHTML = " ";
            let garfield = document.getElementById('garfield');
            const notOkay = document.createElement('img');
            
            notOkay.src = "/images/feelsbadman.jpg";
            garfield.appendChild(notOkay)
        } if(this.mood === 50){
            console.log(this.moodyCat)
        } if(this.energy === 50){
            console.log(this.dyingCat)
        }

        if(this.mood === 0){
            console.log("Oh no! The cat has died of boredom")
            
            let garfield = document.getElementById('garfield');
            garfield.innerHTML = " ";
            const img = document.createElement('img');
            img.src = "/deadcat.jpg";
            garfield.appendChild(img);
            
        } if(this.hunger === 100){
            console.log("Oh no! The cat has died of famine")
        } if(this.energy === 0){
            console.log("Oh no! The cat's energy ran out!'")
        }
        

      
        

    }

    public addValues(){
        console.log("It works!")
        document.getElementById('eatButton').addEventListener("click", this.hungry);
    
        document.getElementById('sleepButton').addEventListener("click", this.tired );
    
        document.getElementById('playButton').addEventListener("click", this.bored);
    }
    }
    
   





