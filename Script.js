let Version = "1.07"

console.log("Version: " + Version)

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
		MoveCube("Down")
		
	}
	if (e.keyCode == 97) {
		MoveCube("Right")
		
	}
	if (e.keyCode == 115) {
		MoveCube("Up")
		
	}
	if (e.keyCode == 100) {
		MoveCube("Left")
		
	}
	prevkey = e.keyCode
};

let Cube_X_Old = 0
let Cube_Y_Old = 0
let Cube_X = 0
let Cube_Y = 0
let Cube_Char = "🟦"

let screen = { 
 X_0_Y_0: "🟦",
 X_0_Y_1: "🟥",
 X_0_Y_2: "🟥",
 X_0_Y_3: "🟥",
 X_0_Y_4: "🟥",
 X_0_Y_5: "🟥",
 X_0_Y_6: "🟥",
 X_0_Y_7: "🟥",


 X_1_Y_0: "🟥",
 X_1_Y_1: "🟥",
 X_1_Y_2: "🟥",
 X_1_Y_3: "🟥",
 X_1_Y_4: "🟥",
 X_1_Y_5: "🟥",
 X_1_Y_6: "🟥",
 X_1_Y_7: "🟥",

 X_2_Y_0: "🟥",
 X_2_Y_1: "🟥",
 X_2_Y_2: "🟥",
 X_2_Y_3: "🟥",
 X_2_Y_4: "🟥",
 X_2_Y_5: "🟥",
 X_2_Y_6: "🟥",
 X_2_Y_7: "🟥",

 X_3_Y_0: "🟥",
 X_3_Y_1: "🟥",
 X_3_Y_2: "🟥",
 X_3_Y_3: "🟥",
 X_3_Y_4: "🟥",
 X_3_Y_5: "🟥",
 X_3_Y_6: "🟥",
 X_3_Y_7: "🟥",

 X_4_Y_0: "🟥",
 X_4_Y_1: "🟥",
 X_4_Y_2: "🟥",
 X_4_Y_3: "🟥",
 X_4_Y_4: "🟥",
 X_4_Y_5: "🟥",
 X_4_Y_6: "🟥",
 X_4_Y_7: "🟥",

 X_5_Y_0: "🟥",
 X_5_Y_1: "🟥",
 X_5_Y_2: "🟥",
 X_5_Y_3: "🟥",
 X_5_Y_4: "🟥",
 X_5_Y_5: "🟥",
 X_5_Y_6: "🟥",
 X_5_Y_7: "🟥",

 X_6_Y_0: "🟥",
 X_6_Y_1: "🟥",
 X_6_Y_2: "🟥",
 X_6_Y_3: "🟥",
 X_6_Y_4: "🟥",
 X_6_Y_5: "🟥",
 X_6_Y_6: "🟥",
 X_6_Y_7: "🟥",

 X_7_Y_0: "🟥",
 X_7_Y_1: "🟥",
 X_7_Y_2: "🟥",
 X_7_Y_3: "🟥",
 X_7_Y_4: "🟥",
 X_7_Y_5: "🟥",
 X_7_Y_6: "🟥",
 X_7_Y_7: "🟥",
}



function Update() {
	
	document.getElementsByClassName("X_0_Y_0")[0].innerHTML = screen["X_0_Y_0"]
	document.getElementsByClassName("X_1_Y_0")[0].innerHTML = screen["X_1_Y_0"]
	document.getElementsByClassName("X_2_Y_0")[0].innerHTML = screen["X_2_Y_0"]
	document.getElementsByClassName("X_3_Y_0")[0].innerHTML = screen["X_3_Y_0"]
	document.getElementsByClassName("X_4_Y_0")[0].innerHTML = screen["X_4_Y_0"]
	document.getElementsByClassName("X_5_Y_0")[0].innerHTML = screen["X_5_Y_0"]
	document.getElementsByClassName("X_6_Y_0")[0].innerHTML = screen["X_6_Y_0"]
	document.getElementsByClassName("X_7_Y_0")[0].innerHTML = screen["X_7_Y_0"]

	document.getElementsByClassName("X_0_Y_1")[0].innerHTML = screen["X_0_Y_1"]
	document.getElementsByClassName("X_1_Y_1")[0].innerHTML = screen["X_1_Y_1"]
	document.getElementsByClassName("X_2_Y_1")[0].innerHTML = screen["X_2_Y_1"]
	document.getElementsByClassName("X_3_Y_1")[0].innerHTML = screen["X_3_Y_1"]
	document.getElementsByClassName("X_4_Y_1")[0].innerHTML = screen["X_4_Y_1"]
	document.getElementsByClassName("X_5_Y_1")[0].innerHTML = screen["X_5_Y_1"]
	document.getElementsByClassName("X_6_Y_1")[0].innerHTML = screen["X_6_Y_1"]
	document.getElementsByClassName("X_7_Y_1")[0].innerHTML = screen["X_7_Y_1"]

	document.getElementsByClassName("X_0_Y_2")[0].innerHTML = screen["X_0_Y_2"]
	document.getElementsByClassName("X_1_Y_2")[0].innerHTML = screen["X_1_Y_2"]
	document.getElementsByClassName("X_2_Y_2")[0].innerHTML = screen["X_2_Y_2"]
	document.getElementsByClassName("X_3_Y_2")[0].innerHTML = screen["X_3_Y_2"]
	document.getElementsByClassName("X_4_Y_2")[0].innerHTML = screen["X_4_Y_2"]
	document.getElementsByClassName("X_5_Y_2")[0].innerHTML = screen["X_5_Y_2"]
	document.getElementsByClassName("X_6_Y_2")[0].innerHTML = screen["X_6_Y_2"]
	document.getElementsByClassName("X_7_Y_2")[0].innerHTML = screen["X_7_Y_2"]

	document.getElementsByClassName("X_0_Y_3")[0].innerHTML = screen["X_0_Y_3"]
	document.getElementsByClassName("X_1_Y_3")[0].innerHTML = screen["X_1_Y_3"]
	document.getElementsByClassName("X_2_Y_3")[0].innerHTML = screen["X_2_Y_3"]
	document.getElementsByClassName("X_3_Y_3")[0].innerHTML = screen["X_3_Y_3"]
	document.getElementsByClassName("X_4_Y_3")[0].innerHTML = screen["X_4_Y_3"]
	document.getElementsByClassName("X_5_Y_3")[0].innerHTML = screen["X_5_Y_3"]
	document.getElementsByClassName("X_6_Y_3")[0].innerHTML = screen["X_6_Y_3"]
	document.getElementsByClassName("X_7_Y_3")[0].innerHTML = screen["X_7_Y_3"]

	document.getElementsByClassName("X_0_Y_4")[0].innerHTML = screen["X_0_Y_4"]
	document.getElementsByClassName("X_1_Y_4")[0].innerHTML = screen["X_1_Y_4"]
	document.getElementsByClassName("X_2_Y_4")[0].innerHTML = screen["X_2_Y_4"]
	document.getElementsByClassName("X_3_Y_4")[0].innerHTML = screen["X_3_Y_4"]
	document.getElementsByClassName("X_4_Y_4")[0].innerHTML = screen["X_4_Y_4"]
	document.getElementsByClassName("X_5_Y_4")[0].innerHTML = screen["X_5_Y_4"]
	document.getElementsByClassName("X_6_Y_4")[0].innerHTML = screen["X_6_Y_4"]
	document.getElementsByClassName("X_7_Y_4")[0].innerHTML = screen["X_7_Y_4"]

	document.getElementsByClassName("X_0_Y_5")[0].innerHTML = screen["X_0_Y_5"]
	document.getElementsByClassName("X_1_Y_5")[0].innerHTML = screen["X_1_Y_5"]
	document.getElementsByClassName("X_2_Y_5")[0].innerHTML = screen["X_2_Y_5"]
	document.getElementsByClassName("X_3_Y_5")[0].innerHTML = screen["X_3_Y_5"]
	document.getElementsByClassName("X_4_Y_5")[0].innerHTML = screen["X_4_Y_5"]
	document.getElementsByClassName("X_5_Y_5")[0].innerHTML = screen["X_5_Y_5"]
	document.getElementsByClassName("X_6_Y_5")[0].innerHTML = screen["X_6_Y_5"]
	document.getElementsByClassName("X_7_Y_5")[0].innerHTML = screen["X_7_Y_5"]

	document.getElementsByClassName("X_0_Y_6")[0].innerHTML = screen["X_0_Y_6"]
	document.getElementsByClassName("X_1_Y_6")[0].innerHTML = screen["X_1_Y_6"]
	document.getElementsByClassName("X_2_Y_6")[0].innerHTML = screen["X_2_Y_6"]
	document.getElementsByClassName("X_3_Y_6")[0].innerHTML = screen["X_3_Y_6"]
	document.getElementsByClassName("X_4_Y_6")[0].innerHTML = screen["X_4_Y_6"]
	document.getElementsByClassName("X_5_Y_6")[0].innerHTML = screen["X_5_Y_6"]
	document.getElementsByClassName("X_6_Y_6")[0].innerHTML = screen["X_6_Y_6"]
	document.getElementsByClassName("X_7_Y_6")[0].innerHTML = screen["X_7_Y_6"]

	document.getElementsByClassName("X_0_Y_7")[0].innerHTML = screen["X_0_Y_7"]
	document.getElementsByClassName("X_1_Y_7")[0].innerHTML = screen["X_1_Y_7"]
	document.getElementsByClassName("X_2_Y_7")[0].innerHTML = screen["X_2_Y_7"]
	document.getElementsByClassName("X_3_Y_7")[0].innerHTML = screen["X_3_Y_7"]
	document.getElementsByClassName("X_4_Y_7")[0].innerHTML = screen["X_4_Y_7"]
	document.getElementsByClassName("X_5_Y_7")[0].innerHTML = screen["X_5_Y_7"]
	document.getElementsByClassName("X_6_Y_7")[0].innerHTML = screen["X_6_Y_7"]
	document.getElementsByClassName("X_7_Y_7")[0].innerHTML = screen["X_7_Y_7"]
	
	
	
}

function MoveCube(Dir) {
	
	if (Dir == "Up") {

		if (Cube_Y != 7) {
			Cube_X_Old = Cube_X
			Cube_Y_Old = Cube_Y
			Cube_Y += 1
		}
	}
	if (Dir == "Down") {
		if (Cube_Y != 0) {
			Cube_X_Old = Cube_X
			Cube_Y_Old = Cube_Y
			Cube_Y -= 1
		}
		
	}
	if (Dir == "Left") {

		if (Cube_X != 7) {
			Cube_X_Old = Cube_X
			Cube_Y_Old = Cube_Y
			Cube_X += 1
		}
		
	}
	if (Dir == "Right") {
		if (Cube_X != 0) {
			Cube_X_Old = Cube_X
			Cube_Y_Old = Cube_Y
			Cube_X -= 1
		}
		
	}
	ChangeDisplayCube()
	
	
}

function ChangeDisplayCube() {
	
	document.getElementsByClassName(`X_${Cube_X}_Y_${Cube_Y}`)[0].innerHTML = Cube_Char
	screen[`X_${Cube_X}_Y_${Cube_Y}`] = Cube_Char
	screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟥"
	document.getElementsByClassName(`X_${Cube_X_Old}_Y_${Cube_Y_Old}`)[0].innerHTML = "🟥"
	
	
}












function Redirect(Link) {
	window.location.href = Link
}

function NewTabLink(url) {

	window.open(url, '_blank').focus();
}



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
