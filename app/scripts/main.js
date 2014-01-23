var app = {};
$(document).ready(function(){
	app.startButton = $("#startButton");
	app.timer = $("#timer")
	app.inputBox = $("#ideaInput")
	app.secondCounter = 0;
	app.minuteCounter = 0;
	app.ideas = [];
	app.interval
	app.init = function(){
		app.timer.toggle();
		app.interval = window.setInterval(function(){
			if(app.secondCounter === 59){
				//set to -1, because nevertheless it will increment it(we want 01:00)
				app.secondCounter = -1;
				app.minuteCounter++;
			}
		app.secondCounter++
		console.log(app.prefix0(app.minuteCounter)+":"+app.prefix0(app.secondCounter))
		app.timer.text(app.prefix0(app.minuteCounter)+":"+app.prefix0(app.secondCounter))
		},1000);

	}
	app.prefix0 = function(number){
		return number < 10? "0"+number: number;
	}
	app.inputManager = function(keypress){
		console.log(keypress.which)
		if(keypress.which == 13){
			console.log("enter has been pressed");
			app.ideas.push(app.inputBox.val());
			app.inputBox.val("")
			console.log(app.ideas);
			app.ideaAppender();
		}
	}
	app.ideaAppender = function(){
		$(".jumbotron").append("<p class='idea'>"+app.ideas[app.ideas.length-1]+"</p>")
	}
	$("#startButton").click(function(){
		//set visibility:hidden to every element inside jumbotron
		$(".jumbotron").find("*").each(function(){
			$(this).toggle();
		})
		app.init();
	});
	$("#endButton").click(function(){
		$(this).toggle();
		app.inputBox.toggle();
		app.timer.toggle();
		window.clearInterval(app.interval);
	})
	$("#ideaInput").keypress(function(keypress){
		app.inputManager(keypress)
	});
})