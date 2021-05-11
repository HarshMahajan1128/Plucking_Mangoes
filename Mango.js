class Mango {
    constructor(x, y, radius) {
        var options = {
            'isStatic' : true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
            }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
        pop();
      }
}