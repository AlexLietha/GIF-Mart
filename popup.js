const panel = document.getElementById("cartPanel");
const backdrop = document.getElementById("backdrop");

cart.addEventListener("click", () => {
	panel.hidden = !panel.hidden;
	backdrop.hidden = panel.hidden;


});


document.getElementById("closePanel").addEventListener("click", () => {
	panel.hidden = true;
	backdrop.hidden = panel.hidden		
});



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

	item.append(copy, removeButton);
	document.getElementById("cartItems").appendChild(item);

}
