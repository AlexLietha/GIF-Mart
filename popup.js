const panel = document.getElementById("cartPanel");
const backdrop = document.getElementById("backdrop");

cart.addEventListener("click", () => {
	panel.hidden = !panel.hidden;
	backdrop.hidden = panel.hidden;


});


document.getElementById("closePanel").addEventListener("click", () => {
	ClosePanel();
});
document.getElementById("backdrop").addEventListener("click", () => {
	ClosePanel();
});
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		ClosePanel();
	}
});

function ClosePanel() {
	panel.hidden = true;
	backdrop.hidden = panel.hidden		
}



function AppendToPanel(src) {
	const item = document.createElement("div");
	item.className = "cartItem";

	const copy = document.createElement("img");
	copy.src = src;
	copy.className = "shoppingCartGifCopy";
	copy.draggable = false;

	const removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.className = "removeCartItem";
	removeButton.innerHTML = "🗑";
	removeButton.setAttribute("aria-label", "Remove GIF from cart");

	removeButton.addEventListener("click", () => item.remove());
	
	removeButton.addEventListener("click", () => {
		item.remove();

		const index = list.indexOf(src);
		if (index !== -1) {
			list.splice(index, 1);
		}
	});	

	item.append(copy, removeButton);
	document.getElementById("cartItems").appendChild(item);

}



var checkout = document.getElementById("checkout");
checkout.addEventListener("click", () => {
	alert(list);
});


