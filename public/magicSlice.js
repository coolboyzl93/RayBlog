
// magic.js
let   targetInterval,
swtichInterval,
pr=window.devicePixelRatio||1,
triangleMap= new Map(),
w,h;
//react configuration
if(window.screen.width>1030){
	w=window.innerWidth/2,
	h=window.innerHeight;
	swtichInterval=setInterval(function(){
		switchState();
	},20000);
}else{
	w=window.innerWidth/2,
	h=window.innerHeight/4;
}

const reactRate=window.innerWidth*pr/1920;
const canvas=document.getElementById("magicTriangle");
const cxt=canvas.getContext('2d');
canvas.width=w*pr;
if(window.screen.width<1030){
	canvas.height=h*pr*550/960;
}else{
	canvas.height=h*pr*700/960;
}



//#44CC00 草绿 #EA5A49 亚红  #4A90E2 深天蓝  #FFBD17 橙色  #11C1F3 浅蓝 #484746 深灰 #3367D6 好蓝
//#B5B5B5 浅灰 #F5F5F5 灰白  #FFF2D2 肉色    #EDC5A1 黑肤色 #EDB07A健康肤色 #F03C3C 品红
const thisItem={

	colors : [`#EA5A49`, "#44CC00", "#33B5E5", "#AA66CC", "#0099CC", "#9933CC", "#99CC00", "#FFF444", "#CC0000", "#FFBB33"],
	Triangles : [],
	endState_face : [[`#CE67BA`,30,1,100,410,420],[`#484746`,30,2.4,-100,560,230],[`#000000`,25,4,-10,360,145,true],
	/*3,4,5*/   [`#44CC00`,45,3.4,100,388,480],[`#000000`,25,4,-190,466,70,true],[`#000000`,45,4,-10,420,135],
	/*6,4,5*/   [`#000000`,45,2,-190,540,115],[`#000000`,45,1.5,-190,590,150],[`#484746`,45,2,-100,370,205],
	/*9,4,5*/   [`#000000`,45,2,-280,346,90],[`#484746`,20,5.6,-145,560,233,true],[`#484746`,25,4,-100,324,275],
	/*12,4,5*/  [`#B5B5B5`,25,2,-280,360,150],[`#484746`,25,2,-145,434,220,true],[`#B5B5B5`,15,1.5,180,390,255],
	/*15,4,5*/	[`#B5B5B5`,45,0.45,90,346,242],[`#B5B5B5`,15,2,0,450,255,true],[`#B5B5B5`,45,0.5,180,526,255],
	/*18,4,5*/	[`#F5F5F5`,15,2.2,165,400,277,true],[`#4A90E2`,15,2.2,165,400,277],[`#4A90E2`,30,1.2,150,400,277,true],
	/*21,4,5*/	[`#4A90E2`,30,1.2,-30,338,313],[`black`,30,0.6,90,400,280],[`#4A90E2`,30,1,180,430,280,true],
	/*24,4,5*/	[`black`,30,1.1,-30,400,298],[`#F5F5F5`,15,3,160,520,270,true],[`#4A90E2`,15,3,160,520,270],
	/*27,4,5*/	[`#4A90E2`,30,1.6,145,520,270,true],[`#4A90E2`,30,1.5,-35,444,324],[`black`,45,0.5,65,520,270],
	/*30,4,5*/  [`#11C1F3`,15,2,150,570,240,true],[`#EDB07A`,30,2,-90,436,360,true],[`#000000`,45,2,20,340,315],
	/*33,4,5*/	[`#484746`,30,2,10,376,390],[`#484746`,45,2,-60,430,433],[`#000000`,30,1.7,-95,510,410],
	/*36,4,5*/	[`#484746`,20,3.5,105,560,255],[`#EDC5A1`,15,2,-60,540,330,true],[`#F7E9DA`,45,1.4,195,434,360],
	/*39,4,5*/	[`#EDC5A1`,15,2,75,510,410],[`#4C33CC`,45,0.5,25,520,450],[`#4C33CC`,45,1,80,534,455],
	/*42,4,5*/	[`#F0F03C`,30,3,-10,450,500],[`#9933CC`,20,4,60,540,480],[`#EA5A49`,45,4,60,540,480,true],
	/*45,4,5*/  [`#99CC00`,45,4,-30,600,585],[`#F03C3C`,45,3,-73,424,590],[`#3367D6`,15,3,-100,424,590,true],
	/*48,4,5*/	[`#3367D6`,15,3,-90,424,590],[`#484746`,45,0.7,-55,384,505],[`#F03C3C`,15,2,-70,384,505,true],
	/*51,4,5*/	[`#FFBD17`,30,3,-80,250,655]
	],
	endState_crow :[],
	endState_rinbow:[],
	endState_RAY: [[null,25,2,90,30,60,true],[null,25,2,-90,30,180],[null,25,2.2,-200,90,30,true],
	[null,25,2.2,70,90,30],[null,45,1.2,65,40,80,true],[null,20,3,90,180,60],
	[null,45,1,20,150,50],[null,25,2,180,240,60,true],[null,25,2,90,270,60],
	[null,25,2,180,330,90],[null,25,2,270,300,150],[null,25,2,0,240,120],
	[null,25,1.5,90,360,60],[null,25,1.5,180,405,80],[null,25,1.5,270,385,125],
	[null,25,1.5,0,340,105],[null,15,2,-65,360,180,true],[null,45,1,15,336,142],
	[null,20,3,90,450,60],[null,45,1,20,420,50],[null,25,2,180,510,60,true],
	[null,25,2,90,540,60],[null,25,2,180,600,90],[null,25,2,270,570,150],
	[null,25,2,0,510,120],[null,25,1.5,205,620,150,true],[null,20,3,90,660,60],
	[null,45,1.4,135,720,60],[null,20,3,-90,720,150],[null,20,3,90,780,60],
	[null,20,2,180,841,60,true],[null,45,1,45,781,80],[null,20,2,180,841,150,],
	[null,20,3,90,900,60],[null,45,1,20,870,50],[null,25,2,180,960,60,true],
	[null,25,5,205,240,270,true],[null,15,6.2,-75,30,450],[null,15,1.5,15,80,270,true],
	[null,45,4,45,80,360,true],[null,45,2,-90,180,330],[null,25,2,0,120,300],
	[null,20,7,-45,270,420,true],[null,20,5.2,-135,490,420],[null,25,4,-90,570,450],
	[null,45,1.3,-45,570,330],[null,15,4.3,45,506,210],[null,15,4.3,135,690,210,true],
	[null,45,1,45,660,390,true],[null,25,4,40,750,210,true],[null,15,7.5,-50,734,418],
	[null,15,6,0,734,418,true]
	],
	currentState:[0,0,0,0],
}
function fillBackGround(cxt){
	cxt.lineWidth=1;
	cxt.storkeStyle="black";
	for(let i=0;i<32;i++){
		cxt.moveTo(i*30,0);
		cxt.lineTo(i*30,960);
		cxt.closePath();
	}

	for(let i=0;i<32;i++){
		cxt.moveTo(0,i*30);
		cxt.lineTo(960,i*30);
		cxt.fillText("hello",500,500);
		cxt.closePath();
	}
	cxt.fillStyle="#E3E3E1";
	cxt.fillRect(0,0,canvas.width,canvas.height);
	cxt.stroke();
	cxt.fillStyle="black";


	cxt.font=" 10px black Arial";
	for(let k=0;k<32;k++){
		cxt.fillText(k*30,0,k*30);
	}
	for(let j=0;j<32;j++){
		cxt.fillText(j*30,j*30,10);
	}
}

class MagicTriangle{
	constructor(color,degree,scale,rotate,RAPpositionX,RAPpositionY,bool){
		this.scale=[scale,null];
		this.rotate=[rotate,null];
		this.x=[RAPpositionX,360];
		this.y=[RAPpositionY,null];
		this.degree=[degree,null];
		this.right=[bool,null];
		this.color=[color,null];
		this.v=1;
		this.a=0.03;
	}

	isInScope(eventX,eventY){
		let result = false;
		let reactInterval=null;
		let scopeR = 100;
		let actualX =this.x[0];
		let eventPoint=windowToCanvas(eventX,eventY);
		let dx=eventPoint.x-actualX,dy=eventPoint.y-this.y[0];
		let Distance=Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
		if(Distance<scopeR){
			result=true;
			let willMoveX=Math.abs((dx/Distance)*(scopeR-Distance)+0.5)>>1;
			let willMoveY=Math.abs((dy/Distance)*(scopeR-Distance)+0.5)>>1;
			// console.log(Distance);
			// console.log(actualX);
			// console.log(willMoveY);
			// console.log(willMoveX);
			if(eventPoint.x<actualX &&eventPoint.y>this.y[0]){
				this.x[0]+=willMoveX;
				this.y[0]-=willMoveY;
			}else if(eventPoint.x<actualX &&eventPoint.y<this.y[0]){
				this.x[0]+=willMoveX;
				this.y[0]+=willMoveY;
			}else if(eventPoint.x>actualX &&eventPoint.y<this.y[0]){
				this.x[0]-=willMoveX;
				this.y[0]+=willMoveY;
			}else{
				this.x[0]-=willMoveX;
				this.y[0]-=willMoveY;
			}

		}
		return result;
	}

	renderBT (cxt) {
		cxt.beginPath();
		cxt.save();
		cxt.translate(this.x[0],this.y[0]);
		cxt.rotate(a2r(this.rotate[0]));
		cxt.scale(this.scale[0],this.scale[0]);
		cxt.moveTo(0,0);
		cxt.lineTo(30,0); 
		let length=Math.tan(a2r(this.degree[0]))*30;
		if(this.right==undefined||this.right[0]!=true){
			cxt.lineTo(30,length);
		}else{
			cxt.lineTo(30,-length)
		}
		cxt.fillStyle=this.color[0];	
		cxt.fill();
		cxt.closePath();
		cxt.restore();	
	}

	fresh(){
		this.v+=this.a;
		let state=[0,0,0,0,0];
		if(Math.abs(this.scale[0]-this.scale[1])<0.1){
			this.scale[0]=this.scale[1];
			state[0]=1;
		}else{
			if(this.scale[0]<this.scale[1]){
				this.scale[0]=this.scale[0]+0.05;
			}else{
				this.scale[0]=this.scale[0]-0.05;
			}
		}
		if(Math.abs(this.rotate[0]-this.rotate[1])<2){
			this.rotate[0]=this.rotate[1];
			state[1]=1;
		}else{
			if(this.rotate[0]<this.rotate[1]){
				this.rotate[0]=this.rotate[0]+this.v*1.5;
			}else{
				this.rotate[0]=this.rotate[0]-this.v*1.5;
			}
		}
		if(Math.abs(this.x[0]-this.x[1])<2){
			this.x[0]=this.x[1]
			state[2]=1;
		}else{
			if(this.x[0]<this.x[1]){
				this.x[0]=this.x[0]+this.v;
			}else {
				this.x[0]=this.x[0]-this.v;
			}
		}
		if(Math.abs(this.y[0]-this.y[1])<2){
			this.y[0]=this.y[1]
			state[3]=1;
		}else{
			if(this.y[0]<this.y[1]){
				this.y[0]=this.y[0]+this.v;
			}else{
				this.y[0]=this.y[0]-this.v;
			}
		}	
		if(Math.abs(this.degree[0]-this.degree[1])<1){
			this.degree[0]==this.degree[1]
			state[4]=1;
		}else{
			if(this.degree[0]<this.degree[1]){
				this.degree[0]=this.degree[0]+1;
			}else{
				this.degree[0]=this.degree[0]-1;
			}
		}
		this.right[0]=this.right[1];	
		let stateReal=1;
		for(let v of state){
			stateReal*=v;
		}
		if(stateReal){
			this.color[0]=this.color[1];
		}
		if(this.v>3){
			this.a=-0.03;
		}else if(this.v<1){
			this.a=0.03;
		}
		this.renderBT(cxt);
	}	

}



function a2r(angle){
	return angle*2*Math.PI/360
}


function allInPlace(){
	let result=false;
	let buffer=thisItem.Triangles;
	for(obj of buffer){
		if(Math.abs(obj.y[0]-obj.y[1])>0.5 || 
			Math.abs(obj.x[0]-obj.x[1])>0.5 ||
			Math.abs(obj.rotate[0]-obj.rotate[1])>0.5){
			return result;
		}
	}	
	result=true;
	return result;
}

function registEndState(n){
	let buffer=thisItem.Triangles;
	let currentStateIndex=thisItem.currentState.findIndex(c=>c==1);
	if(currentStateIndex!=-1){
		thisItem.currentState[currentStateIndex]=0;
	}
	thisItem.currentState[n]=1;
	let valState;
	switch (n)
	{
		case 0:
		valState=thisItem.endState_face;
		break;
		case 1:
		valState=thisItem.endState_crow;
		break;
		case 2:
		valState=thisItem.endState_rinbow;
		break;
		case 3:
		valState=thisItem.endState_RAY;
		break;
	}
	for(let i=0;i<52;i++){
		if(n==3){
			buffer[i].color[1]=thisItem.colors[Math.floor(Math.random()*10)];
		}else{
			buffer[i].color[1]=valState[i][0];
		}
		buffer[i].scale[1]=valState[i][2]*reactRate;
		buffer[i].x[1]=valState[i][4]*reactRate;
		buffer[i].y[1]=valState[i][5]*reactRate;
		buffer[i].degree[1]=valState[i][1];
		buffer[i].rotate[1]=valState[i][3];
		buffer[i].right[1]=valState[i][6]==undefined?null:valState[i][6];
	}

}
function initiateT(){
	for(let i= 0;i<52;i++){
		let initPositionY=thisItem.endState_RAY[i][5]*reactRate;
		let initPositionX=thisItem.endState_RAY[i][4]*reactRate;
		let initAngle=thisItem.endState_RAY[i][1];
		let initRotate=thisItem.endState_RAY[i][3];
		let initScale=thisItem.endState_RAY[i][2]*reactRate;
		let isRight=thisItem.endState_RAY[i][6]==undefined?null:thisItem.endState_RAY[i][6];
		let Tnum=new MagicTriangle(thisItem.colors[Math.floor(Math.random()*10)],initAngle,initScale,initRotate,initPositionX,initPositionY,isRight);
		thisItem.Triangles.push(Tnum);
		triangleMap.set([Tnum.x,Tnum.y],Tnum);
		Tnum.renderBT(cxt);
	}
	registEndState(0);
}
function refreshTarget2(){
	for(let obj of thisItem.Triangles){
		obj.fresh();
	}	
}
function refresh(){
	for(let obj of thisItem.Triangles){
		obj.renderBT(cxt);
	}
}
function windowToCanvas(x,y){
	let bbox=canvas.getBoundingClientRect();
	return {x:x-bbox.left,y:y-bbox.top}
}
function switchState(){
	console.log(thisItem.currentState)
	if(thisItem.currentState[0]==1){
		registEndState(3);
	}else if(thisItem.currentState[3]==1){
		registEndState(0);

	}

}

function repeatOften() {
	setTimeout(function(){
		targetInterval = requestAnimationFrame(repeatOften);
		cxt.clearRect(0,0,canvas.width,canvas.height);
		refreshTarget2();
  		console.log("还没停？");
  		if(allInPlace()){
  			cancelAnimationFrame(targetInterval);
  			targetInterval=0;
  		}
  	},13);
}
canvas.addEventListener('mousemove',function(e){
	// cxt.clearRect(0,0,canvas.width,canvas.height);
		// canvas.width = canvas.width 
		// if(!targetInterval){
		// setTimeout(function(){


		let buffer= thisItem.Triangles,
		eventPoint=windowToCanvas(e.offsetX*pr,e.offsetY*pr);
		
		//version1

		// cxt.clearRect(eventPoint.x-200,eventPoint.y-200,200,200);
		// for(obj of buffer){
		// 	if(obj.isInScope(e.offsetX*pr,e.offsetY*pr));
		// 	obj.renderBT(cxt);
		// }

		// version2
		for(obj of buffer){
			obj.isInScope(e.offsetX*pr,e.offsetY*pr);
		}
		// cxt.clearRect(eventPoint.x-200,eventPoint.y-200,200,200);
		cxt.clearRect(0,0,canvas.width,canvas.height);
		refresh();

		if(!targetInterval){
			targetInterval = requestAnimationFrame(repeatOften);
		}	
		// }
		// if(!targetInterval){
		// 	targetInterval=setInterval(function(){
		// 		cxt.clearRect(0,0,canvas.width,canvas.height);
		// 		// fillBackGround(cxt);
		// 		refreshTarget2();
		// 		// console.log("还没停？");
		// 		if(allInPlace()){
		// 			// fillBackGround(cxt);
		// 			clearInterval(targetInterval);
		// 			targetInterval=0;
		// 		}
		// 	},13);
		// }  	
		// },100)
	},true)
	initiateT();









