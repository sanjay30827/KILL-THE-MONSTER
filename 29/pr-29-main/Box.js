class Box {
  constructor(x,y,w,h){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }  
  this.body = Bodies.rectangle(x,y,w,h,options) 
  this.width = w
  this.height = h
  World.add(world,this.body)

  this.Visiblity=255;
  }



display(){
  //console.log(this.body.speed);
  if(this.body.speed < 3){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    
    pop();
  }
 }
 score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}
}