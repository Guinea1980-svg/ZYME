let Version = "1.3"


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
	console.log(e)
	prevkey = e.key
	if (prevkey == "p") {
		if (e.key == "d" ) {
			window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/guyinsuite.webp"
		
		}
	}
    if (e.key == "w") {
		Direction = "Down"
		
	}
	if (e.key == "a") {
		Direction = "Right"
		
	}
	if (e.key == "s") {
		Direction = "Up"
		
	}
	if (e.key == "d") {
		Direction = "Left"
		
	}
	prevkey = e.keyCode
};
let ValCount = 1

let Cube_Old_Pos_Data = {
	Cube_Old_0: `X_0_Y_0`
}




let Cube_X_Old = 0
let Cube_Y_Old = 0
let Cube_X = 0
let Cube_Y = 0
let Cube_Speed = 125

let Cube_Length = 1
let Cube_Char = "🟦"
let Cube_Body = "🟩"

let Score = 0
let High_Score = 0

let Empty = "⬜"

let Coin_X_Old = 0
let Coin_Y_Old = 0
let Coin_X = Math.floor((Math.random() * 10));
let Coin_Y = Math.floor((Math.random() * 10));
let Coin_Char = "🟨"

let Speed_X_Old = 0
let Speed_Y_Old = 0
let Speed_X = Math.floor((Math.random() * 10));
let Speed_Y = Math.floor((Math.random() * 10));
let Speed_Char = "🟥"

let Slow_X_Old = 0
let Slow_Y_Old = 0
let Slow_X = Math.floor((Math.random() * 10));
let Slow_Y = Math.floor((Math.random() * 10));
let Slow_Char = "🟪"

let screen = { 
 X_0_Y_0: Cube_Char,
 X_0_Y_1: "⬜",
 X_0_Y_2: "⬜",
 X_0_Y_3: "⬜",
 X_0_Y_4: "⬜",
 X_0_Y_5: "⬜",
 X_0_Y_6: "⬜",
 X_0_Y_7: "⬜",
 X_0_Y_8: "⬜",
 X_0_Y_9: "⬜",
 X_0_Y_10: "⬜",


 X_1_Y_0: "⬜",
 X_1_Y_1: "⬜",
 X_1_Y_2: "⬜",
 X_1_Y_3: "⬜",
 X_1_Y_4: "⬜",
 X_1_Y_5: "⬜",
 X_1_Y_6: "⬜",
 X_1_Y_7: "⬜",
 X_1_Y_8: "⬜",
 X_1_Y_9: "⬜",
 X_1_Y_10: "⬜",

 X_2_Y_0: "⬜",
 X_2_Y_1: "⬜",
 X_2_Y_2: "⬜",
 X_2_Y_3: "⬜",
 X_2_Y_4: "⬜",
 X_2_Y_5: "⬜",
 X_2_Y_6: "⬜",
 X_2_Y_7: "⬜",
 X_2_Y_8: "⬜",
 X_2_Y_9: "⬜",
 X_2_Y_10: "⬜",

 X_3_Y_0: "⬜",
 X_3_Y_1: "⬜",
 X_3_Y_2: "⬜",
 X_3_Y_3: "⬜",
 X_3_Y_4: "⬜",
 X_3_Y_5: "⬜",
 X_3_Y_6: "⬜",
 X_3_Y_7: "⬜",
 X_3_Y_8: "⬜",
 X_3_Y_9: "⬜",
 X_3_Y_10: "⬜",

 X_4_Y_0: "⬜",
 X_4_Y_1: "⬜",
 X_4_Y_2: "⬜",
 X_4_Y_3: "⬜",
 X_4_Y_4: "⬜",
 X_4_Y_5: "⬜",
 X_4_Y_6: "⬜",
 X_4_Y_7: "⬜",
 X_4_Y_8: "⬜",
 X_4_Y_9: "⬜",
 X_4_Y_10: "⬜",

 X_5_Y_0: "⬜",
 X_5_Y_1: "⬜",
 X_5_Y_2: "⬜",
 X_5_Y_3: "⬜",
 X_5_Y_4: "⬜",
 X_5_Y_5: "⬜",
 X_5_Y_6: "⬜",
 X_5_Y_7: "⬜",
 X_5_Y_8: "⬜",
 X_5_Y_9: "⬜",
 X_5_Y_10: "⬜",

 X_6_Y_0: "⬜",
 X_6_Y_1: "⬜",
 X_6_Y_2: "⬜",
 X_6_Y_3: "⬜",
 X_6_Y_4: "⬜",
 X_6_Y_5: "⬜",
 X_6_Y_6: "⬜",
 X_6_Y_7: "⬜",
 X_6_Y_8: "⬜",
 X_6_Y_9: "⬜",
 X_6_Y_10: "⬜",

 X_7_Y_0: "⬜",
 X_7_Y_1: "⬜",
 X_7_Y_2: "⬜",
 X_7_Y_3: "⬜",
 X_7_Y_4: "⬜",
 X_7_Y_5: "⬜",
 X_7_Y_6: "⬜",
 X_7_Y_7: "⬜",
 X_7_Y_8: "⬜",
 X_7_Y_9: "⬜",
 X_7_Y_10: "⬜",

 X_8_Y_0: "⬜",
 X_8_Y_1: "⬜",
 X_8_Y_2: "⬜",
 X_8_Y_3: "⬜",
 X_8_Y_4: "⬜",
 X_8_Y_5: "⬜",
 X_8_Y_6: "⬜",
 X_8_Y_7: "⬜",
 X_8_Y_8: "⬜",
 X_8_Y_9: "⬜",
 X_8_Y_10: "⬜",

 X_9_Y_0: "⬜",
 X_9_Y_1: "⬜",
 X_9_Y_2: "⬜",
 X_9_Y_3: "⬜",
 X_9_Y_4: "⬜",
 X_9_Y_5: "⬜",
 X_9_Y_6: "⬜",
 X_9_Y_7: "⬜",
 X_9_Y_8: "⬜",
 X_9_Y_9: "⬜",
 X_9_Y_10: "⬜",

 X_10_Y_0: "⬜",
 X_10_Y_1: "⬜",
 X_10_Y_2: "⬜",
 X_10_Y_3: "⬜",
 X_10_Y_4: "⬜",
 X_10_Y_5: "⬜",
 X_10_Y_6: "⬜",
 X_10_Y_7: "⬜",
 X_10_Y_8: "⬜",
 X_10_Y_9: "⬜",
 X_10_Y_10: "⬜",

}

function MoveCube(Dir) {
	
	if (Dir == "Up") {

		if (Cube_Y != 10) {
			LogCubeHistory()
			
			Cube_Y += 1
			
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_Y == 10) {
			
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
			Cube_Y = 10
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		
	}
	if (Dir == "Left") {

		if (Cube_X != 10) {
			LogCubeHistory()
			Cube_X += 1
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		if (Cube_X == 10) {
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
			Cube_X = 10
			ChangeDisplayCube()
			CheckForCoin()
			return 0
		}
		
	}
};

function Update() {
	for (let X = 0; X < 10; X++) {
 		 for (let Y = 0; Y < 10; Y++) {
  			document.getElementsByClassName(`X_${X}_Y_${Y}`)[0].innerHTML = screen[`X_${X}_Y_${Y}`]
		}
	}
};


function RandomizeCoin() {
	
	Coin_X_Old = Coin_X
	Coin_Y_Old = Coin_Y
	


	let Valid = false
	
	while (Valid == false) {
  		Coin_X = Math.floor((Math.random() * 10));
		Coin_Y = Math.floor((Math.random() * 10));

		if (screen[`X_${Coin_X}_Y_${Coin_Y}`] != Cube_Body || screen[`X_${Coin_X}_Y_${Coin_Y}`] != Cube_Char  )  {
			
			screen[`X_${Coin_X}_Y_${Coin_Y}`] = Coin_Char
			
			screen[`X_${Coin_X_Old}_Y_${Coin_Y_Old}`] = Cube_Char
			
			document.getElementsByClassName(`X_${Coin_X}_Y_${Coin_Y}`)[0].innerHTML = screen[`X_${Coin_X}_Y_${Coin_Y}`]
			
			document.getElementsByClassName(`X_${Coin_X_Old}_Y_${Coin_Y_Old}`)[0].innerHTML = screen[`X_${Coin_X_Old}_Y_${Coin_Y_Old}`]

			Valid = true

			Cube_Length += 1
			Cube_Speed = 125

			return 0
			
			
		}

	}	
	
};
function RandomizeSpeed() {
	
	Speed_X_Old = Speed_X
	Speed_Y_Old = Speed_Y
	


	let Valid = false
	
	while (Valid == false) {
  		Speed_X = Math.floor((Math.random() * 10));
		Speed_Y = Math.floor((Math.random() * 10));

		if (screen[`X_${Speed_X}_Y_${Speed_Y}`] != Cube_Body || screen[`X_${Speed_X}_Y_${Speed_Y}`] != Cube_Char  )  {
			
			screen[`X_${Speed_X}_Y_${Speed_Y}`] = Speed_Char
			
			screen[`X_${Speed_X_Old}_Y_${Speed_Y_Old}`] = Cube_Char
			
			document.getElementsByClassName(`X_${Speed_X}_Y_${Speed_Y}`)[0].innerHTML = screen[`X_${Speed_X}_Y_${Speed_Y}`]
			
			document.getElementsByClassName(`X_${Speed_X_Old}_Y_${Speed_Y_Old}`)[0].innerHTML = screen[`X_${Speed_X_Old}_Y_${Speed_Y_Old}`]

			Valid = true

			Cube_Speed = 50

			return 0
			
			
		}

	}	
	
};
function RandomizeSlow() {
	
	Slow_X_Old = Slow_X
	Slow_Y_Old = Slow_Y
	


	let Valid = false
	
	while (Valid == false) {
  		Slow_X = Math.floor((Math.random() * 10));
		Slow_Y = Math.floor((Math.random() * 10));

		if (screen[`X_${Slow_X}_Y_${Slow_Y}`] != Cube_Body || screen[`X_${Slow_X}_Y_${Slow_Y}`] != Cube_Char  )  {
			
			screen[`X_${Slow_X}_Y_${Slow_Y}`] = Slow_Char
			
			screen[`X_${Slow_X_Old}_Y_${Slow_Y_Old}`] = Cube_Char
			
			document.getElementsByClassName(`X_${Slow_X}_Y_${Slow_Y}`)[0].innerHTML = screen[`X_${Slow_X}_Y_${Slow_Y}`]
			
			document.getElementsByClassName(`X_${Slow_X_Old}_Y_${Slow_Y_Old}`)[0].innerHTML = screen[`X_${Slow_X_Old}_Y_${Slow_Y_Old}`]

			Valid = true

			Cube_Speed = 250

			return 0
			
			
		}

	}	
	
};

function LogCubeHistory() {
	
	Cube_Old_Pos_Data[`Cube_Old_${ValCount}`] = `X_${Cube_X}_Y_${Cube_Y}`

	ValCount += 1
	
};

function CheckForCoin() {
	if (Coin_X == Cube_X) {
		if (Coin_Y == Cube_Y) {		
			RandomizeCoin()
		}
	}
	if (Speed_X == Cube_X) {
		if (Speed_Y == Cube_Y) {		
			RandomizeSpeed()
		}
	}
	if (Slow_X == Cube_X) {
		if (Slow_Y == Cube_Y) {		
			RandomizeSlow()
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

	screen["X_0_Y_2"] = "⬛"
	screen["X_1_Y_2"] = "⬛"
	screen["X_2_Y_2"] = "⬛"
	screen["X_3_Y_2"] = "⬛"
	screen["X_4_Y_2"] = "⬛"
	screen["X_5_Y_2"] = "⬛"
	screen["X_6_Y_2"] = "⬛"
	screen["X_7_Y_2"] = "⬛"

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

	screen["X_0_Y_8"] = "⬛"
	screen["X_1_Y_8"] = "⬛"
	screen["X_2_Y_8"] = "⬛"
	screen["X_3_Y_8"] = "⬛"
	screen["X_4_Y_8"] = "⬛"
	screen["X_5_Y_8"] = "⬛"
	screen["X_6_Y_8"] = "⬛"
	screen["X_7_Y_8"] = "⬛"
	screen["X_8_Y_8"] = "⬛"
	screen["X_9_Y_8"] = "⬛"
	screen["X_10_Y_8"] = "⬛"

	screen["X_0_Y_9"] = "⬛"
	screen["X_1_Y_9"] = "⬛"
	screen["X_2_Y_9"] = "⬛"
	screen["X_3_Y_9"] = "⬛"
	screen["X_4_Y_9"] = "⬛"
	screen["X_5_Y_9"] = "⬛"
	screen["X_6_Y_9"] = "⬛"
	screen["X_7_Y_9"] = "⬛"
	screen["X_8_Y_9"] = "⬛"
	screen["X_9_Y_9"] = "⬛"
	screen["X_10_Y_9"] = "⬛"

	screen["X_0_Y_10"] = "⬛"
	screen["X_1_Y_10"] = "⬛"
	screen["X_2_Y_10"] = "⬛"
	screen["X_3_Y_10"] = "⬛"
	screen["X_4_Y_10"] = "⬛"
	screen["X_5_Y_10"] = "⬛"
	screen["X_6_Y_10"] = "⬛"
	screen["X_7_Y_10"] = "⬛"
	screen["X_8_Y_10"] = "⬛"
	screen["X_9_Y_10"] = "⬛"
	screen["X_10_Y_10"] = "⬛"

	Cube_Old_Pos_Data = {}

	ValCount = 0
	
	Update()
	
	setTimeout(function(){RandomizeCoin()}, 5000);


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
	screen["X_8_Y_0"] = "⬜"
	screen["X_9_Y_0"] = "⬜"
	screen["X_10_Y_0"] = "⬜"

	screen["X_0_Y_1"] = "⬜"
	screen["X_1_Y_1"] = "⬜"
	screen["X_2_Y_1"] = "⬜"
	screen["X_3_Y_1"] = "⬜"
	screen["X_4_Y_1"] = "⬜"
	screen["X_5_Y_1"] = "⬜"
	screen["X_6_Y_1"] = "⬜"
	screen["X_7_Y_1"] = "⬜"
	screen["X_8_Y_1"] = "⬜"
	screen["X_9_Y_1"] = "⬜"
	screen["X_10_Y_1"] = "⬜"

	screen["X_0_Y_2"] = "⬜"
	screen["X_1_Y_2"] = "⬜"
	screen["X_2_Y_2"] = "⬜"
	screen["X_3_Y_2"] = "⬜"
	screen["X_4_Y_2"] = "⬜"
	screen["X_5_Y_2"] = "⬜"
	screen["X_6_Y_2"] = "⬜"
	screen["X_7_Y_2"] = "⬜"
	screen["X_8_Y_2"] = "⬜"
	screen["X_9_Y_2"] = "⬜"
	screen["X_10_Y_2"] = "⬜"

	screen["X_0_Y_3"] = "⬜"
	screen["X_1_Y_3"] = "⬜"
	screen["X_2_Y_3"] = "⬜"
	screen["X_3_Y_3"] = "⬜"
	screen["X_4_Y_3"] = "⬜"
	screen["X_5_Y_3"] = "⬜"
	screen["X_6_Y_3"] = "⬜"
	screen["X_7_Y_3"] = "⬜"
	screen["X_8_Y_3"] = "⬜"
	screen["X_9_Y_3"] = "⬜"
	screen["X_10_Y_3"] = "⬜"

	screen["X_0_Y_4"] = "⬜"
	screen["X_1_Y_4"] = "⬜"
	screen["X_2_Y_4"] = "⬜"
	screen["X_3_Y_4"] = "⬜"
	screen["X_4_Y_4"] = "⬜"
	screen["X_5_Y_4"] = "⬜"
	screen["X_6_Y_4"] = "⬜"
	screen["X_7_Y_4"] = "⬜"
	screen["X_8_Y_4"] = "⬜"
	screen["X_9_Y_4"] = "⬜"
	screen["X_10_Y_4"] = "⬜"

	screen["X_0_Y_5"] = "⬜"
	screen["X_1_Y_5"] = "⬜"
	screen["X_2_Y_5"] = "⬜"
	screen["X_3_Y_5"] = "⬜"
	screen["X_4_Y_5"] = "⬜"
	screen["X_5_Y_5"] = "⬜"
	screen["X_6_Y_5"] = "⬜"
	screen["X_7_Y_5"] = "⬜"
	screen["X_8_Y_5"] = "⬜"
	screen["X_9_Y_5"] = "⬜"
	screen["X_10_Y_5"] = "⬜"

	screen["X_0_Y_6"] = "⬜"
	screen["X_1_Y_6"] = "⬜"
	screen["X_2_Y_6"] = "⬜"
	screen["X_3_Y_6"] = "⬜"
	screen["X_4_Y_6"] = "⬜"
	screen["X_5_Y_6"] = "⬜"
	screen["X_6_Y_6"] = "⬜"
	screen["X_7_Y_6"] = "⬜"
	screen["X_8_Y_6"] = "⬜"
	screen["X_9_Y_6"] = "⬜"
	screen["X_10_Y_6"] = "⬜"

	screen["X_0_Y_7"] = "⬜"
	screen["X_1_Y_7"] = "⬜"
	screen["X_2_Y_7"] = "⬜"
	screen["X_3_Y_7"] = "⬜"
	screen["X_4_Y_7"] = "⬜"
	screen["X_5_Y_7"] = "⬜"
	screen["X_6_Y_7"] = "⬜"
	screen["X_7_Y_7"] = "⬜"
	screen["X_8_Y_7"] = "⬜"
	screen["X_9_Y_7"] = "⬜"
	screen["X_10_Y_7"] = "⬜"

	screen["X_0_Y_8"] = "⬜"
	screen["X_1_Y_8"] = "⬜"
	screen["X_2_Y_8"] = "⬜"
	screen["X_3_Y_8"] = "⬜"
	screen["X_4_Y_8"] = "⬜"
	screen["X_5_Y_8"] = "⬜"
	screen["X_6_Y_8"] = "⬜"
	screen["X_7_Y_8"] = "⬜"
	screen["X_8_Y_8"] = "⬜"
	screen["X_9_Y_8"] = "⬜"
	screen["X_10_Y_8"] = "⬜"

	screen["X_0_Y_9"] = "⬜"
	screen["X_1_Y_9"] = "⬜"
	screen["X_2_Y_9"] = "⬜"
	screen["X_3_Y_9"] = "⬜"
	screen["X_4_Y_9"] = "⬜"
	screen["X_5_Y_9"] = "⬜"
	screen["X_6_Y_9"] = "⬜"
	screen["X_7_Y_9"] = "⬜"
	screen["X_8_Y_9"] = "⬜"
	screen["X_9_Y_9"] = "⬜"
	screen["X_10_Y_9"] = "⬜"

	screen["X_0_Y_10"] = "⬜"
	screen["X_1_Y_10"] = "⬜"
	screen["X_2_Y_10"] = "⬜"
	screen["X_3_Y_10"] = "⬜"
	screen["X_4_Y_10"] = "⬜"
	screen["X_5_Y_10"] = "⬜"
	screen["X_6_Y_10"] = "⬜"
	screen["X_7_Y_10"] = "⬜"
	screen["X_8_Y_10"] = "⬜"
	screen["X_9_Y_10"] = "⬜"
	screen["X_10_Y_10"] = "⬜"
	
	document.getElementsByClassName(`X_${Cube_X}_Y_${Cube_Y}`)[0].innerHTML = Cube_Char
	document.getElementsByClassName(`X_${Coin_X}_Y_${Coin_Y}`)[0].innerHTML = Coin_Char
	document.getElementsByClassName(`X_${Speed_X}_Y_${Speed_Y}`)[0].innerHTML = Speed_Char
	document.getElementsByClassName(`X_${Slow_X}_Y_${Slow_Y}`)[0].innerHTML = Slow_Char
	
	screen[`X_${Speed_X}_Y_${Speed_Y}`] = Speed_Char
	screen[`X_${Slow_X}_Y_${Slow_Y}`] = Slow_Char
	screen[`X_${Cube_X}_Y_${Cube_Y}`] = Cube_Char
	screen[`X_${Coin_X}_Y_${Coin_Y}`] = Coin_Char
	
	if (Cube_Length < Object.keys(Cube_Old_Pos_Data).length) {
		for (let X = 0; X < Cube_Length; X++) {
			if (X == Cube_Length) {
				screen[`${Cube_Old_Pos_Data[Object.keys(Cube_Old_Pos_Data)[0]]}`] = Empty
				delete Cube_Old_Pos_Data[Object.keys(Cube_Old_Pos_Data)[0]]
				
			}
			if (X != Cube_Length) {
				screen[`${Cube_Old_Pos_Data[Object.keys(Cube_Old_Pos_Data)[X]]}`] = Cube_Body
			}
			
		}
	}
	Update()
	setTimeout(function(){MoveCube(Direction)}, Cube_Speed);
	
};












function Redirect(Link) {
	window.location.href = Link
};

function NewTabLink(url) {

	window.open(url, '_blank').focus();
};
if (window.location.href == "https://guinea1980-svg.github.io/ZYME/Snake.html") {
	setTimeout(function(){MoveCube(Direction)}, Cube_Speed);
}
