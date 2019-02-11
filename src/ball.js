class Ball{
    constructor(GAME_WIDTH,GAME_HEIGHT){
        this.gameWidth=GAME_WIDTH;
        this.gameHeight=GAME_HEIGHT;
        this.image=document.getElementById("img_ball");
        this.position={
            x:60,  // < >
            y:10   
        }
        this.speed={
            x:3,
            y:0
        }
        this.size=13;
    }

    draw(ctx)
    {
        ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    update(delta)
    {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // console.log(this.speed.x)
        // console.log(this.position.x)

        if(this.position.x > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x; // -= doesn't apply here. I dont want decrementation, I want to set -3 right away.
            console.log(this.speed.x)
        }
        // if(this.position.y > this.gameHeight || this.position.y < 0){
        //     this.speed.y = -this.speed.y;
        // }

}






}