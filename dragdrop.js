
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

		if(draggedCard != null) {
			draggedCard.remove();
		}
		

		const copy = document.createElement("img");
		copy.src = src;
		copy.className = "shoppingCartGifCopy";
		copy.draggable = false;

		copy.style.left = `${Math.random() * 100 + 50}px`;
		copy.style.top = `${Math.random() * 100}px`;

		cart.appendChild(copy);

		AppendToPanel(src);
		

		for(let i = 0; i < list.length; i++) 
			console.log(list[i]);
	}
});


// Bouncing animation when you scroll

let stopBounce;
var gifWindow = document.getElementById("window");

gifWindow.addEventListener("scroll", () => {
  gifWindow.style.backgroundPositionX = `${gifWindow.scrollLeft * -0.1}px`;

  cart.classList.add("bouncing");

  clearTimeout(stopBounce);
  stopBounce = setTimeout(() => {
    cart.classList.remove("bouncing");
  }, 250);
});

