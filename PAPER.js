class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':0.5,
          'density':1.2,
         }
      this.x=x;
      this.y= y
      this.radius=20;
      this.body=Bodies.circle(this.x,this.y,this.radius,options)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       push(); 
       translate(pos.x, pos.y); 
       ellipseMode(RADIUS);
       strokeWeight(3); 
       fill(0,0,255); 
       ellipse(0, 0, this.radius, this.radius) ;
      pop();
    }
  };