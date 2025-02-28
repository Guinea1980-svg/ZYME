let Version = "1.05"

console.log("Version: " + Version)


let screen = { 
 X_0_Y_0: "🟩",
 X_0_Y_1: "🟥",
 X_0_Y_2: "🟥",
 X_0_Y_3: "🟥",

 X_1_Y_0: "🟥",
 X_1_Y_1: "🟥",
 X_1_Y_2: "🟥",
 X_1_Y_3: "🟥",

 X_2_Y_0: "🟥",
 X_2_Y_1: "🟥",
 X_2_Y_2: "🟦",
 X_2_Y_3: "🟥",

 X_3_Y_0: "🟥",
 X_3_Y_1: "🟥",
 X_3_Y_2: "🟥",
 X_3_Y_3: "🟩",
}



function Update() {
	
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_0_Y_0"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_1_Y_0"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_2_Y_0"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_3_Y_0"]

	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_0_Y_1"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_1_Y_1"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_2_Y_1"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_3_Y_1"]

	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_0_Y_2"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_1_Y_2"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_2_Y_2"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_3_Y_2"]

	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_0_Y_3"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_1_Y_3"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_2_Y_3"]
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_3_Y_3"]
	
	
	
}















function Redirect(Link) {
	window.location.href = Link
}

function NewTabLink(url) {

	window.open(url, '_blank').focus();
}

let prevkey 

document.onkeypress = function (e) {
	 e = e || window.event;
	console.log(e.keyCode)
	if (prevkey == 112) {
		if (e.keyCode == 100) {
			window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/guyinsuite.webp"
		
		}
		
	}
    	if (e.keyCode == 109) {
		window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/dsipdfiushndjkn.JPG"
		
	}
	prevkey = e.keyCode
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
