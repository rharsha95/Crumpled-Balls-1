class Paper {

    constructor() {
        this.body = Bodies.circle(100, 500, 20, {isStatic: false, density:1.2, friction: 0.5});
        World.add(world,this.body);
    }

    display() {
        push();
        fill("pink")
        var paper = circle(this.body.position.x,this.body.position.y,20);
        pop();
    }
}