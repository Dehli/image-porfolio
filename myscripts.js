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