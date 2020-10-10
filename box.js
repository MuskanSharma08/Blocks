class Block{
    constructor(x, y, w, h, color){
        var options = {
            isStatic:true,
            restitution:1,
            density:0.2
        }
     this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
}