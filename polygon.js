class Polygon {
    constructor(x,y,radius){
        var options = {
            isStatic:false
        }
    this.polygon = Bodies.rectangle(x,y,radius,radius,options);
    World.add(world,this.polygon);
    this.image=loadImage("polygon-image.png");
    this.radius=radius
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.polygon.position.x, this.polygon.position.y, this.radius, this.radius);
    }
}