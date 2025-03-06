let Version = "1.12"

console.log("Version: " + Version)


function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }
  return obj;
}


let prevkey 
let Direction = "Left"

document.onkeypress = function (e) {
	e = e || window.event;
	console.log(e.keyCode)
	let prevkey
	if (prevkey == 112) {
		if (e.keyCode == 100) {
			window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/guyinsuite.webp"
		
		}
	}
    if (e.keyCode == 119) {
		Direction = "Down"
		
	}
	if (e.keyCode == 97) {
		Direction = "Right"
		
	}
	if (e.keyCode == 115) {
		Direction = "Up"
		
	}
	if (e.keyCode == 100) {
		Direction = "Left"
		
	}
	prevkey = e.keyCode
};
let Cube_X_Old_11 = 0
let Cube_Y_Old_11 = 0
let Cube_X_Old_10 = 0
let Cube_Y_Old_10 = 0
let Cube_X_Old_9 = 0
let Cube_Y_Old_9 = 0
let Cube_X_Old_8 = 0
let Cube_Y_Old_8 = 0
let Cube_X_Old_7 = 0
let Cube_Y_Old_7 = 0
let Cube_X_Old_6 = 0
let Cube_Y_Old_6 = 0
let Cube_X_Old_5 = 0
let Cube_Y_Old_5 = 0
let Cube_X_Old_4 = 0
let Cube_Y_Old_4 = 0
let Cube_X_Old_3 = 0
let Cube_Y_Old_3 = 0
let Cube_X_Old_2 = 0
let Cube_Y_Old_2 = 0
let Cube_X_Old = 0
let Cube_Y_Old = 0
let Cube_X = 0
let Cube_Y = 0

let Cube_Length = 1
let Cube_Char = "🟦"
let Cube_Body = "🟩"

let Empty = "⬜"

let Coin_X_Old = 0
let Coin_Y_Old = 0
let Coin_X = 2
let Coin_Y = 5
let Coin_Char = "🟨"

let screen = { 
 X_0_Y_0: Cube_Char,
 X_0_Y_1: "⬜",
 X_0_Y_2: "⬜",
 X_0_Y_3: "⬜",
 X_0_Y_4: "⬜",
 X_0_Y_5: "⬜",
 X_0_Y_6: "⬜",
 X_0_Y_7: "⬜",


 X_1_Y_0: "⬜",
 X_1_Y_1: "⬜",
 X_1_Y_2: "⬜",
 X_1_Y_3: "⬜",
 X_1_Y_4: "⬜",
 X_1_Y_5: "⬜",
 X_1_Y_6: "⬜",
 X_1_Y_7: "⬜",

 X_2_Y_0: "⬜",
 X_2_Y_1: "⬜",
 X_2_Y_2: "⬜",
 X_2_Y_3: "⬜",
 X_2_Y_4: "⬜",
 X_2_Y_5: Coin_Char,
 X_2_Y_6: "⬜",
 X_2_Y_7: "⬜",

 X_3_Y_0: "⬜",
 X_3_Y_1: "⬜",
 X_3_Y_2: "⬜",
 X_3_Y_3: "⬜",
 X_3_Y_4: "⬜",
 X_3_Y_5: "⬜",
 X_3_Y_6: "⬜",
 X_3_Y_7: "⬜",

 X_4_Y_0: "⬜",
 X_4_Y_1: "⬜",
 X_4_Y_2: "⬜",
 X_4_Y_3: "⬜",
 X_4_Y_4: "⬜",
 X_4_Y_5: "⬜",
 X_4_Y_6: "⬜",
 X_4_Y_7: "⬜",

 X_5_Y_0: "⬜",
 X_5_Y_1: "⬜",
 X_5_Y_2: "⬜",
 X_5_Y_3: "⬜",
 X_5_Y_4: "⬜",
 X_5_Y_5: "⬜",
 X_5_Y_6: "⬜",
 X_5_Y_7: "⬜",

 X_6_Y_0: "⬜",
 X_6_Y_1: "⬜",
 X_6_Y_2: "⬜",
 X_6_Y_3: "⬜",
 X_6_Y_4: "⬜",
 X_6_Y_5: "⬜",
 X_6_Y_6: "⬜",
 X_6_Y_7: "⬜",

 X_7_Y_0: "⬜",
 X_7_Y_1: "⬜",
 X_7_Y_2: "⬜",
 X_7_Y_3: "⬜",
 X_7_Y_4: "⬜",
 X_7_Y_5: "⬜",
 X_7_Y_6: "⬜",
 X_7_Y_7: "⬜",
}

function MoveCube(Dir) {
	
	if (Dir == "Up") {

		if (Cube_Y != 7) {
			LogCubeHistory()
			
			Cube_Y += 1
			
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_Y == 7) {
			
			LogCubeHistory()
			
			Cube_Y = 0
			
			ChangeDisplayCube()
			
			CheckForCoin()
			return 0
		}
	}
	if (Dir == "Down") {
		
		if (Cube_Y != 0) {
			LogCubeHistory()
			Cube_Y -= 1
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_Y == 0) {
			LogCubeHistory()
			Cube_Y = 7
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		
	}
	if (Dir == "Left") {

		if (Cube_X != 7) {
			LogCubeHistory()
			Cube_X += 1
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_X == 7) {
			LogCubeHistory()
			Cube_X = 0
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		
	}
	if (Dir == "Right") {
		if (Cube_X != 0) {
			LogCubeHistory()
			Cube_X -= 1
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_X == 0) {
			LogCubeHistory()
			Cube_X = 7
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		
	}
};

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
	
	
	
};


function RandomizeCoin() {
	
	Coin_X_Old = Coin_X
	Coin_Y_Old = Coin_Y
	


	let Valid = false
	
	while (Valid == false) {
  		Coin_X = Math.floor((Math.random() * 7) + 1);
		Coin_Y = Math.floor((Math.random() * 7) + 1);

		if (screen[`X_${Coin_X}_Y_${Coin_Y}`] != Cube_Body || screen[`X_${Coin_X}_Y_${Coin_Y}`] != Cube_Body  )  {
			
			screen[`X_${Coin_X}_Y_${Coin_Y}`] = Coin_Char
			
			screen[`X_${Coin_X_Old}_Y_${Coin_Y_Old}`] = Cube_Char
			
			document.getElementsByClassName(`X_${Coin_X}_Y_${Coin_Y}`)[0].innerHTML = screen[`X_${Coin_X}_Y_${Coin_Y}`]
			
			document.getElementsByClassName(`X_${Coin_X_Old}_Y_${Coin_Y_Old}`)[0].innerHTML = screen[`X_${Coin_X_Old}_Y_${Coin_Y_Old}`]

			Valid = true

			Cube_Length += 1

			return 0
			
			
		}

	}	
	
};

function LogCubeHistory() {
	
	Cube_X_Old_11 = Cube_X_Old_10
	Cube_Y_Old_10 = Cube_Y_Old_9
	Cube_X_Old_9 = Cube_X_Old_8
	Cube_Y_Old_9 = Cube_Y_Old_8
	Cube_X_Old_8 = Cube_X_Old_7
	Cube_Y_Old_8 = Cube_Y_Old_7
	Cube_X_Old_7 = Cube_X_Old_6
	Cube_Y_Old_7 = Cube_Y_Old_6
	Cube_X_Old_6 = Cube_X_Old_5
	Cube_Y_Old_6 = Cube_Y_Old_5
	Cube_X_Old_5 = Cube_X_Old_4
	Cube_Y_Old_5 = Cube_Y_Old_4
	Cube_X_Old_4 = Cube_X_Old_3
	Cube_Y_Old_4 = Cube_Y_Old_3
	Cube_X_Old_3 = Cube_X_Old_2
	Cube_Y_Old_3 = Cube_Y_Old_2
	Cube_X_Old_2 = Cube_X_Old
	Cube_Y_Old_2 = Cube_Y_Old
	Cube_X_Old = Cube_X
	Cube_Y_Old = Cube_Y
	
};

function CheckForCoin() {
	if (Coin_X == Cube_X) {
		if (Coin_Y == Cube_Y) {		
			RandomizeCoin()
		}
	}
	if (screen[`X_${Cube_X}_Y_${Cube_Y}`] == Cube_Body) {
		console.log("Died")
		Reset()
		return true
	}
};

function Reset() {

	Cube_X = 0
	Cube_Y = 0
	
	Cube_Length = 1

	Direction = "Left"

	screen["X_0_Y_0"] = "⬛"
	screen["X_1_Y_0"] = "⬛"
	screen["X_2_Y_0"] = "⬛"
	screen["X_3_Y_0"] = "⬛"
	screen["X_4_Y_0"] = "⬛"
	screen["X_5_Y_0"] = "⬛"
	screen["X_6_Y_0"] = "⬛"
	screen["X_7_Y_0"] = "⬛"

	screen["X_0_Y_1"] = "⬛"
	screen["X_1_Y_1"] = "⬛"
	screen["X_2_Y_1"] = "⬛"
	screen["X_3_Y_1"] = "⬛"
	screen["X_4_Y_1"] = "⬛"
	screen["X_5_Y_1"] = "⬛"
	screen["X_6_Y_1"] = "⬛"
	screen["X_7_Y_1"] = "⬛"

	screen["X_0_Y_3"] = "⬛"
	screen["X_1_Y_3"] = "⬛"
	screen["X_2_Y_3"] = "⬛"
	screen["X_3_Y_3"] = "⬛"
	screen["X_4_Y_3"] = "⬛"
	screen["X_5_Y_3"] = "⬛"
	screen["X_6_Y_3"] = "⬛"
	screen["X_7_Y_3"] = "⬛"

	screen["X_0_Y_4"] = "⬛"
	screen["X_1_Y_4"] = "⬛"
	screen["X_2_Y_4"] = "⬛"
	screen["X_3_Y_4"] = "⬛"
	screen["X_4_Y_4"] = "⬛"
	screen["X_5_Y_4"] = "⬛"
	screen["X_6_Y_4"] = "⬛"
	screen["X_7_Y_4"] = "⬛"

	screen["X_0_Y_5"] = "⬛"
	screen["X_1_Y_5"] = "⬛"
	screen["X_2_Y_5"] = "⬛"
	screen["X_3_Y_5"] = "⬛"
	screen["X_4_Y_5"] = "⬛"
	screen["X_5_Y_5"] = "⬛"
	screen["X_6_Y_5"] = "⬛"
	screen["X_7_Y_5"] = "⬛"

	screen["X_0_Y_6"] = "⬛"
	screen["X_1_Y_6"] = "⬛"
	screen["X_2_Y_6"] = "⬛"
	screen["X_3_Y_6"] = "⬛"
	screen["X_4_Y_6"] = "⬛"
	screen["X_5_Y_6"] = "⬛"
	screen["X_6_Y_6"] = "⬛"
	screen["X_7_Y_6"] = "⬛"

	screen["X_0_Y_7"] = "⬛"
	screen["X_1_Y_7"] = "⬛"
	screen["X_2_Y_7"] = "⬛"
	screen["X_3_Y_7"] = "⬛"
	screen["X_4_Y_7"] = "⬛"
	screen["X_5_Y_7"] = "⬛"
	screen["X_6_Y_7"] = "⬛"
	screen["X_7_Y_7"] = "⬛"
	
	Update()
	
	setTimeout(function(){RandomizeCoin()}, 1000);

	return 0


}


function ChangeDisplayCube() {

	screen["X_0_Y_0"] = "⬜"
	screen["X_1_Y_0"] = "⬜"
	screen["X_2_Y_0"] = "⬜"
	screen["X_3_Y_0"] = "⬜"
	screen["X_4_Y_0"] = "⬜"
	screen["X_5_Y_0"] = "⬜"
	screen["X_6_Y_0"] = "⬜"
	screen["X_7_Y_0"] = "⬜"

	screen["X_0_Y_1"] = "⬜"
	screen["X_1_Y_1"] = "⬜"
	screen["X_2_Y_1"] = "⬜"
	screen["X_3_Y_1"] = "⬜"
	screen["X_4_Y_1"] = "⬜"
	screen["X_5_Y_1"] = "⬜"
	screen["X_6_Y_1"] = "⬜"
	screen["X_7_Y_1"] = "⬜"

	screen["X_0_Y_3"] = "⬜"
	screen["X_1_Y_3"] = "⬜"
	screen["X_2_Y_3"] = "⬜"
	screen["X_3_Y_3"] = "⬜"
	screen["X_4_Y_3"] = "⬜"
	screen["X_5_Y_3"] = "⬜"
	screen["X_6_Y_3"] = "⬜"
	screen["X_7_Y_3"] = "⬜"

	screen["X_0_Y_4"] = "⬜"
	screen["X_1_Y_4"] = "⬜"
	screen["X_2_Y_4"] = "⬜"
	screen["X_3_Y_4"] = "⬜"
	screen["X_4_Y_4"] = "⬜"
	screen["X_5_Y_4"] = "⬜"
	screen["X_6_Y_4"] = "⬜"
	screen["X_7_Y_4"] = "⬜"

	screen["X_0_Y_5"] = "⬜"
	screen["X_1_Y_5"] = "⬜"
	screen["X_2_Y_5"] = "⬜"
	screen["X_3_Y_5"] = "⬜"
	screen["X_4_Y_5"] = "⬜"
	screen["X_5_Y_5"] = "⬜"
	screen["X_6_Y_5"] = "⬜"
	screen["X_7_Y_5"] = "⬜"

	screen["X_0_Y_6"] = "⬜"
	screen["X_1_Y_6"] = "⬜"
	screen["X_2_Y_6"] = "⬜"
	screen["X_3_Y_6"] = "⬜"
	screen["X_4_Y_6"] = "⬜"
	screen["X_5_Y_6"] = "⬜"
	screen["X_6_Y_6"] = "⬜"
	screen["X_7_Y_6"] = "⬜"

	screen["X_0_Y_7"] = "⬜"
	screen["X_1_Y_7"] = "⬜"
	screen["X_2_Y_7"] = "⬜"
	screen["X_3_Y_7"] = "⬜"
	screen["X_4_Y_7"] = "⬜"
	screen["X_5_Y_7"] = "⬜"
	screen["X_6_Y_7"] = "⬜"
	screen["X_7_Y_7"] = "⬜"
	screen[`X_${Coin_X}_Y_${Coin_Y}`] = Coin_Char
	document.getElementsByClassName(`X_${Cube_X}_Y_${Cube_Y}`)[0].innerHTML = Cube_Char
	document.getElementsByClassName(`X_${Coin_X}_Y_${Coin_Y}`)[0].innerHTML = Coin_Char
	screen[`X_${Cube_X}_Y_${Cube_Y}`] = Cube_Char
	if (Cube_Length == 1) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "⬜"
	}
	if (Cube_Length == 2) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "⬜"
	}
	if (Cube_Length == 3) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "⬜"
	}
	if (Cube_Length == 4) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "⬜"
	}
	if (Cube_Length == 5) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "⬜"
	}
	if (Cube_Length == 6) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "🟩"
		screen[`X_${Cube_X_Old_6}_Y_${Cube_Y_Old_6}`] = "⬜"
	}
	if (Cube_Length == 7) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "🟩"
		screen[`X_${Cube_X_Old_6}_Y_${Cube_Y_Old_6}`] = "🟩"
		screen[`X_${Cube_X_Old_7}_Y_${Cube_Y_Old_7}`] = "⬜"
	}
	if (Cube_Length == 8) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "🟩"
		screen[`X_${Cube_X_Old_6}_Y_${Cube_Y_Old_6}`] = "🟩"
		screen[`X_${Cube_X_Old_7}_Y_${Cube_Y_Old_7}`] = "🟩"
		screen[`X_${Cube_X_Old_8}_Y_${Cube_Y_Old_8}`] = "⬜"
	}
	if (Cube_Length == 9) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "🟩"
		screen[`X_${Cube_X_Old_6}_Y_${Cube_Y_Old_6}`] = "🟩"
		screen[`X_${Cube_X_Old_7}_Y_${Cube_Y_Old_7}`] = "🟩"
		screen[`X_${Cube_X_Old_8}_Y_${Cube_Y_Old_8}`] = "🟩"
		screen[`X_${Cube_X_Old_9}_Y_${Cube_Y_Old_9}`] = "⬜"
	}
	if (Cube_Length >= 10) {
		screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = "🟩"
		screen[`X_${Cube_X_Old_2}_Y_${Cube_Y_Old_2}`] = "🟩"
		screen[`X_${Cube_X_Old_3}_Y_${Cube_Y_Old_3}`] = "🟩"
		screen[`X_${Cube_X_Old_4}_Y_${Cube_Y_Old_4}`] = "🟩"
		screen[`X_${Cube_X_Old_5}_Y_${Cube_Y_Old_5}`] = "🟩"
		screen[`X_${Cube_X_Old_6}_Y_${Cube_Y_Old_6}`] = "🟩"
		screen[`X_${Cube_X_Old_7}_Y_${Cube_Y_Old_7}`] = "🟩"
		screen[`X_${Cube_X_Old_8}_Y_${Cube_Y_Old_8}`] = "🟩"
		screen[`X_${Cube_X_Old_9}_Y_${Cube_Y_Old_9}`] = "🟩"
		screen[`X_${Cube_X_Old_10}_Y_${Cube_Y_Old_10}`] = "⬜"
	}
	Update()
	setTimeout(function(){MoveCube(Direction)}, 125);
	
};












function Redirect(Link) {
	window.location.href = Link
};

function NewTabLink(url) {

	window.open(url, '_blank').focus();
};
if (window.location.href == "https://guinea1980-svg.github.io/ZYME/Snake.html") {
	setTimeout(function(){MoveCube(Direction)}, 125);
}
