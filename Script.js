console.log("Started1")

function Redirect(Link) {
	window.location.href = Link
}

document.onkeypress = function (e) {
	 e = e || window.event;
	
    	if (e.keyCode == 109) {
		
		
		window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/dsipdfiushndjkn.JPG"
		
	}
};


function download(file, text) {

        //creating an invisible element
        let element = document.createElement('a');
        element.setAttribute('href',
            'data:text/plain;charset=utf-8, '
            + encodeURIComponent(text));
        element.setAttribute('download', file);
        document.body.appendChild(element);
        element.click();

	document.body.removeChild(element);
}
