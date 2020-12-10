class Box{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        World.add(world, this.body);

        this.visibility = 255
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
          push();
          this.visibility = this.visibility - 20;
          tint(255,this.visibility);
          pop();
          World.remove(world ,this.body);
        }
      }
      score(){
        if(this.visibility<0 && this.visibility>-105){
          score++
        }
      }
}