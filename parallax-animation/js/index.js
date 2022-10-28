const SIZE=1000;
let SPEED=0.01;
let frames=0

function main(){
	let canvas = document.getElementById("myCanvas")
	
	canvas.width=SIZE;
	canvas.height=SIZE;
	
	montanha = new Mountain('#8A7D9E', SIZE, SIZE, 2, 0.5, 500, 300, -1,
	{}
	)
	montanha2 = new Mountain('#5F5D99', SIZE, SIZE, 1.5, 0.3, 650, 400, 0,
	{tree_probability: 0.005, min_scale: 50, max_scale:100, tree_default_timeout: 250}
	)
	montanha3 = new Mountain('#4A4D82', SIZE, SIZE, 1, 0.2, 700, 550, 0,
	{tree_probability: 0.007, min_scale: 70, max_scale:150, tree_default_timeout: 150}
	)
	montanha4 = new Mountain('#202A5C', SIZE, SIZE, 0.5, 0.1, 800, 650, 0,
	{tree_probability: 0.005, min_scale: 120, max_scale:250, tree_default_timeout: 50}
	)

	animate();
}

function animate(){
	
	if (frames%6 == 0) montanha.update_map();
	if (frames%4 == 0) montanha2.update_map()
	if (frames%2 == 0) montanha3.update_map()
	montanha4.update_map()
	draw_scene();

	frames+=1
	window.requestAnimationFrame(animate);
}

function draw_scene(){
	
	let canvas = document.getElementById("myCanvas")
	let ctx=canvas.getContext("2d");
	draw_background(ctx);
	montanha.draw_mountain(ctx)
	montanha.draw_trees(ctx)
	montanha2.draw_mountain(ctx)
	montanha2.draw_trees(ctx)
	montanha3.draw_mountain(ctx)
	montanha3.draw_trees(ctx)
	montanha4.draw_mountain(ctx)
	montanha4.draw_trees(ctx)

}

function draw_background(ctx){
	ctx.beginPath();
	var gradient = ctx.createRadialGradient(300, 350, 150, 300, 350, 800);
	gradient.addColorStop(0, '#FD9929');
	gradient.addColorStop(0.25, '#FF6750')
	gradient.addColorStop(0.5, '#FF5254');
	gradient.addColorStop(0.75, '#DD2877');
	gradient.addColorStop(1, '#CC1D82');
	ctx.fillStyle=gradient;
	ctx.rect(0,0,1000,1000);
	ctx.fill();
	ctx.closePath()

	ctx.beginPath();
	var gradient = ctx.createRadialGradient(300, 350, 10, 300, 200, 300);
	gradient.addColorStop(0, '#FDC91F');
	gradient.addColorStop(1, '#FF7949');

	ctx.arc(300, 350, 170, 0, 2 * Math.PI);

	ctx.fillStyle = gradient;
	ctx.fill();
}

main();
