let prevkey 
let Direction = "Left"

let SnakeGameVer = "1.1"

console.log(`Game Version: ${SnakeGameVer}`)

document.onkeypress = function (e) {
	e = e || window.event;
	console.log(e)
	prevkey = e.key
	if (e.key == "w") {
		MoveCube("Down")
		
	}
	if (e.key == "a") {
		MoveCube("Right")
		
	}
	if (e.key == "s") {
		MoveCube("Up")
	
	}
	if (e.key == "d") {
		MoveCube("Left")
		
	}
	prevkey = e.keyCode
}
let ValCount = 1
let Cube_Old_Pos_Data = {
  
}




let Cube_X = 0
let Cube_Y = 0

let Cube_Char = "🟦"

let Score = 0
let High_Score = 0

let Empty = "⬜"

let screen = { 
 X_0_Y_0: Cube_Char,
 X_0_Y_1: Empty,
 X_0_Y_2: Empty,
 X_0_Y_3: Empty,
 X_0_Y_4: Empty,
 X_0_Y_5: Empty,
 X_0_Y_6: Empty,
 X_0_Y_7: Empty,
 X_0_Y_8: Empty,
 X_0_Y_9: Empty,
 X_0_Y_10: Empty,


 X_1_Y_0: Empty,
 X_1_Y_1: Empty,
 X_1_Y_2: Empty,
 X_1_Y_3: Empty,
 X_1_Y_4: Empty,
 X_1_Y_5: Empty,
 X_1_Y_6: Empty,
 X_1_Y_7: Empty,
 X_1_Y_8: Empty,
 X_1_Y_9: Empty,
 X_1_Y_10: Empty,

 X_2_Y_0: Empty,
 X_2_Y_1: Empty,
 X_2_Y_2: Empty,
 X_2_Y_3: Empty,
 X_2_Y_4: Empty,
 X_2_Y_5: Empty,
 X_2_Y_6: Empty,
 X_2_Y_7: Empty,
 X_2_Y_8: Empty,
 X_2_Y_9: Empty,
 X_2_Y_10: Empty,

 X_3_Y_0: Empty,
 X_3_Y_1: Empty,
 X_3_Y_2: Empty,
 X_3_Y_3: Empty,
 X_3_Y_4: Empty,
 X_3_Y_5: Empty,
 X_3_Y_6: Empty,
 X_3_Y_7: Empty,
 X_3_Y_8: Empty,
 X_3_Y_9: Empty,
 X_3_Y_10: Empty,

 X_4_Y_0: Empty,
 X_4_Y_1: Empty,
 X_4_Y_2: Empty,
 X_4_Y_3: Empty,
 X_4_Y_4: Empty,
 X_4_Y_5: Empty,
 X_4_Y_6: Empty,
 X_4_Y_7: Empty,
 X_4_Y_8: Empty,
 X_4_Y_9: Empty,
 X_4_Y_10: Empty,

 X_5_Y_0: Empty,
 X_5_Y_1: Empty,
 X_5_Y_2: Empty,
 X_5_Y_3: Empty,
 X_5_Y_4: Empty,
 X_5_Y_5: Empty,
 X_5_Y_6: Empty,
 X_5_Y_7: Empty,
 X_5_Y_8: Empty,
 X_5_Y_9: Empty,
 X_5_Y_10: Empty,

 X_6_Y_0: Empty,
 X_6_Y_1: Empty,
 X_6_Y_2: Empty,
 X_6_Y_3: Empty,
 X_6_Y_4: Empty,
 X_6_Y_5: Empty,
 X_6_Y_6: Empty,
 X_6_Y_7: Empty,
 X_6_Y_8: Empty,
 X_6_Y_9: Empty,
 X_6_Y_10: Empty,

 X_7_Y_0: Empty,
 X_7_Y_1: Empty,
 X_7_Y_2: Empty,
 X_7_Y_3: Empty,
 X_7_Y_4: Empty,
 X_7_Y_5: Empty,
 X_7_Y_6: Empty,
 X_7_Y_7: Empty,
 X_7_Y_8: Empty,
 X_7_Y_9: Empty,
 X_7_Y_10: Empty,

 X_8_Y_0: Empty,
 X_8_Y_1: Empty,
 X_8_Y_2: Empty,
 X_8_Y_3: Empty,
 X_8_Y_4: Empty,
 X_8_Y_5: Empty,
 X_8_Y_6: Empty,
 X_8_Y_7: Empty,
 X_8_Y_8: Empty,
 X_8_Y_9: Empty,
 X_8_Y_10: Empty,

 X_9_Y_0: Empty,
 X_9_Y_1: Empty,
 X_9_Y_2: Empty,
 X_9_Y_3: Empty,
 X_9_Y_4: Empty,
 X_9_Y_5: Empty,
 X_9_Y_6: Empty,
 X_9_Y_7: Empty,
 X_9_Y_8: Empty,
 X_9_Y_9: Empty,
 X_9_Y_10: Empty,

 X_10_Y_0: Empty,
 X_10_Y_1: Empty,
 X_10_Y_2: Empty,
 X_10_Y_3: Empty,
 X_10_Y_4: Empty,
 X_10_Y_5: Empty,
 X_10_Y_6: Empty,
 X_10_Y_7: Empty,
 X_10_Y_8: Empty,
 X_10_Y_9: Empty,
 X_10_Y_10: Empty,

}

function MoveCube(Dir) {
	
	if (Dir == "Up") {

		if (Cube_Y != 10) {
			LogCubeHistory()
			
			Cube_Y += 1
			
			ChangeDisplayCube()
			return Cube_Y
		}
		if (Cube_Y == 10) {
			
			LogCubeHistory()
			
			Cube_Y = 0
			
			ChangeDisplayCube()
			
			return Cube_Y
		}
	}
	if (Dir == "Down") {
		
		if (Cube_Y != 0) {
			LogCubeHistory()
			Cube_Y -= 1
			ChangeDisplayCube()
			return Cube_Y
		}
		if (Cube_Y <= 0) {
			LogCubeHistory()
			Cube_Y = 10
			ChangeDisplayCube()
			return Cube_Y
		}
		
	}
	if (Dir == "Left") {

		if (Cube_X != 10) {
			LogCubeHistory()
			Cube_X += 1
			ChangeDisplayCube()
			return 0
		}
		if (Cube_X >= 10) {
			LogCubeHistory()
			Cube_X = 0
			ChangeDisplayCube()
			return 0
		}
		
	}
	if (Dir == "Right") {
		if (Cube_X != 0) {
			LogCubeHistory()
			Cube_X -= 1
			ChangeDisplayCube()
			return Cube_X
		}
		if (Cube_X <= 0) {
			LogCubeHistory()
			Cube_X = 10
			ChangeDisplayCube()
			return Cube_X
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


function LogCubeHistory() {
	
	Cube_Old_Pos_Data[`Cube_Old_${ValCount}`] = `X_${Cube_X}_Y_${Cube_Y}`

	ValCount += 1
	
};


function Reset() {

	Cube_X = 0
	Cube_Y = 0
	
	Update()

}


function ChangeDisplayCube() {

	
	screen[`X_${Cube_X}_Y_${Cube_Y}`] = Cube_Char
	
	for (let X = 0; X < 10; X++) {
 		 for (let Y = 0; Y < 10; Y++) {
  			screen[`X_${X}_Y_${Y}`] = "⬜"
		}
	}
	

	Update()
	
};
