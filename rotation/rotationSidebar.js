//获取dom对象
var li = document.querySelectorAll(".left_ul>li");
var right_img_all = document.querySelectorAll(".right_img");
	//此时的i是li的下标
	for(var i = 0;i < li.length;i ++){
		//获取每一个li的下标
		(function(i){
			//给每个li绑定一个鼠标移入事件
			li[i].onmouseover = function(){
				//右边对应的div显示
				right_img_all[i].style.display = "block";
//				for(var m = 0;m < right_img_all[i].getElementsByTagName("div").length;m ++){
//					right_img_all[i].getElementsByTagName("div")[m].style.display = "block";				
//				}
			}
			//给每个li绑定一个鼠标移出事件
			li[i].onmouseout = function(){
				//右边对应的div隐藏
				right_img_all[i].style.display = "none";
//				for(var m = 0;m < right_img_all[i].getElementsByTagName("div").length;m ++){
//					right_img_all[i].getElementsByTagName("div")[m].style.display = "none";				
//				}
			}			
		})(i)
	}

