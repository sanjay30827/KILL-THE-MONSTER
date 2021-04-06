class Ball {
  constructor(x,y,r){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }  
  this.body = Bodies.circle(x,y,r,options) 
  this.width = r
  this.height = r 
  World.add(world,this.body)
  this.image=loadImage("images/Superhero-01.png")
  }

 
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      fill("red");
      image(this.image ,0, 0, this.width, this.height);
      pop();
    } 
  
}
