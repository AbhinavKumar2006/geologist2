class Stone{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0,
            density:12,
        }
            this.body = Bodies.rectangle(x,y,width,height);
            this.width = width;
            this.height = height;
            World.add(world,this.body);
        }

        display(){
            var pos = this.body.position;
            push()
            translate(pos.x,pos.y);
            strokeWeight(3);
            stroke("black");
            fill("black");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
        }
    }
