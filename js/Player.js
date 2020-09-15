class Player {
  constructor(){
//adding properties to the player, index tell us the player number.
    this.index=null;
    this.distance= 0;
  this.name= null
 }



  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//this function will updat the name and distance of every player inside the database within player
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  //static functions are called by class name themmselves rather than by objects
  // as they are common for all the objects
//gets the info of all the players hence doesnt involve any pirticular object
  static getPlayerInfo(){
var playerInfoRef=database.ref('players');
//arrow function = attaches the function to the original object which calls it
playerInfoRef.on("value",(data)=>{
  allPlayers=data.val();
})


  }
}
