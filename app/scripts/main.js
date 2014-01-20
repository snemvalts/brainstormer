var app = {};
$(document).ready(function(){
	app.startButton = $("#startButton");
	app.timer = $("#timer")
	app.secondCounter = 0;
	app.minuteCounter = 0;
	app.init = function(){
		window.setInterval(function(){
		if(app.secondCounter % 59 === 0 && app.secondCounter !== 0){
			app.minuteCounter++;
			app.secondCounter = 0;
		}
		else{
			app.secondCounter++;
		}
		app.timer.html(app.minuteCounter+":"+app.secondCounter);
		console.log(app.minuteCounter+":"+app.secondCounter)
		},1000)
	}
	$("#startButton").click(function(){
		//set visibility:hidden to every element inside jumbotron
		$(".jumbotron").find("*").each(function(){
			$(this).toggle();
		})
		app.init();
	})
})