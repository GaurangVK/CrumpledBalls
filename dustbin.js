class Box  {
    constructor(x, y, width, height){
      //super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      var options={
          isStatic:true
      }
      this.body=Bodies.rect(this.x,this.y,this.width,this.height);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    }
display(){
    push();
    translate(this.body.position.x,this.body.posiition.y);
    rect(0,0,this.width,this.height);
}
}