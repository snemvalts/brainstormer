var app={};$(document).ready(function(){app.startButton=$("#startButton"),app.timer=$("#timer"),app.inputBox=$("#ideaInput"),app.secondCounter=0,app.minuteCounter=0,app.ideas=[],app.interval,app.init=function(){app.timer.toggle(),app.interval=window.setInterval(function(){59===app.secondCounter&&(app.secondCounter=-1,app.minuteCounter++),app.secondCounter++,console.log(app.prefix0(app.minuteCounter)+":"+app.prefix0(app.secondCounter)),app.timer.text(app.prefix0(app.minuteCounter)+":"+app.prefix0(app.secondCounter))},1e3)},app.prefix0=function(a){return 10>a?"0"+a:a},app.inputManager=function(a){console.log(a.which),13==a.which&&(console.log("enter has been pressed"),app.ideas.push(app.inputBox.val()),app.inputBox.val(""),console.log(app.ideas),app.ideaAppender())},app.ideaAppender=function(){$(".jumbotron").append("<p class='idea'>"+app.ideas[app.ideas.length-1]+"</p>")},$("#startButton").click(function(){$(".jumbotron").find("*").each(function(){$(this).toggle()}),app.init()}),$("#endButton").click(function(){$(this).toggle(),app.inputBox.toggle(),app.timer.toggle(),window.clearInterval(app.interval)}),$("#ideaInput").keypress(function(a){app.inputManager(a)})});