// magic.js
// window.onload=function(){
	var canvas=document.getElementById("magicTriangle");
	var cxt=canvas.getContext('2d');
	canvas.width=960;
	canvas.height=650;
	
	// test()
	
	// }
	
	//先创建几个能够运动的固定数量的三角形
	const thisItem={
		colors : ["purple", "green", "#33B5E5", "#AA66CC", "#0099CC", "#9933CC", "#99CC00", "#FFF444", "#CC0000", "#FFBB33"],
		Triangles : [],
		endState_face : [[30,3,-80,125,655],[30,2.5,-100,280,230],[25,4,-10,180,145,true],
				   [45,3.5,100,193,480],[25,4,-190,233,70,true],[45,4,-10,210,135],
				   [45,2,-190,270,115],[45,1.5,-190,295,150],[45,2,-100,185,205],
				   [45,2,-280,173,90],[20,5.6,-145,280,233,true],[25,4,-100,162,275],
				   [25,2,-280,180,150],[25,2,-145,210,240],[15,1.5,180,195,255],
				   [45,0.45,90,173,242],[15,2,0,225,255,true],[45,0.5,180,263,255],
				   [15,2.2,165,200,277,true],[15,2.2,165,200,277],[30,1.2,150,200,277,true],
				   [30,1.2,-30,169,313],[30,0.6,90,200,280],[30,1,180,215,280,true],
				   [30,1.1,-30,200,298],[15,3,160,260,270,true],[15,3,160,260,270],
				   [30,1.6,145,260,270,true],[30,1.5,-35,222,324],[45,0.5,65,260,270],
				   [15,2,150,285,240,true],[30,2,-90,218,360,true],[45,2,20,170,315],
				   [30,2,10,188,390],[45,2,-60,215,433],[30,1.7,-95,255,410],
				   [20,3.5,105,280,255],[15,2,-60,270,330,true],[45,1.4,195,217,360],
				   [15,2,75,255,410],[45,0.5,25,260,450],[45,1,80,267,455],
				   [30,3,-10,225,500],[45,4,60,270,480,true],[45,4,60,270,480,true],
				   [45,4,-30,300,585],[45,2,20,170,315],[15,3,-100,212,590,true],
				   [15,3,-90,212,590],[45,0.7,-55,192,505],[15,2,-70,192,505,true],
				   [30,1,100,205,420]
				  ],
		endState_hello :  [[25,2,90,30,60,true],[25,2,-90,30,180],[25,2.2,-200,90,30,true],
				   [25,2.2,70,90,30],[45,1.2,65,40,80,true],[20,3,90,180,60],
				   [45,1,20,150,50],[25,2,180,240,60,true],[25,2,90,270,60],
				   [25,2,180,330,90],[25,2,270,300,150],[25,2,0,240,120],
				   [25,1.5,90,360,60],[25,1.5,180,405,80],[25,1.5,270,385,125],
				   [25,1.5,0,340,105],[15,2,-65,360,180,true],[45,1,15,336,142],
				   [20,3,90,450,60],[45,1,20,420,50],[25,2,180,510,60,true],
				   [25,2,90,540,60],[25,2,180,600,90],[25,2,270,570,150],
			       [25,2,0,510,120],[25,1.5,205,620,150,true],[20,3,90,660,60],
				   [45,1.4,135,720,60],[20,3,-90,720,150],[20,3,90,780,60],
			       [20,2,180,841,60,true],[45,1,45,781,80],[20,2,180,841,150,],
				   [20,3,90,900,60],[45,1,20,870,50],[25,2,180,960,60,true],
			       [25,5,205,240,270,true],[15,6.2,-75,30,450],[15,1.5,15,80,270,true],
				   [45,4,45,80,360,true],[45,2,-90,180,330],[25,2,0,120,300],
			       [20,7,-45,270,420,true],[20,5.2,-135,490,420],[25,4,-90,570,450],
				   [45,1.3,-45,570,330],[15,4.3,45,506,210],[15,4.3,135,690,210,true],
			       [45,1,45,660,390,true],[25,4,40,750,210,true],[15,7.5,-50,734,418],
				   [15,6,0,734,418,true]
				  ]
	}
	console.log(thisItem);
    function fillBackGround(cxt){
    	cxt.lineWidth=1;
    	cxt.storkeStyle="black";
    	for(var i=0;i<32;i++){

    		// cxt.save();
    		cxt.moveTo(i*30,0);
    		cxt.lineTo(i*30,960);
    		// cxt.stroke();
    		cxt.closePath();
    	}
    	
    	for(var i=0;i<32;i++){
    		
    		// cxt.save();
    		cxt.moveTo(0,i*30);
    		cxt.lineTo(960,i*30);
    		cxt.fillText("hello",500,500);
    		// cxt.stroke();
    		cxt.closePath();
    	}
    	cxt.fillStyle="#E3E3E1";
    	cxt.fillRect(0,0,960,960);
    	cxt.stroke();
    	cxt.fillStyle="black";

    	cxt.font=" 10px black Arial";
    	for(var k=0;k<32;k++){
    		cxt.fillText(k*30,0,k*30);
    	}
    	for(var j=0;j<32;j++){
    		cxt.fillText(j*30,j*30,10);
    	}
    	}
    fillBackGround(cxt);
	 

	

	function renderAnimation(startState,endState){

	}

	function drawTriangles(cxt,amount){
		
	}
	//right angle point ==RAP
	function GenerateT(degree,scale,rotate,RAPpositionX,RAPpositionY,bool){
		
		this.scale=[scale,null];
		this.rotate=[rotate,null];
		this.x=[RAPpositionX,360];
		this.y=[RAPpositionY,null];
		this.degree=[degree,null];
		this.right=[bool,null];
		let num=Math.floor(Math.random()*10);
		// console.log(num);
		this.color=thisItem.colors[num];
		this.colorStorage=[255,255,255];
		this.v=1;
		this.a=-0.01;
		this.count=0;
		this.isEnd=0;
			
	}
	function a2r(angle){
		return angle*2*Math.PI/360
	}
	GenerateT.prototype.fresh =function(){
		var state=[0,0,0,0,0];
			if(Math.abs(this.scale[0]-this.scale[1])<0.05||this.scale[1]==null){
				this.scale[0]=this.scale[1];
				state[0]=1;
			
			}else{
				if(this.scale[0]<this.scale[1]){
				this.scale[0]=this.scale[0]+0.05;
				}else{
					this.scale[0]=this.scale[0]-0.05;
				}
			}
		 
				if(Math.abs(this.rotate[0]-this.rotate[1])<1||this.rotate[1]==null){
					this.rotate[0]=this.rotate[1];
					state[1]=1;
			
			}else{
				if(this.rotate[0]<this.rotate[1]){
				this.rotate[0]=this.rotate[0]+this.v;
				}else{
					this.rotate[0]=this.rotate[0]-this.v;
				}
			}
	
		
				if(Math.abs(this.x[0]-this.x[1])<1||this.x[1]==null){
					this.x[0]=this.x[1]
					state[2]=1;
				
			}else{
				// console.log(this.x[0])
				if(this.x[0]<this.x[1]){
				this.x[0]=this.x[0]+this.v;
				}else{
					this.x[0]=this.x[0]-this.v;
				}
				// console.log(this.x[0]);
			}
		
		
				if(Math.abs(this.y[0]-this.y[1])<1||this.y[1]==null){
					this.y[0]=this.y[1]
					state[3]=1;
			
			}else{
				if(this.y[0]<this.y[1]){
				this.y[0]=this.y[0]+this.v;
				}else{
					this.y[0]=this.y[0]-this.v;
				}
			}
		
		
				if(Math.abs(this.degree[0]-this.degree[1])<1||this.degree[1]==null){
					this.degree[0]==this.degree[1]
					state[4]=1;
				
			}else{
				if(this.degree[0]<this.degree[1]){
				this.degree[0]=this.degree[0]+1;
				}else{
					this.degree[0]=this.degree[0]-1;
				}
			}
		
		
			if(this.right==undefined){
				
			}
			if(this.right[0]==this.right[1]||this.right[1]==null){
				
			}else{
			 this.right[0]=this.right[1];	
			}
	
		var stateReal=1;
		for(let v of state){
			stateReal*=v;
		}

		if(this.color!=`rab(${000},${000},${000})`&&stateReal){
		// 	this.isEnd=true;
		// this.colorStorage[0]--;
		// this.colorStorage[1]--;
		// this.colorStorage[2]--;
		// this.color=	`rab(${this.colorStorage[0]},${this.colorStorage[1]},${this.colorStorage[2]})`;
		allInPlace();
		// console.log(this.color);

		
		}
		if(Math.abs(this.v)<0.03){
			this.v=2;
			this.count++;
		}else{
			this.v+=this.a;
		}
		if(this.count==1){
			this.a=0;
			this.v=2;
		}
		this.renderBT(cxt);


	}

	function allInPlace(){
		for(obj of thisItem.Triangles){
				if(obj.isEnd==0){
					return;
				}
			}
		
		return clearInterval(myInterval);
	}

	GenerateT.prototype.renderBT = function(cxt,number) {
		


		cxt.beginPath();
		cxt.save();
		cxt.translate(this.x[0],this.y[0]);
		cxt.rotate(a2r(this.rotate[0]));
		cxt.scale(this.scale[0],this.scale[0]);
		// cxt.scale(0.5,0.5);
		cxt.moveTo(0,0);
		cxt.lineTo(30,0);
		let length=Math.tan(a2r(this.degree[0]))*30;
		if(this.right==undefined||this.right[0]!=true){
			cxt.lineTo(30,length);
		}else{
			cxt.lineTo(30,-length)
		}
		// let num=Math.floor(Math.random()*10);
		// console.log(num);
		cxt.fillStyle=this.color;
		// console.log(cxt.fillStyle);
		
		cxt.fill();
		// cxt.fillStyle="black";

  //   	cxt.font=" 10px black Arial";
		// cxt.fillText(number,0,0)
		cxt.closePath();
		cxt.restore();
	

		
	};

	//30度
	// var Tnum0=new GenerateT(30,2.5,-100,280,230);
	// d30t1.renderBT(cxt);
				  // [[25,2,90,30,60,true],[25,2,-90,30,180],[25,2.2,-200,90,30,true],
				  //  [25,2.2,70,90,30],[45,1.2,65,40,80,true],[20,3,90,180,60],
				  //  [45,1,20,150,50],[25,2,180,240,60,true],[25,2,90,270,60],
				  //  [25,2,180,330,90],[25,2,270,300,150],[25,2,0,240,120],
				  //  [25,1.5,90,360,60],[25,1.5,180,405,80],[25,1.5,270,385,125],
				  //  [25,1.5,0,340,105],[15,2,-65,360,180,true],[45,1,15,336,142],
				  //  [20,3,90,450,60],[45,1,20,420,50],[25,2,180,510,60,true],
				  //  [25,2,90,540,60],[25,2,180,600,90],[25,2,270,570,150],
			   //     [25,2,0,510,120],[25,1.5,205,620,150,true],[20,3,90,660,60],
				  //  [45,1.4,135,720,60],[20,3,-90,720,150],[20,3,90,780,60],
			   //     [20,2,180,841,60,true],[45,1,45,781,80],[20,2,180,841,150,],
				  //  [20,3,90,900,60],[45,1,20,870,50],[25,2,180,960,60,true],
			   //     [25,5,205,240,270,true],[15,6.2,-75,30,450],[15,1.5,15,80,270,true],
				  //  [45,4,45,80,360,true],[45,2,-90,180,330],[25,2,0,120,300],
			   //     [20,7,-45,270,420,true],[20,5.2,-135,490,420],[25,4,-90,570,450],
				  //  [45,1.3,-45,570,330],[15,4.3,45,506,210],[15,4.3,135,690,210,true],
			   //     [45,1,45,660,390,true],[25,4,40,750,210,true],[15,7.5,-50,734,418],
				  //  [15,6,0,734,418,true]
				  // ]
				  fillBackGround(cxt);
	function devEveronment(){
	//	p
	var p0=new GenerateT(25,2,90,30,60,true);
	p0.renderBT(cxt);
	var p1=new GenerateT(25,2,-90,30,180);
	p1.renderBT(cxt);
	var p2=new GenerateT(25,2.2,-200,90,30,true);
	p2.renderBT(cxt);
	var p3=new GenerateT(25,2.2,70,90,30);
	p3.renderBT(cxt);
	var p4=new GenerateT(45,1.2,65,40,80,true);
	p4.renderBT(cxt);

	//r
	var Tnum5=new GenerateT(20,3,90,180,60);
	Tnum5.renderBT(cxt);
	var Tnum6=new GenerateT(45,1,20,150,50);
	Tnum6.renderBT(cxt);
	var Tnum7=new GenerateT(25,2,180,240,60,true);
	Tnum7.renderBT(cxt);
	//o
	var Tnum8=new GenerateT(25,2,90,270,60);
	Tnum8.renderBT(cxt);
	var Tnum9=new GenerateT(25,2,180,330,90);
	Tnum9.renderBT(cxt);
	var Tnum10=new GenerateT(25,2,270,300,150);
	Tnum10.renderBT(cxt);
	var Tnum11=new GenerateT(25,2,0,240,120);
	Tnum11.renderBT(cxt);
	//g
	var Tnum12=new GenerateT(25,1.5,90,360,60);
	Tnum12.renderBT(cxt);	
	var Tnum13=new GenerateT(25,1.5,180,405,80);
	Tnum13.renderBT(cxt);
	var Tnum14=new GenerateT(25,1.5,270,385,125);
	Tnum14.renderBT(cxt);
	var Tnum15=new GenerateT(25,1.5,0,340,105);
	Tnum15.renderBT(cxt);
	var Tnum16=new GenerateT(15,2,-65,360,180,true);
	Tnum16.renderBT(cxt);
	var Tnum17=new  GenerateT(45,1,15,336,142);
	Tnum17.renderBT(cxt);

	//r
	var Tnum18=new GenerateT(20,3,90,450,60);
	Tnum18.renderBT(cxt);
	var Tnum19=new GenerateT(45,1,20,420,50);
	Tnum19.renderBT(cxt);
	var Tnum20=new GenerateT(25,2,180,510,60,true);
	Tnum20.renderBT(cxt);
	//a
	var Tnum21=new GenerateT(25,2,90,540,60);
	Tnum21.renderBT(cxt);
	var Tnum22=new GenerateT(25,2,180,600,90);
	Tnum22.renderBT(cxt);
	var Tnum23=new GenerateT(25,2,270,570,150);
	Tnum23.renderBT(cxt);
	var Tnum24=new GenerateT(25,2,0,510,120);
	Tnum24.renderBT(cxt);
	var Tnum25=new GenerateT(25,1.5,205,620,150,true);
	Tnum25.renderBT(cxt);
	//m
	var Tnum26=new GenerateT(20,3,90,660,60);
	Tnum26.renderBT(cxt);
	var Tnum27=new GenerateT(45,1.4,135,720,60);
	Tnum27.renderBT(cxt);
	var Tnum28=new GenerateT(20,3,-90,720,150);
	Tnum28.renderBT(cxt);
	//E
	var Tnum29=new GenerateT(20,3,90,780,60);
	Tnum29.renderBT(cxt);
	var Tnum30=new GenerateT(20,2,180,841,60,true);
	Tnum30.renderBT(cxt);
	var Tnum31=new GenerateT(45,1,45,781,80);
	Tnum31.renderBT(cxt);
	var Tnum32=new GenerateT(20,2,180,841,150,);
	Tnum32.renderBT(cxt);

	//r
	var Tnum33=new GenerateT(20,3,90,900,60);
	Tnum33.renderBT(cxt);
	var Tnum34=new GenerateT(45,1,20,870,50);
	Tnum34.renderBT(cxt);
	var Tnum35=new GenerateT(25,2,180,960,60,true);
	Tnum35.renderBT(cxt);
	//R
	var Tnum36=new GenerateT(25,5,205,240,270,true);
	Tnum36.renderBT(cxt);
	var Tnum37=new GenerateT(15,6.2,-75,30,450);
	Tnum37.renderBT(cxt);
	var Tnum38=new GenerateT(15,1.5,15,80,270,true);
	Tnum38.renderBT(cxt);
	var Tnum39=new GenerateT(45,4,45,80,360,true);
	Tnum39.renderBT(cxt);
	var Tnum40=new GenerateT(45,2,-90,180,330);
	Tnum40.renderBT(cxt);
	var Tnum41=new GenerateT(25,2,0,120,300);
	Tnum41.renderBT(cxt);
	//A
	var Tnum42=new GenerateT(20,7,-45,270,420,true);
	Tnum42.renderBT(cxt);
	var Tnum43=new GenerateT(20,5.2,-135,490,420);
	Tnum43.renderBT(cxt);
    //Y
	var Tnum44=new GenerateT(25,4,-90,570,450);
	Tnum44.renderBT(cxt);
	var Tnum45=new GenerateT(45,1.3,-45,570,330);
	Tnum45.renderBT(cxt);
	var Tnum46=new GenerateT(15,4.3,45,506,210);
	Tnum46.renderBT(cxt);
	var Tnum47=new GenerateT(15,4.3,135,690,210,true);
	Tnum47.renderBT(cxt);
	//.
	var Tnum48=new GenerateT(45,1,45,660,390,true);
	Tnum48.renderBT(cxt);
	//Z
	var Tnum49=new GenerateT(25,4,40,750,210,true);
	Tnum49.renderBT(cxt);
	var Tnum50=new GenerateT(15,7.5,-50,734,418);
	Tnum50.renderBT(cxt);
	var Tnum51=new GenerateT(15,6,0,734,418,true);
	Tnum51.renderBT(cxt);
	}

	function initiateT(){
		for(let i= 0;i<52;i++){
			// var randomPositionY=Math.floor(80+Math.random()*500);
			// var randomPositionX=Math.floor(80+Math.random()*320);
			// var randomAngle=Math.floor(20+Math.random()*25);
			// var randomRotate=Math.floor(Math.random()*360);

			// var randomScale=Math.ceil(Math.random()*4);
			var randomPositionY=i*5+125;
			var randomPositionX=225;
			var randomAngle=30;
			var randomRotate=0;
			var randomScale=2;

			var Tnum=new GenerateT(randomAngle,randomScale,randomRotate,randomPositionX,randomPositionY);
			thisItem.Triangles.push(Tnum);
			Tnum.renderBT(cxt);
		}
		console.log(thisItem.Triangles);
		for(let i=0;i<52;i++){
			thisItem.Triangles[i].scale[1]=thisItem.endState_hello[i][1];
			thisItem.Triangles[i].x[1]=thisItem.endState_hello[i][3];
			thisItem.Triangles[i].y[1]=thisItem.endState_hello[i][4];
			thisItem.Triangles[i].degree[1]=thisItem.endState_hello[i][0];
			thisItem.Triangles[i].rotate[1]=thisItem.endState_hello[i][2];
			thisItem.Triangles[i].right[1]=thisItem.endState_hello[i][5]==undefined?null:thisItem.endState_hello[i][5];

		}

		
	}

	function refresh(){
		
		// cxt.clearRect(0,0,960,960);
		for(let obj of thisItem.Triangles){
			obj.fresh();
		}
	}
	
	// var myInterval=setInterval(function(){
	// 	fillBackGround(cxt);
	// 	refresh();
	// },13);
	function windowToCanvas(x,y){
		var bbox=canvas.getBoundingClientRect();
		return {x:x-bbox.left,y:y-bbox.top}
	}
	var myInterval;
	canvas.onclick=function(e){
		e.preventDefault();
		console.log(windowToCanvas(e.clientX,e.clientY));
		myInterval=setInterval(function(){
		cxt.clearRect(0,0,960,960);
		fillBackGround(cxt);
		refresh();
		console.log("还没停？")
		},13);
	}
	
	initiateT();
	// window.resize=function(){

	// }

	// fillBackGround(cxt);
	// console.log(thisItem.Triangles)
	



//接下来要解决的问题，
//是我想有鼠标的互动,所以要有鼠标滑动检测，
//我希望有点加速度的效果
//我希望，鼠标无论什么时候碰到三角形，三角形都会四散而逃，但是如果不理他们，就会自动生成人脸，这个过程是有加速度的。
//我希望，能变形到某种样子之后，会使颜色渐变,
//我希望这些三角型之间不会有重叠，

	// cxt.fillStyle="red";
	// cxt.save();
	// cxt.beginPath();
	// // cxt.translate(100,100);
	// cxt.rotate(a2r(45));
	// cxt.fillRect(300,300,500,500);
	// cxt.closePath();
	// cxt.restore();
	// cxt.font=" 10px black Arial";
	// cxt.fillStyle="black";
	// for(var j=0;j<32;j++){

 //    		cxt.fillText(j,j*30,10);
 //    	}
	





