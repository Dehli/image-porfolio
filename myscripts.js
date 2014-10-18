function setup() {
	var titleObject = document.getElementById("title");
	titleObject.innerHTML = titleObject.innerHTML.toUpperCase ();
	
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; ++i) {
		var src = images[i].src;
		
		if (src.indexOf("flickr") == -1) {
			images[i].style.display = 'none';
		}
	}
}

function setupHome() {
	var images = document.getElementsByTagName('img');
	
	// Sort images based on their height
	var sorted = [];
	for (var i = 0; i < images.length; ++i) {
		var heightString = images[i].alt; // Format 10"
		var matches = heightString.match(/(\d+)sl(\d+)/);
		
		alert(matches[0]);
	}
}