//回顶的JS小插件；
	var backTop=document.createElement("a");
		document.body.appendChild(backTop);
	var linkto=document.createAttribute("href");
		linkto.value="#";
		backTop.setAttributeNode(linkto);
		
	var backTopArrow=document.createElement("div")
		backTop.appendChild(backTopArrow);
		
		$(backTopArrow).css({"transform":"rotate(45deg)","height":"20px","width":"20px",
		"border-left":"1px solid white","border-top":"1px solid white","position":"absolute",
		"left":"15px","top":"10px"})
		
		$(backTop).css({"height":"50px","width":"50px","position":"fixed","bottom":
		"55px","right":"55px","background":"mediumpurple","z-index":"999"})
		
		$(window).scroll(function(){
			var dist=this.pageYOffset;
			if(dist>300){
				$(backTop).css("display","block");
			}else{
				$(backTop).css("display","none");
				
			}
		})
	