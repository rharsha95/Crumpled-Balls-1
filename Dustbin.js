class Dustbin {

    constructor() {

        this.box1B = Bodies.rectangle(3*width/4, 650 ,200,20,{isStatic:true})
        World.add(world,this.box1B);

        this.box2B = Bodies.rectangle(3*width/4 - 100, 610,200,20,{isStatic:true})
        World.add(world,this.box2B);

        this.box3B = Bodies.rectangle(3*width/4 + 100, 610,200,20,{isStatic:true})
        World.add(world,this.box3B);
    }

    display() {
        push();
        fill("red")
        var box1 = rect(this.box1B.position.x, this.box1B.position.y, 200, 20);
        var box2 = rect(this.box2B.position.x, this.box2B.position.y, 20, 100);
        var box3 = rect(this.box3B.position.x, this.box3B.position.y, 20, 100);
        pop();
    }
}