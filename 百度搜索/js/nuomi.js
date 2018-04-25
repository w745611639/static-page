var header_ul = document.getElementById('header-ul'),
	choose_lis = getClassName('choose-lis',header_ul,'li'),
	len = choose_lis.length,
	trip_li = document.getElementById('trip-li'),
	bottom_cate = document.getElementById('bottom-cate'),
	active_ul = bottom_cate.getElementsByTagName('ul'),
	choses_a = getClassName('choses',bottom_cate,'div')[0].getElementsByTagName('a'),
	bottom_trangle_btn = document.getElementById('bottom-trangle-btn'),
	both_areas = document.getElementById('both-areas'),
	fixed_search = document.getElementById('fixed-search'),
	right_aside = document.getElementById('right-aside'),
	left_aside = document.getElementById('left-aside'),
	left_btn = getClassName('left-btn',left_aside,'i'),
	left_ah = left_aside.getElementsByTagName('a');
	lengs = left_btn.length;
// 封装获取classname 函数,兼容IE9以下
	function getClassName(clsname, oringin,aims) {
		if(document.getElementsByClassName){
			return document.getElementsByClassName(clsname);
		}else {
			var obj = oringin.getElementsByTagName(aims),
				len = obj.length,
				arr = [];
			for(var i = 0; i < len; i++) {
				if(obj[i].className == clsname) {
					arr.push(obj[i]);
				}
			}
			return arr;
		}
	}
// 封装 事件监听函数，兼容
	function addEventList (elem, handle, type) {
		if(elem.addEventListener) {
			elem.addEventListener(type, handle, false)
		}else if(elem.attachEvent) {
			elem.attachEvent('on' + type, function () {
				handle.call(elem);      //   由于IE的attachEvent this 的指向是window,故用call 修改回来
			})
		}else{
			elem['on' + type] = handle;
		}
	}
	// function removeEventList(elem. handle, type) {
	// 	if(elem.removeEventList) {
	// 		elem.removeEventList(type, handle, false)
	// 	}else if(elem.detachEvent) {
	// 		elem.detachEvent('on' + type, function () {})
	// 	}
	// 
	// 封装访问元素展现的所有样式 的函数
	function getAllStyle (elem, attr) {
		if(window.getComputedStyle) {
			return window.getComputedStyle(elem, null)[attr];
		}else{
			return elem.currentStyle[attr];
		}
	}
//  鼠标移动 li上 显示其下的div 并给自身添加className;
	for(var i = 0; i < len; i++) {
	  	(function (k) {
	  		// choose_lis[k].onmouseover = function () {
	  		// 	this.className = "fali-active";
	  		// 	this.lastElementChild.style.display = "block";
	  		// }
	  		addEventList(choose_lis[k], function () {
	  			var childes = this.children,     // IE8及以下不支持 lastElementChild 用children代替
	  				lengths = childes.length;   
	  			this.className = "fali-active";
	  			childes[lengths - 1].style.display = "block";
	  		}, 'mouseover');
	  		// choose_lis[k].onmouseout = function () {
	  		// 	this.lastElementChild.style.display = "none";
	 			// this.className = "";
	  		// }
	  		addEventList(choose_lis[k], function () {
	  			var childes = this.children,
	  				lengths = childes.length;
	  			this.className = "";
	  			childes[lengths - 1].style.display = "none";
	  		}, 'mouseout');
	  	}(i));
  } 
//  鼠标移动到出行上，显示票务信息
  // trip_li.onmouseover = function () {
  // 	this.lastElementChild.style.display = "block";
  // }
  // trip_li.onmouseout = function () {
  // 	this.lastElementChild.style.display = "none";
  // }
  	addEventList(trip_li, function () {
  		var childes = this.children,
  			lengths = childes.length;
  		childes[lengths - 1].style.display = "block";
 	 }, 'mouseover');
  	addEventList(trip_li, function () {
  		var childes = this.children,
  			lengths = childes.length;
  		childes[lengths - 1].style.display = "none";
  	}, 'mouseout');
// 更多城市及团购滑过显示
  for(var i = 0; i < choses_a.length; i++) {
  	(function (k) {
	  	// choses_a[k].addEventListener('mouseover', function () {
	  	addEventList(choses_a[k], function () {
	  		for(var j = 0; j < choses_a.length; j++) {
	  			choses_a[j].className = "";
	  			active_ul[j].className = "";
	  		}
	  		this.className = "active";
	  		active_ul[k].className = "activeul";
	  	}, 'mouseover')
	  		
	  	// }, false)
  	}(i));
  } 
// 鼠标移动到地区范围小三角，显示所有的地区
	// bottom_trangle_btn.addEventListener('mouseover', function () {
	// 	both_areas.style.display = "block";
	// }, false)
	// both_areas.addEventListener('mouseout', function (e) {
	// 	e.stopPropagation();
	// 	this.style.display = "none";
	// }, false)
	addEventList(bottom_trangle_btn, function () {
		both_areas.style.display ="block";
	}, 'mouseover');
	addEventList(bottom_trangle_btn, function () {
		both_areas.style.display = "none";
	}, 'mouseout');
// 鼠标滚轮事件
//  	window.addEventListener('scroll', fixedTops, false);
	addEventList(window, fixedTops, 'scroll');
 	function fixedTops () {
 		var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
// 50以上 为右边 返回顶部一系列按钮 的显示区间
 		if(scrolltop > 50) {
 			right_aside.style.display = "block";
//  580以上 为顶部 固定搜索框的显示区间
 			if(scrolltop > 580){
 				fixed_search.style.display = "block";
 			}else{
 				fixed_search.style.display = "none";
 			}
// 775 - 5630 为左边分类小图标显示区间
 			if(scrolltop > 775 && scrolltop < 5630) {
 				left_aside.style.display = "block";
 				for(var i = 0; i < lengs; i++) {
 					left_btn[i].style.display = "block";
 				}
// 根据滚轮的位置 显示对应的分类 美食。娱乐文字，隐藏对应的小图标等
 				if(scrolltop <= 3800) {
 					left_btn[0].style.display = "none";
 				}else if(scrolltop > 3800 && scrolltop < 4600) {
 					left_btn[1].style.display = "none";
 				}else if(scrolltop >= 4600 && scrolltop < 5400) {
 					left_btn[2].style.display = "none";
				}else{
					left_btn[3].style.display = "none";
				}
 			}else{
 				left_aside.style.display = "none";
 			}
 		}else{
 			right_aside.style.display = "none";
 		}
  	}
//  鼠标悬停左侧小图标，隐藏。
	for(var i = 0; i < lengs; i++) {
		(function (k) {
				addEventList(left_ah[k], function () {
					if(getAllStyle(this.lastChild, 'display') == "block"){
						this.lastChild.style.display = "none";
					}else{
						this.lastChild.id = 23;
					}			
				}, 'mouseover');
				addEventList(left_ah[k], function () {
					if(!this.lastChild.id){
						this.lastChild.style.display = "block";					
					}else{
						this.lastChild.removeAttribute('id');
					}
				}, 'mouseout');
		}(i));
	}
// 精选品牌 倒计时 
  	setInterval(timers,1000);
	function timers () {
		var btn_timer_hms = document.getElementById('btn-timer').getElementsByTagName('span');
		btn_timer_hms[2].innerHTML --;
		if(parseInt(btn_timer_hms[2].innerHTML) < 0) {
			btn_timer_hms[2].innerHTML = 59;
			btn_timer_hms[1].innerHTML --;
		}
		if(parseInt(btn_timer_hms[1].innerHTML) < 0) {
			btn_timer_hms[1].innerHTML = 59;
			btn_timer_hms[0].innerHTML --;
		}
		
	} 