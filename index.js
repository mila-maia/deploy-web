let canvas = document.querySelector('canvas');
let ctx_ = document.getElementById('chart').getContext('2d');

let ctx = canvas.getContext('2d');
let isWriting = false;

let updateCanvas = () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
}

let reset = () => {
    updateCanvas();
	pixels = [];
	createGrid();
}

// Window Handlers.
window.onload = updateCanvas();
window.addEventListener('resize', e => reset());
window.addEventListener('keyup', e => {
    if(e.keyCode == 67) {
        reset();
    }
});
