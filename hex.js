const triangleEdge = 20;
const height = 600; 
const width = 600;

function toRadians (angle) {
  return angle * (Math.PI / 180);
} 

// Functions for Print 1 
function startOne(ctx) {
	let h_index = 0; 
	const sin = Math.sin(toRadians(60))
	const yDelta = sin * triangleEdge; 
	console.log("Ydelta", yDelta)
 

	while (h_index < height) {
		//start back at the beginning
		ctx.moveTo(0, h_index);
		drawOne(ctx, h_index)
		h_index += yDelta;
	}
	ctx.stroke();
}

function hex(ctx, x0, y0) {
	const sin = Math.sin(toRadians(60)), cos = Math.cos(toRadians(60));
	let xDelta = (cos * triangleEdge);
	let yDelta = (sin * triangleEdge);
	let x1 = x0 + xDelta;
	let y1 = y0 - yDelta;
	ctx.lineTo(x1, y1);
	let x2 = x1 + triangleEdge;
	let y2 = y1;
	ctx.lineTo(x2, y2)
	let x3 = x2 + xDelta;
	let y3 = y2 + yDelta;
	ctx.lineTo(x3, y3);
	let x4 = x3 - xDelta;
	let y4 = y3 + yDelta;
	ctx.lineTo(x4, y4);
	let x5 = x4 - triangleEdge;
	let y5 = y4; 
	ctx.lineTo(x5, y5);
	let x6 = x5 -  xDelta;
	let y6 = y5 - yDelta;
	ctx.lineTo(x6, y6);
}

function hexLine(ctx, x0, y0, shift) {
	let xDelta = 2 * triangleEdge;
	let x = x0;
	while (x < width) {
		console.log('X', x)
		ctx.moveTo(x, y0)
		hex(ctx, x, y0)
		let x1 = x + xDelta - shift;
		ctx.moveTo(x1, y0);
		hex(ctx, x1, y0);
		let x2 = x1 + xDelta;
		ctx.moveTo(x2, y0);
		x = x2 + xDelta - shift; 
	}
}

function hexFunc(ctx, shift) {
	const sin = Math.sin(toRadians(60));
	let yDelta = 2 * (sin * triangleEdge);
	let y = 0;
	while (y < height) {
		console.log('Y', y)
		ctx.moveTo(0, y)
		hexLine(ctx, 0 - 2*triangleEdge + shift, y, shift);
		ctx.moveTo(triangleEdge, y + yDelta)
		hexLine(ctx, triangleEdge, y + yDelta, shift)
		y += 2 * yDelta; 
	}
	ctx.stroke();
	return 
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
hexFunc(ctx, 10); 