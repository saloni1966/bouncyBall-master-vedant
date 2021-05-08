class Ground{
constructor(x,y){
var ground_option = {
    isStatic : true

}
this.body = Bodies.rectangle(x,y,400,50,ground_option);
this.width = 400;
this.height = 50;
World.add(world,this.body)

}
display(){
var rec = this.body.position;
push()
fill('brown');
rectMode(CENTER);
rect(rec.x,rec.y,this.width,this.height);
pop()
}

}