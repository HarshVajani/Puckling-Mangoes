class stone
{
	constructor(x,y,width,height)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
            
			}
			this.width=800;
			this.height=700;

        this.body=Bodies.rectangle(x, y, 800,700 , options);
		this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);

    }
}