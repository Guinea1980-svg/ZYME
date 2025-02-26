let Version = "1.02"

console.log("Version: " + Version)

function Redirect(Link) {
	window.location.href = Link
}

function NewTabLink(url) {

	window.open(url, '_blank').focus();
}

let prevkey 

document.onkeypress = function (e) {
	 e = e || window.event;
	prevkey = e.keyCode
	console.log(e.keyCode)
	if (prevkey == 112) {
		if (e.keyCode == 100) {
			window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/dsipdfiushndjkn.JPG"
		
		}
		
	}
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
