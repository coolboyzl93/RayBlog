var lunboPicture = document.getElementsByClassName("rotationPic")[0];
var list = document.getElementById("list");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var buttons = document.getElementById("buttons").getElementsByTagName("span");

//封装成一个函数
function animate(offset){
	var newLeft = parseInt(list.style.left) + offset;
	if(newLeft < -4904){
		newLeft = 0;
	}
	if(newLeft > 0){
		newLeft = -4904;
	}
	list.style.left = newLeft + "px";
}

//封装一个关于小圆点的函数
function showButtons(){
	//console.log(index);
	for(var i = 0;i < buttons.length; i ++){
		buttons[i].className = "";
	}
	//指定坐标的按钮设置class="on"
	buttons[-parseInt(list.style.left)/1226].className = "on";
}

	for(var i=0;i<buttons.length;i++){
		-function(k){
			buttons[k].onclick=function(){
		 	list.style.left=-k*1226+"px";
		 	index=k;
		 	showButtons();
		 	console.log(-parseInt(list.style.left)/1226);
		 	console.log(k)
		}
		}(i)
	}
//点击事件
prev.onclick = function(){
	animate(1226);
	showButtons();
}
next.onclick = function(){
	animate(-1226);
	showButtons();
}

var timer;
//自动轮播的函数
function play(){
	timer = setInterval(function(){
		next.onclick();
	},2000)
}
play();
//停止轮播的函数
function stop(){
	clearInterval(timer);
}
//鼠标移入container停止轮播
lunboPicture.onmouseover = stop;
lunboPicture.onmouseout = play;


