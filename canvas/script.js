const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
/*
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
//ctx.lineTo(50,50);
ctx.closePath();
ctx.fillStyle = "coral";
ctx.fill();

// Draw head
ctx.beginPath();
const centerX = canvas.width/2;
const centerY = canvas.height/2;


ctx.arc(centerX, centerY, 200, 0, Math.PI*2);


// Move to mouth

ctx.moveTo(centerX + 100, centerY);


// Draw mouth

ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

//Move left eye
ctx.moveTo(centerX - 60, centerY - 80);

// Draw left eye 
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

//Move right eye

ctx.moveTo(centerX + 100, centerY - 80);

// Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.stroke();
*/

// Animetion 1
const circle = {
	x: 200,
	y: 200,
	size :30,
	dx: 5,
	dy: 4
}

function drawCircle() {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI *2);
	ctx.fillStyle = "purple";
	ctx.fill();
}

drawCircle();


