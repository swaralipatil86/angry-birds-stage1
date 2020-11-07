class Bird{
    constructor(x,y)
    {
      var   options={
    'restitution':0.8,'density':1,'friction':0.3
      }
      this.body=Bodies.rectangle(x,y,50,50,options)
      World.add(world,this.body)
      this.w=50;
      this.h=50;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x = mouseX;
pos.y=mouseY
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white");
        fill("red");
        rect(0,0,this.w,this.h);
        pop();
    }
}