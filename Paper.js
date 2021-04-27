class Paper{
constructor(x,y,radius){

    var options={

        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.img = loadImage("images/paper.png")
    this.x = x
    this.y = y
    this.radius = radius
    World.add(world,this.body)

}
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.img,pos.x, pos.y,70, 70)
    //ellipse(pos.x, pos.y, this.radius ,this.radius);
    
  }
}