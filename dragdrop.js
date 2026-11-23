
const list = [];

const cart = document.getElementById("shoppingCart");

cart.addEventListener("dragover", event => {
  event.preventDefault();
});

cart.addEventListener("drop", event => {
	event.preventDefault();
	const src = event.dataTransfer.getData("text/plain");
	if(src) {
		list[list.length] = (src);

		for(let i = 0; i < list.length; i++) 
			console.log(list[i]);
	}
});