window.onload = pageLoad;
function pageLoad() {
	document.getElementById("start").onclick = startGame;
}
function startGame() {
	alert("Ready");
	timeStart();
	addBox();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min * 60;
	var x = document.getElementById('timerClock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);
	var allbox = document.getElementById("game-layer");
	function timeCount() {
		if (second > 0) {
			x.innerHTML = "Timer: " + second;
			second--;
			console.log(second);

			if (allbox.childElementCount == 0) {
				alert("Win!");
				clearInterval(timer);
				clearScreen();
			}
		}
		else if (second <= 0) {
			alert("Time out!")
			x.innerHTML = "Timer: 0";
			timer = null; //reset timer
			clearInterval(timer);//เคลียการจับเวลา
			clearScreen();
		}
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen

	}

}

function addBox() {
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color");
	for (var i = 0; i < numbox; i++) {
		var boxcolor = document.createElement("div");
		var box = document.createElement("div");
		box.className = "square";
		box.id = "box" + i;
		box.style.left = Math.random() * (500 - 25) + "px";
		box.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(box);
		boxcolor.className = colorDrop.value;
		document.getElementById(box.id).appendChild(boxcolor);
		bindBox(box);
	}
}

function bindBox(box) {

	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function () {
		document.getElementById(box.id).remove();
	}
}

function clearScreen() {
	var allbox = document.getElementById("game-layer");
	console.log(allbox.childElementCount);
	while (allbox.firstChild) {
		allbox.removeChild(allbox.lastChild);
	}
}



