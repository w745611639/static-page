var close_btn = document.getElementsByClassName('close-btn')[0];
var count = 0;
var count2 = 0;
var timer = null;
var timer1 = null;
var timer2 = null;
var btn_banner_li = document.getElementsByClassName('btn-banner')[0].getElementsByTagName('li');
var leng = btn_banner_li.length;
var bou_show = document.getElementsByClassName('bou-show');
var bou_l_btn = document.getElementsByClassName('bou-l-btn');
var bou_r_btn = document.getElementsByClassName('bou-r-btn');
var leng1 = bou_show.length;
var ad_show = document.getElementsByClassName('ad-show')[0];
var ad_show_li = ad_show.getElementsByTagName('li');
var ad_control_li = document.getElementsByClassName('ad-control')[0].getElementsByTagName('li');
var leng2 = ad_control_li.length;
//封装定时器函数
function autoPlay () {
	timer = setInterval(function () {
		if(count == 8) {
			count = 0;
		}
		var show = document.getElementsByClassName('show')[0];
		var s_content = document.getElementsByClassName('s-content')[0];
		clearClassName(btn_banner_li, leng, count, 'active');
		show.style.backgroundImage = arr[count];
		s_content.style.backgroundImage = arr[count];
		count ++;
	},3000)
}
//封装 清除classname 函数
function  clearClassName (obj, len, item, clsname, obj2) {
	for(var i = 0; i < len; i++) {
		obj[i].className = "";
		if(obj2) {
			obj2[i].style.display = "none";
		}
	}
	obj[item].className = clsname;
	if(obj2) {
		obj2[item].style.display = "block";
	}
}
//顶部图片，点击关闭按钮，隐藏顶部图片
close_btn.addEventListener('click', function () {
	var top_ad = document.getElementsByClassName('top-ad')[0];
	top_ad.style.display = "none";
}, false);
//  展示区域轮播图
for(var i = 0; i < leng; i++) {
	var show = document.getElementsByClassName('show')[0];
	var s_content = document.getElementsByClassName('s-content')[0];
	var arr = ["url(images/show/show-1.jpg)","url(images/show/show-2.jpg)","url(images/show/show-3.jpg)","url(images/show/show-4.jpg)","url(images/show/show-5.jpg)","url(images/show/show-6.jpg)","url(images/show/show-7.jpg)","url(images/show/show-8.jpg)"];
	(function (k) {
		btn_banner_li[k].addEventListener('mouseover', function () {
			clearInterval(timer);
			clearClassName(btn_banner_li, leng, k, 'active');
			show.style.backgroundImage = arr[k];
			s_content.style.backgroundImage = arr[k];
			count = k;			
		}, false);
		btn_banner_li[k].addEventListener('mouseout', function () {
			if(!timer) {
				autoPlay();
			}
		}, false);
		show.addEventListener('mouseover', function () {
			clearInterval(timer);
		});
		show.addEventListener('mouseout', autoPlay, false)
	}(i));
}
// 启动 自动轮播
autoPlay();
// 公告 信息自动轮换
var n_content = document.getElementsByClassName('n-content')[0];
function adAutoPlay () {
	timer1 = setInterval(function () {
		if(parseInt(n_content.style.top) <= -245) {
			n_content.style.top = "0px";
			// 移除过渡效果 ，不移除的话不能循环
			n_content.style.transition = "";
		}
		n_content.style.top = parseInt(window.getComputedStyle(n_content,null).top) - 49 + "px";
		n_content.style.transition = "top  0.6s";
	}, 3000)
}
adAutoPlay();
// 鼠标悬停内容区域，清除定时器 
n_content.addEventListener('mouseover', function () {
	clearInterval(timer1);
});
// 鼠标移开，开启定时器
n_content.addEventListener('mouseout', adAutoPlay);
// 精选配件
// for(var i = 0; i < leng1; i++) {
// 	(function (k) {
// 		var compt = window.getComputedStyle(bou_show[k], null);
// 		var reg = /\s+can-click/g;
// 		// 左按钮添加事件
// 		bou_l_btn[k].addEventListener('mouseover', function () {
// 			var lefts = parseInt(compt.left);
// 			if(lefts < 0) {
// 			//在left不为零的情况下添加点击事件,点击左按钮,left 增加 1105px;
// 				this.addEventListener('click', function () {
// 					bou_show[k].style.left = lefts + 1105 + "px";
// 					bou_show[k].style.transition = "left 0.5s";
// 					// 获取点击之后的left值
// 					lefts = parseInt(compt.left);
// 					bou_show[k].addEventListener('webkitTransitionEnd', function () {
// 						// 判断left是否大于零，如果是就移除显示为可操作的类名,将left = 0;
// 						if(lefts >= 0) {
// 							bou_show[k].style.transition = "";
// 							this.className = this.className.replace(reg, "");
// 							bou_show[k].style.left = 0;
// 						}
// 					}, false);
// 				}, false);
// 				// 添加className 
// 				if(!reg.test(this.className)) {
// 					this.className += " can-click";
// 				}
// 				// left 为零的情况下移除添加的类名
// 			}else {
// 				this.className = this.className.replace(reg, "");
// 				bou_show[k].style.transition = "";
// 			}
// 		}, false);
// 		// 右按钮添加事件
// 		bou_r_btn[k].addEventListener('mouseover', function () {
// 			var offwidth = parseInt(bou_show[k].offsetWidth);
// 			var lefts = parseInt(compt.left);
// 			if(lefts > -offwidth + 1200) {
// 				// 没有可以点击的类名就添加
// 				if(!reg.test(this.className)) {
// 					this.className += " can-click";
// 				}
// 				this.addEventListener('click', function () {
// 					bou_show[k].style.left = lefts - 1105 + 'px';
// 					bou_show[k].style.transition = "left 0.5s";
// 					lefts = parseInt(compt.left);
// 					// 判断left移动的值 是否大于盒子的offsetWidth 减去一屏显示的大小; 
// 					if(lefts <= -offwidth + 1200) {
// 						bou_show[k].style.left = -offwidth + 1200 + "px";
// 						bou_r_btn[k].className = bou_r_btn[k].className.replace(reg, "");					
// 					}					
// 				}, false);
// 			}else {
// 				this.className = this.className.replace(reg, "");
// 			}			
// 		}, false);
// 	}(i));
// }
// 精选配件
for(var i = 0; i < leng1; i++) {
	(function (k) {
		var reg = /\w+can-click/g;
		bou_l_btn[k].addEventListener('click', function () {
			var lefts = parseInt(window.getComputedStyle(bou_show[k], null).left);
			if(lefts < 0) {
				if(lefts + 1105 < 0) {
					bou_show[k].style.left =  lefts + 1105 + "px";
				} else {
					bou_show[k].style.left = 0; 
				}
				// 添加 过渡完成事件，过渡执行完，进行判断
				// bou_show[k].addEventListener('webkitTransitionEnd', function () {
				// 	lefts = parseInt(window.getComputedStyle(bou_show[k], null).left);
				// 	if(lefts >= 0) {
				// 		this.style.left = 0;
				// 		this.style.transition = "";
				// 	}
				// // 移除过渡事件
				// 	this.removeEventListener('webkitTransitionEnd', arguments.callee, false);
				// }, false);				
			}
		}, false);
		// 右按钮
		bou_r_btn[k].addEventListener('click', function () {
			var lefts = parseInt(window.getComputedStyle(bou_show[k], null).left);
			var offsetwidth = bou_show[k].offsetWidth;
			if(lefts > -offsetwidth) {
				if(lefts - 1105 > -offsetwidth + 1200) {
					bou_show[k].style.left =  lefts - 1105 + "px";
				} else {
					bou_show[k].style.left  = -offsetwidth + 1200 + "px";
				}
				// bou_show[k].addEventListener('webkitTransitionEnd', function () {
				// 	lefts = parseInt(window.getComputedStyle(bou_show[k], null).left);
				// 	if(lefts <= -offsetwidth + 1200) {
				// 		this.style.left = -offsetwidth + 1200 + "px";	
				// 		this.style.transition = "";
				// 		this.removeEventListener('webkitTransitionEnd', arguments.callee, false);			
				// 	}
				// }, false);										
			}
		}, false);
	}(i))
}
// 广告轮播图
ad_show.addEventListener('mouseover', function () {
	clearInterval(timer2)
}, false);
ad_show.addEventListener('mouseout',autoPlay1, false);
for(var i = 0; i < leng2; i++) {
	(function  (k) {
		ad_control_li[k].addEventListener('mouseover', function () {
			clearInterval(timer2);
			clearClassName(ad_control_li, leng2, k, "acts", ad_show_li);
			count2 = k;
		}, false);
		ad_control_li[k].addEventListener('mouseout', autoPlay1);
	}(i));
}
//自动播放函数 
function autoPlay1 () {
	timer2 = setInterval(function () {
		if(count2 >= leng2) {
			count2 = 0;
		}
		clearClassName(ad_control_li, leng2, count2, "acts", ad_show_li);
		count2 ++;
	}, 3000) 
}
autoPlay1();
