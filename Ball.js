class Ball {

    constructor(x,y,r){

        this.r = r;

        var ball_options= {
            
            restitution : 1,
            friction : 0.5,
            density : 2
        }
        this.body = Matter.Bodies.circle(x,y,r,ball_options)
        World.add(world,this.body);


    }


    display(){
        ellipseMode(RADIUS);
     ellipse(this.body.position.x,this.body.position.y,this.r);
    }


}