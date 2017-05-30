/**
 * Created by MSI on 2017/4/21.
 */
//星星的阵列
//阵列的原理，按照那个数组自己排列一下，就会发现1的地方合在一起就是那个数字啊，那我不如做一个英文字母的点阵喽？
//一定是一个三维数组，因为每个数字都是一个二维点阵，0-9这9个数字是第三维，而这个数字具体是几是可以调用Date的动态时间的
//循环就是遍历数组的所有维度，一层一层的去找，直到找到最具体的维度，满足条件，就可以在这里做事情了。
function colorfulCountdown() {

	var WINDOW_HEIGHT = 205;
	var WINDOW_WIDTH = 320;
	var MARGIN_TOP = 50;
	var MARGIN_LEFT = 15;
	var GAP = 1;
	var RIDIUS = 3;
	//得到倒计时停止的时间,这个时间不能轻易改变，所以用const，最多在画布上的时间只能是99：99：99
	// const endTime = new Date(2017, 3, 25, 23, 59, 59);
	//想要得到一个固定时间的设置，要使用setDate的方法。
	var endTime = new Date();
	endTime.setTime(endTime.getTime());
	//得到一个当前能显示的时间。
	var curShowTimeSec = 0;
	//设置一个存储小球的控数组
	var Lballs = [];
	//应该给自己建立一个喜欢的颜色库。！！！
	const colors = ["purple", "green", "blue", "#33B5E5", "#AA66CC", "#0099CC", "9933CC", "#99CC00", "#FFF444", "#CC0000", "#FFBB33"];

	window.onload = function() {

		var canvas = document.getElementById('canvas1');
		var context = canvas.getContext("2d");

		canvas.width = WINDOW_WIDTH;
		canvas.height = WINDOW_HEIGHT;
		//此处想要说明的是，函数（或者说程序）的上下顺序真的很重要！！！！！！！！！！
		// curShowTimeSec=getCurShowTimeSec();
		//setInterval函数的作用：
		// Lrender(context);
		// curShowTimeSec=getCurShowTimeSec();
		setInterval(function() {
			//     Lrender(context);
			//     curShowTimeSec=getCurShowTimeSec();
			LupTime();
			// curShowTimeSec=getCurShowTimeSec();
			Lrender(context);
			// addLBalls();
		}, 50);
	};

	function getCurShowTimeSec() {
		// var endTime = new Date();
		// endTime.setTime(endTime.getTime() + 3600 * 1000);
		var curTime = new Date();
		var retT = curTime.getTime() - endTime.getTime();
		retT = Math.round(retT / 1000);
		return(retT >= 0 ? retT : 0)
	}

	function LupTime() {
		var showHours = parseInt(curShowTimeSec / 3600);
		var showMinites = parseInt((curShowTimeSec - showHours * 3600) / 60);
		var showSeconds = curShowTimeSec % 60;

		var curHours = parseInt(getCurShowTimeSec() / 3600);
		var curMinites = parseInt((getCurShowTimeSec() - curHours * 3600) / 60);
		var curSeconds = getCurShowTimeSec() % 60;
		if(curShowTimeSec != getCurShowTimeSec()) {
//			if(parseInt(showHours / 10) != parseInt(curHours / 10)) {
//				addLBalls(MARGIN_LEFT - 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curHours / 10));
//			}
//			if(parseInt(showHours % 10) != parseInt(curHours % 10)) {
//				addLBalls(MARGIN_LEFT + 7 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curHours % 10));
//			}
//			if(parseInt(showMinites / 10) != parseInt(curMinites / 10)) {
//				addLBalls(MARGIN_LEFT + 19 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curMinites / 10));
//			}
//			if(parseInt(showMinites % 10) != parseInt(curMinites % 10)) {
//				addLBalls(MARGIN_LEFT + 27 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curMinites % 10));
//			}
//			if(parseInt(showSeconds / 10) != parseInt(curSeconds / 10)) {
//				addLBalls(MARGIN_LEFT + 39 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curSeconds / 10));
//			}
//			if(parseInt(showSeconds % 10) != parseInt(curSeconds % 10)) {
//				addLBalls(MARGIN_LEFT + 47 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curSeconds % 10));
//			}
				
			if(parseInt(showMinites / 10) != parseInt(curMinites / 10)) {
				addLBalls(MARGIN_LEFT - 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curMinites / 10));
			}
			if(parseInt(showMinites % 10) != parseInt(curMinites % 10)) {
				addLBalls(MARGIN_LEFT + 7 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curMinites % 10));
			}
			if(parseInt(showSeconds / 10) != parseInt(curSeconds / 10)) {
				addLBalls(MARGIN_LEFT + 19 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curSeconds / 10));
			}
			if(parseInt(showSeconds % 10) != parseInt(curSeconds % 10)) {
				addLBalls(MARGIN_LEFT + 27 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(curSeconds % 10));
			}
			curShowTimeSec = getCurShowTimeSec();
		}
		updateLBalls();
	}

	//当时间改变的时候在画布相应位置添加对应的小球。
	function addLBalls(x, y, num) {
		for(var i = 0; i < digit[num].length; i++) {
			for(var j = 0; j < digit[num][i].length; j++) {
				if(digit[num][i][j] == 1) {
					//创建一个小球的具体过程
					var aBall = {
						x: x + j * 2 * (GAP + RIDIUS) + (GAP + RIDIUS),
						y: y + i * 2 * (GAP + RIDIUS) + (GAP + RIDIUS),
						a: 0.2 + Math.random(),
						//Math.ceil向上取整，Math.pow（x,y）x的y次幂。
						vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
						vy: -5,
						color: colors[Math.floor(Math.random() * colors.length)]
					};
					//将循环到的所有小球都传入Lballs的数组。虽然随后clearRect会清空了小球，但Lballs的数组还在，这个数组还会不断增加。
					Lballs.push(aBall);
				}
			}
		}
	}

	function updateLBalls() {
		for(var i = 0; i < Lballs.length; i++) {
			Lballs[i].x += Lballs[i].vx;
			Lballs[i].y += Lballs[i].vy;
			Lballs[i].vy += Lballs[i].a;
			//碰撞检测
			// if (Lballs[i].x > WINDOW_WIDTH) {
			//     Lballs[i].x = WINDOW_WIDTH -  RIDIUS;
			//     Lballs[i].vx = -Lballs[i].vx;
			// }
			if(Lballs[i].y >= WINDOW_HEIGHT - RIDIUS) {
				Lballs[i].y = WINDOW_HEIGHT - RIDIUS;
				Lballs[i].vy = -Lballs[i].vy * 0.75;
			}
			// if( Lballs[i].x<0){
			//     Lballs[i].x =0;
			//     Lballs[i].vx=- Lballs[i].vx;
			//
			// }
			// 删除不在屏幕内的小球
			//          if (Lballs[i].x > WINDOW_WIDTH) {
			//              Lballs.splice(i, 1);
			//          }
			if(Lballs[i].x < 0) {
				Lballs.splice(i, 1);
			}
			if(Lballs[i].x > WINDOW_WIDTH) {
				Lballs.splice(i, 1);
			}
			//产生了bug，只要有小球出现在屏幕边缘，很多不在屏幕的小球也会消失，实际上，此时删除的是数组中最后一个元素，
			// 绝对不是这个要走出屏幕的小球，因此要使用pop()方法，需要将此时要离开屏幕的小球转为数组中最后一个元素，在使用pop()方法。
			//换成了一个更简单的方法是splice方法。
		}
//		console.log(Lballs.length);
	}

	//创建一个更新时间的函数，将时间和渲染分离是可以使整个程序的结构清晰。（能分离的程序尽量分离，这样的程序重用率高，容易修改）

	//创建一个函数，需要传入函数上下文环境
	function Lrender(cxt) {
		//清空之前的形状
		cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
		//input current time
		var hours = parseInt(curShowTimeSec / 3600);
		var minites = parseInt((curShowTimeSec - hours * 3600) / 60);
		var seconds = curShowTimeSec % 60;

		//      LrenderDigit(MARGIN_LEFT - 2 * (GAP + RIDIUS),      MARGIN_TOP, parseInt(hours / 10), cxt);
		//      LrenderDigit(MARGIN_LEFT + 7 * 2 * (GAP + RIDIUS),  MARGIN_TOP, parseInt(hours % 10), cxt);
		//      LrenderDigit(MARGIN_LEFT + 15 * 2 * (GAP + RIDIUS), MARGIN_TOP, 10, cxt);
		//      LrenderDigit(MARGIN_LEFT + 19 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(minites / 10), cxt);
		//      LrenderDigit(MARGIN_LEFT + 27 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(minites % 10), cxt);
		//      LrenderDigit(MARGIN_LEFT + 35 * 2 * (GAP + RIDIUS), MARGIN_TOP, 10, cxt);
		//      LrenderDigit(MARGIN_LEFT + 39 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(seconds / 10), cxt);
		//      LrenderDigit(MARGIN_LEFT + 47 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(seconds % 10), cxt);
		LrenderDigit(MARGIN_LEFT - 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(minites / 10), cxt);
		LrenderDigit(MARGIN_LEFT + 7 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(minites % 10), cxt);
		LrenderDigit(MARGIN_LEFT + 15 * 2 * (GAP + RIDIUS), MARGIN_TOP, 10, cxt);
		LrenderDigit(MARGIN_LEFT + 19 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(seconds / 10), cxt);
		LrenderDigit(MARGIN_LEFT + 27 * 2 * (GAP + RIDIUS), MARGIN_TOP, parseInt(seconds % 10), cxt);

		for(var i = 0; i < Lballs.length; i++) {
			cxt.fillStyle = Lballs[i].color;

			cxt.beginPath();
			cxt.arc(Lballs[i].x, Lballs[i].y, RIDIUS, 0, 2 * Math.PI, true);
			cxt.closePath();

			cxt.fill();
		}
	}

	function LrenderDigit(x, y, num, content) {
		for(var i = 0; i < digit[num].length; i++) {
			for(var j = 0; j < digit[num][i].length; j++) {
				if(digit[num][i][j] == 1) {
					content.beginPath();
					content.arc(x + j * 2 * (GAP + RIDIUS) + (GAP + RIDIUS), y + i * 2 * (GAP + RIDIUS) + (GAP + RIDIUS), RIDIUS, 0, Math.PI * 2);
					//需要把点阵的距离算好再去输入content.arc()的参数
					//此时假设我的每个小球半径为8,小盒子和半径间隔为2,
					content.closePath();
					content.fillStyle = 'black';
					content.stroke();
					content.fill();
				}
			}
		}

	}
}
colorfulCountdown();