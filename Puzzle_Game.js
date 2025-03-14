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

let prevMoveDir = ""

let Cube_X_Old_1 = 0
let Cube_Y_Old_1 = 0
let Cube_X_Old = 0
let Cube_Y_Old = 0
let Cube_X = 0
let Cube_Y = 0

let Cube_Char = "🟦"

let Box_X_Old = 0
let Box_Y_Old = 0
let Box_X = 3
let Box_Y = 3

let Box_Char = "🟫"
let Wall_Positions = [`X_4_Y_0`,`X_4_Y_1`,`X_4_Y_2`,`X_0_Y_3`,`X_1_Y_3`,`X_2_Y_3`,]
let Wall_Char = "⬛"

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
 X_3_Y_3: Box_Char,
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

function MoveBox(Dir) {
	if (Dir == "Up") {

		if (Box_Y != 10) {

			
			Box_Y += 1
			
			ChangeDisplayCube()
			return Box_Y
		}
		if (Box_Y == 10) {
			

			
			Box_Y = 0
			
			
			return Box_Y
		}
	}
	if (Dir == "Down") {
		
		if (Box_Y != 0) {
			Box_Y -= 1
			return Box_Y
		}
		if (Box_Y <= 0) {
			Box_Y = 10
	
			return Box_Y
		}
		
	}
	if (Dir == "Left") {

		if (Box_X != 10) {
	
			Box_X += 1
			
			return 0
		}
		if (Box_X >= 10) {
		
			Box_X = 0
			
			return 0
		}
		
	}
	if (Dir == "Right") {
		if (Box_X != 0) {
		
			Box_X -= 1
			
			return Box_X
		}
		if (Box_X <= 0) {
		
			Box_X = 10
			
			return Box_X
		}
		
	}
}

function CheckForBox() {

	if (`X_${Box_X}_Y_${Box_Y}` == `X_${Cube_X}_Y_${Cube_Y}`) {
		MoveBox(prevMoveDir)
	}
	
}

function MoveCube(Dir) {

	prevMoveDir = Dir
	
	if (Dir == "Up") {

		if (Cube_Y != 10) {
			LogCubeHistory()

			
			Cube_Y += 1

			CheckForBox()
			
			ChangeDisplayCube()
			return Cube_Y
		}
		if (Cube_Y == 10) {
			
			LogCubeHistory()

			
			Cube_Y = 0

			CheckForBox()
			
			ChangeDisplayCube()
			
			return Cube_Y
		}
	}
	if (Dir == "Down") {
		
		if (Cube_Y != 0) {
			LogCubeHistory()

			Cube_Y -= 1
			CheckForBox()
			ChangeDisplayCube()

			return Cube_Y
		}
		if (Cube_Y <= 0) {
			LogCubeHistory()
			Cube_Y = 10
			CheckForBox()
			ChangeDisplayCube()
			
			return Cube_Y
		}
		
	}
	if (Dir == "Left") {

		if (Cube_X != 10) {
			LogCubeHistory()
	
			Cube_X += 1
			CheckForBox()
			ChangeDisplayCube()
			
			return 0
		}
		if (Cube_X >= 10) {
			LogCubeHistory()

			Cube_X = 0
			CheckForBox()
			ChangeDisplayCube()
			
			return 0
		}
		
	}
	if (Dir == "Right") {
		if (Cube_X != 0) {
			LogCubeHistory()

			Cube_X -= 1
			CheckForBox()
			ChangeDisplayCube()
			return Cube_X
		}
		if (Cube_X <= 0) {
			LogCubeHistory()
		
			Cube_X = 10
			CheckForBox()
			ChangeDisplayCube()
			return Cube_X
		}
		
	}
};

function Update() {
	for (let X = 0; X < 11; X++) {
 		 for (let Y = 0; Y < 11; Y++) {
  			document.getElementsByClassName(`X_${X}_Y_${Y}`)[0].innerHTML = screen[`X_${X}_Y_${Y}`]
		}
	}
};


function LogCubeHistory() {
	
	Cube_X_Old1 = Cube_X_Old
	Cube_Y_Old1 = Cube_Y_Old
	Cube_X_Old = Cube_X
	Cube_Y_Old = Cube_Y
	
	Cube_Old_Pos_Data[`Cube_Old_${ValCount}`] = `X_${Cube_X}_Y_${Cube_Y}`

	ValCount += 1
	
};


function Reset() {

	Cube_X = 0
	Cube_Y = 0
	
	Update()

}


function ChangeDisplayCube() {

	
	
	for (let X = 0; X < 11; X++) {
 		 for (let Y = 0; Y < 11; Y++) {
  			screen[`X_${X}_Y_${Y}`] = Empty
		}
	}

	screen[`X_${Cube_X}_Y_${Cube_Y}`] = Cube_Char
	screen[`X_${Box_X}_Y_${Box_Y}`] = Box_Char
	screen[`X_${Cube_X_Old}_Y_${Cube_Y_Old}`] = Empty

	Update()

	setTimeout(ChangeDisplayCube,100)
	
};
