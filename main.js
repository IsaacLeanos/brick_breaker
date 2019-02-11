    let canvas=document.getElementById("gamescreen");
    
        let ctx=canvas.getContext("2d");
        
        const GAME_WIDTH=800;
        const GAME_HEIGHT=600;
        
        
        let paddle=new Paddle(GAME_WIDTH,GAME_HEIGHT);
        let ball=new Ball(GAME_WIDTH,GAME_HEIGHT);
        
        new InputHandler(paddle);
        
        let lastTimeFrame=0; 
                
        function gameLoop(timestamp){
            // console.log('time',timestamp);
            let delta=timestamp - lastTimeFrame; // current frame or every frame
            lastTimeFrame=timestamp;
            // console.log('last',lastTime);

            ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT); // clear uncoded rects
            paddle.update(delta);
            ball.update(delta);
            paddle.draw(ctx);
            ball.draw(ctx);

            requestAnimationFrame(gameLoop);
        }
        
        requestAnimationFrame(gameLoop);


