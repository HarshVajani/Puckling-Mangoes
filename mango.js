class Mango
{
	constructor(x,y,width,height)
	{
		var options={
            isStatic:true,
            restitution:0,
            friction:1
            
			}
			this.width=800;
			this.height=700;

        this.body=Bodies.rectangle(x, y, 800,700 , options);
		this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);

    }
}