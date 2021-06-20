class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    
    
    player2 = createSprite(800,500);
   
    players=[player1,player2];
    
    top = createSprite(500,10,1000,10);

    bottom = createSprite(500,590,1000,10);

    left = createSprite(10,300,10,600);

    right = createSprite(990,300,10,600);

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =200;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x =x-allPlayers[plr].distance1;
                     y=y-allPlayers[plr].distance;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                    }
                        if(players.isTouching(top)){
                            players[index-1].y=players[index-1].y+20
                        }
                        
                        if(players.isTouching(bottom)){
                          players[index-1].y=players[index-1].y-20
                        }
                       
                        if(players.isTouching(left)){
                            players[index-1].x=players[index-1].x+20
                          }  

                          if(players.isTouching(right)){
                            players[index-1].x=players[index-1].x-20
                          }
                 
                
                
                 

                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance1 -= 10
                    player.update();
                }

                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                        player.distance1 += 10
                        player.update();
                } 
                
                 
                  

         
    }

    end(){
       console.log("Game Ended");
    }
}