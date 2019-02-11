class InputHandler{
    constructor(paddle)
    {
        this.paddle=paddle;
        this.movement();
    }

    movement()
    {
        document.addEventListener("keydown",(e)=>{
            switch(e.keyCode){
                case 37: this.paddle.moveLeft();
                break;
                case 39: this.paddle.moveRight();
                break;
            }
        });

        document.addEventListener("keyup",(e)=>{
            if(this.paddle.speed>0 || this.paddle.speed<0)this.paddle.stop();
        });

    }

    






}


