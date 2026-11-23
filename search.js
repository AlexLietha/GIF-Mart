
async function Searchbar(event) {
	event.preventDefault();
	var request = document.querySelector("#gif-search").value.trim();
	await Search(request);
}

async function Search(src) {
	// alert(src);
	ClearAllGifs();

	var urls = await Query(src);
	for(let i = 0; i < urls.length; i++) {
		CreateGif(urls[i]);
	}
}

async function Query(src) {
	const params = new URLSearchParams({
		api_key: GIPHY_API_KEY,
		q: src,
		limit: "30",
		rating: "g",
	});

	const apiUrl = `https://api.giphy.com/v1/gifs/search?${params}`;
	const response = await fetch(apiUrl);
	var json = await response.json();

	return json.data.map(gif => gif.images.original.url);
	// return [];
}

function CreateGif(src) {
	const card = document.createElement("div");
	card.className = "card";

	const gif = document.createElement("img");
	gif.src = src;

	card.appendChild(gif);
	document.getElementById("window").appendChild(card);

	card.draggable = true;
	card.addEventListener("dragstart", event => {
		event.dataTransfer.setData("text/plain", src);
	});
}
function ClearAllGifs() {
	const myNode = document.getElementById("window");
	while(myNode.firstChild) {
		myNode.removeChild(myNode.lastChild);
	}
}