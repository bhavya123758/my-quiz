class Quiz {
  constructor(){
  
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  
  play(){
    //write code here to hide question elements
question.hide();
background("yellow");


    //write code to show a heading for showing the result of Quiz
   textSize(30);
  text("Result of The Quiz",350,50);
    //call getContestantInfo( ) here

Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
if(allContestants!==undefined){
  fill("blue");
  textSize(20);
  stroke("white");
  text("The Contestant with The Correct answer is highlighted in green ",130,230)
} 
    //write code to add a note here
  var display_position=290;
      for(var plr in allContestants){
        var correctAns="2"
        if (correctAns=== allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

          display_position+=40;
        textSize(25);
        text(allContestants[plr].name, 350,display_position)
      }
    

    //write code to highlight contest who answered correctly
    
  }
  
}


