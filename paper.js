class Paper{
constructor(x,y){
 var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(x,y,30,options);
this.diameter=30;
World.add(world,this.body);
}
display(){
translate(this.body.position.x,this.body.posiition.y);
fill("green");
ellipse(0,0,15,15);

}
}