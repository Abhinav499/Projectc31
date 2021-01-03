class Plinko {
    constructor(x,y,r){
      var options = {
        isStatic: true,
        'density': 0.8,
        'friction': 1

    }

this.body = Bodies.circle(x,y,r,options);
this.r=r;
World .add(world,this.body);
}
display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill ("white");
    circle(pos.x,pos.y,this.r);
  }
};