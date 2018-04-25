window.onload=function(){
	var headers=document.getElementsByTagName("h2");
	var forms=document.getElementsByTagName("form");
	var aside;
	if(document.getElementsByClassName){
		aside=document.getElementsByClassName("aside0")[0];
	}else{
		aside=Getclassname("aside0")[0];
	}
	var aside_img=aside.getElementsByTagName("img")[0];
// 点击h2 切换注册界面
	for(var i=0,len=headers.length;i<len;i++){
		headers[i].id=i;
		headers[i].onclick=function(){
			aside.className="";
			for(var j=0;j<forms.length;j++){
				headers[j].style.borderColor="#b6b6b6";
				headers[j].style.background="none";
				forms[j].style.display="none";
			}
			this.style.background="#256db7";
			this.style.borderColor="#256db7";
			forms[this.id].style.display="block";
			aside.className="aside"+this.id;
			if(aside.className=="aside2"){
				aside_img.src="images/reg_vip_163.gif";
				aside_img.style.marginTop="170px";
			}else{
				aside_img.src="images/reg_master.gif";
				aside_img.style.marginTop="";
			}

		}
	}
//  封装获取className 函数
		function Getclassname(clsname){
			var evers=document.getElementsByTagName("*");
			var arrs=new Array();
			for(var i=0,len=evers.length;i<len;i++){
				if(evers[i].className==clsname){
					arrs.push(evers[i]);
				}
			}
			return arrs;
		}
}