class Bob {
    constructor(x,y,radius) {
        var options = {
            'restitution' : 1,
            'isStatic': false,
            'friction': 0,
            'density': 1.2
        }
        
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world,this.body)

    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        

        
        ellipseMode(RADIUS);
        
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
    }
    
}