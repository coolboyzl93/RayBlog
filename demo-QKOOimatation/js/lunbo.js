		-function(){
		var mm = ["//pmt3359e0.pic28.websiteonline.cn/upload/04_ypxe.jpg",
						"//pmt3359e0.pic28.websiteonline.cn/upload/002_ih7m.jpg", 
						"//pmt3359e0.pic28.websiteonline.cn/upload/03_vte6.jpg",
						"//pmt3359e0.pic28.websiteonline.cn/upload/0001_1cdm.jpg", 
						];
		var index = mm.length - 1;
		var fg = 0; //标识
		//上一个图

		$(".prev").click(function() {
			movePrev()
		});
		//下一个图
		$(".next").click(function() {
			moveNext();
		});

		function moveNext() {
			$(".lunbo>img").fadeOut(700, function() {
				$("#buttons>span").eq(fg).removeClass("on");
				++fg; //切换数组下标
				if(fg > index) {
					fg = 0;
				}
				$("#buttons>span").eq(fg).addClass("on");
				this.src = mm[fg];
				//此处要继续找元素
				$(".lunbo>img").fadeIn(700);
			});
		}

		function movePrev() {
			$(".lunbo>img").fadeOut(700, function() {
				$("#buttons>span").eq(fg).removeClass("on");
				--fg; //切换数组下标
				if(fg < 0) {
					fg = index;
				}
				$("#buttons>span").eq(fg).addClass("on");
				this.src = mm[fg];
				//此处要继续找元素
				$(".lunbo>img").fadeIn(700);
			});
		}
		for(var i=0;i<5;i++){
		-function(k){
			$("#buttons>span").eq(k).click(function(){
				$(".lunbo>img").fadeOut(700,function(){
					$("#buttons>span").eq(fg).removeClass("on");
					fg=k;
					this.src=mm[fg];
					$("#buttons>span").eq(fg).addClass("on");
					$(".lunbo>img").fadeIn(700);
//					console.log(k);
				})
			
			})
		}(i)
	}
		var timer;
		//自动轮播的函数
		function play() {
			timer = setInterval(function() {
			moveNext();
		}, 5000)
		}
		play();
		//停止轮播的函数
		function stop() {
			clearInterval(timer);
		}
		//鼠标移入container停止轮播
		$(".lunbo").mouseover(function(){
			stop();
		});
		$(".lunbo").mouseout(function(){
			play();
		})
		
}()
