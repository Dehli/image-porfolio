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
		var height = getHeightFromImg(images[i]);
				
		// Inserts the image at the correct location
		var j = 0;
		while (j <= sorted.length) {			
			if (j == sorted.length) {
				sorted.splice(j, 0, images[i]);
				j = sorted.length + 1;
			}
			else if (getHeightFromImg(sorted[j]) >= height) {
				j++;
			}
			else {
				sorted.splice(j, 0, images[i]);
				j = sorted.length + 1;
			}
		}
	}
	
	var tallestHeightInches = getHeightFromImg(sorted[0]);
	var tallestHeightPixels = sorted[0].height;
	for (var i = 1; i < sorted.length; ++i) {
		var ratio = getHeightFromImg(sorted[i])/tallestHeightInches;
		sorted[i].parentNode.height = ratio * tallestHeightPixels;
		sorted[i].height = ratio * tallestHeightPixels;
	}
	
}

function getHeightFromImg(image){
	return Number(image.alt.replace('"','')); // 10" -> 10
}