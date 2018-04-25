var index = 0,
	leng = $('.show .item').length - 1,
	lastIndex,
	index_active = -1,
	flag = true;
	timer = null;
// 根据leng大小动态添加li
function addControlBtn(length, obj) {
	var str = '';
	for(var i = 0; i <= length; i++ ) {
		str += '<li></li>';
	}
	obj.html(str);
}
addControlBtn(leng, $('.control-btn ul'));
// 给第一个li添加active 类名 
$('.control-btn ul li').eq(0).addClass('active');
function changePic(value) {
	// 加一个flag 锁,当动画执行完之后才触发下一次
	if(flag) {
		flag = false;
		lastIndex = index;
		$('.show .item').eq(lastIndex).fadeOut(300).find('.item-word-des').delay(300).animate({fontSize: '16px'},300);
		$('.control-btn li').eq(lastIndex).removeClass('active');
		// 左边按钮向前切换图片 传入'left'
		if(value == "left") {
			index --;
			index = index < 0 ? leng : index;
		// 右边按钮向后切换图片 传入 'right';
		}else if (value == "right") {
			index ++;
			index = index > leng ? 0 : index;	
		}else{
			index = $(value).index();
		}
		$('.show .item').eq(index).fadeIn(300).find('.item-word-des').delay().animate({fontSize: '30px'}, 300, function () {
			flag = true;
		});
		$('.control-btn li').eq(index).addClass('active');
	}
}
// 点击右边按钮，往后切换画面
$('.right-btn').on('click', function () {
	changePic('right');
	
});
// 点击右边按钮，往前切换画面
$('.left-btn').on('click', function () {
	changePic('left');
});
// 点击底部控制小圆点，切换画面
$('.control-btn li').on('click', function () {
	// 记录当前点击时的索引，当下次点击的索引值不为上次时执行
	var index_self = $(this).index();
	if(index_active != index_self) {
		changePic(this);
		index_active = index_self;
	}	
});
timer = setInterval(function () {
	changePic('right');
}, 2000);
$('.show').on('mouseenter', function () {
	clearInterval(timer);
});
$('.show').on('mouseleave', function () {
	clearInterval(timer);
		timer = setInterval(function () {
		changePic('right');
	}, 2000);
})