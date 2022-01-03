class papeu{
    constructor(x,y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x
        this.y=y;
		this.r = r;
		//this.width=200;
		//this.height=213;
		  

		this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y, (this.r-20)/2, options)
	    World.add(world, this.body);

	}

	display()
	{
			
			var pos=this.body.position

			push()
			translate(pos.x, pos.y);
			//rectMode(CENTER)
			imageMode(CENTER);
			image(this.image, 0, 0, this.r, this.r)
			//rect(0,0)
			pop()

			
	}

}
    
