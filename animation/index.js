const SIZE=1000;
const OBJECTS=[];
let SPEED=0.01;

function main(){
	let canvas = document.getElementById("myCanvas")
	let ctx=canvas.getContext("2d");
	
	canvas.width=SIZE;
	canvas.height=SIZE;
	
	ctx.scale(SIZE,SIZE);
	
	drawScene();
	animate();
}

function animate(){
	let probability=Math.random(); 
	if(probability<0.3){ 
		let properties={
			levels:4,
			wallColor:"#731",
			roofColor:'hsla(' + (Math.random() * 360) + ', 50%, 30%, 1)'
		}
		let y=0.5+Math.random()/2; 
		let size=(y*y/2)*0.5;
		
		let treeProbability=Math.random();
		if(treeProbability<0.5){
			OBJECTS.push(new Tree([1+size*0.5,y], size));
		}else{
			OBJECTS.push(new House([1+size*0.5,y], size, properties));
		}
	}
	
	for(let i=0;i<OBJECTS.length;i++){
		OBJECTS[i].location[0]-=SPEED*Math.pow(OBJECTS[i].location[1],3);
		if(OBJECTS[i].location[0]<-OBJECTS[i].scale*0.5){
			OBJECTS.splice(i,1); 
			i--;
		}
	}
	
	OBJECTS.sort((a,b) => a.scale-b.scale);
	
	drawScene();
	window.requestAnimationFrame(animate);
}

function drawScene(){
	
	let canvas = document.getElementById("myCanvas")
	let ctx=canvas.getContext("2d");
	
	drawBackground(ctx);
	for(let i=0;i<OBJECTS.length;i++){
        OBJECTS[i].draw(ctx);
	}
}

function drawBackground(ctx){
	ctx.beginPath();
	ctx.fillStyle="lightblue";
	ctx.rect(0,0,1,0.5);
	ctx.fill();
	
	ctx.beginPath();
	ctx.fillStyle="green";
	ctx.rect(0,0.5,1,0.5);
	ctx.fill();
}

class House{
	constructor(loc, scale, properties){
		this.location=loc;
		this.scale=scale;
		this.properties=properties;
		this.angles=[];
		for(let i=1;i<=this.properties.levels;i++){
			this.angles[i]=(Math.random()-0.5)*0.2;
		}
	}
	draw(ctx){
		ctx.beginPath();
	
		ctx.save();
		ctx.translate(this.location[0],this.location[1]);
		ctx.scale(this.scale,this.scale);
		ctx.lineWidth=0.04;
		
		ctx.fillStyle=this.properties.wallColor;
		
		for(let i=1;i<=this.properties.levels;i++){
			ctx.beginPath();
			ctx.rect(-0.5,-0.1,1.0,0.1);
			ctx.stroke();
			ctx.fill();
			ctx.translate(0,-0.1);
			ctx.rotate(this.angles[i]);
		}
		
		
		ctx.fillStyle=this.properties.roofColor;
		
		ctx.beginPath();
		ctx.moveTo(-0.5,-0.0);
		ctx.lineTo(+0.5,-0.0);
		ctx.lineTo(+0.0,-0.4);
		ctx.lineTo(-0.5,-0.0);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		ctx.restore();
		
		if(this.properties.door==true){
			ctx.save();
			ctx.translate(this.location[0],this.location[1]);
			ctx.scale(this.scale,this.scale);
			ctx.lineWidth=0.04;
			
			ctx.fillStyle="black";
			ctx.beginPath();
			ctx.rect(0.1,-0.4,0.2,0.4);
			ctx.stroke();
			ctx.fill();
			
			ctx.restore();
		}
	}
}


class Tree{
	constructor(loc, scale){
		this.location=loc;
		this.scale=scale;
	}
	draw(ctx){
		ctx.beginPath();
	
		ctx.save();
		ctx.translate(this.location[0],this.location[1]);
		ctx.scale(this.scale,this.scale);
		ctx.lineWidth=0.04;
		
		ctx.fillStyle="brown";
		
		ctx.beginPath();
		ctx.rect(-0.02,-0.1,0.04,0.1);
		ctx.stroke();
		ctx.fill();
		
		ctx.translate(0,-0.1);
		
		ctx.fillStyle="rgba(0,255,0,1)";
		ctx.beginPath();
		ctx.moveTo(-0.2,-0.0);
		ctx.lineTo(+0.2,-0.0);
		ctx.lineTo(+0.0,-0.9);
		ctx.lineTo(-0.2,-0.0);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		ctx.restore();
	}
}

main();