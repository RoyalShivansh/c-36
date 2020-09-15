class Form {
  constructor() {
   this.input = createInput("Name");
 this.button = createButton('Play');
 this.greeting = createElement('h3');
  }
  //it will be called when the game state changes to 1 n hide all the form elements 
hide(){
this.greeting.hide();
this.input.hide();
this.button.hide();

}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
  
    
    this.input.position(130, 160);
    this.button.position(250, 200);
//this arrow function allowes us to bind / attach form object to the function and not to the button 
   this.button.mousePressed(()=>{
     this.input.hide();
      this.button.hide();
//since name is the property of the player we write player.naam 
      player.name = this.input.value();
      
      playerCount+=1;
      //so the player count becomes the index of the player whivh tells us the player number 
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
     
    this.greeting.html("Hello " + player.name )
    this.greeting.position(130, 160)
    });

  }
}
