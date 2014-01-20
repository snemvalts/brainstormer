var app = {};
$(document).ready(function(){
	app.startButton = $("#startButton")
	$("#startButton").click(function(){
		//set visibility:hidden to every element inside jumbotron
		$(".jumbotron").find("*").each(function(){
			$(this).toggle();
		})
	})
})