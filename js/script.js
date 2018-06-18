

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const radius = 5;
let coordArray = [];

canvas.addEventListener('click', (e) => {
	const point = [e.offsetX, e.offsetY];
	const hue = Math.floor(Math.random() * 360);
	const color = `hsl(${hue}, 100%, 50%)`;

	coordArray.push(point);
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
	ctx.lineWidth = 3;

	ctx.beginPath();
	ctx.arc(...point, radius, 0, 2 * Math.PI);
	ctx.fill();
	 
	if (coordArray.length === 1) {
		return;
	} else if (coordArray.length === 2) {
		ctx.beginPath();
		ctx.moveTo(...point);
		ctx.lineTo(...coordArray[0]);
		ctx.stroke();
	} else {
		ctx.beginPath();
		ctx.moveTo(...point);
		ctx.lineTo(...coordArray[0]);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(...point);
		ctx.lineTo(...coordArray[1]);
		ctx.stroke();

		coordArray.shift();
	}
});