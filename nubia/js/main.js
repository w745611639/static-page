window.onload=function(){
	var li_btns=document.getElementsByClassName("li_btns");
	var hidden_mes=document.getElementsByClassName("hidden_mes")[0];
	var hidden_mes_uls=hidden_mes.getElementsByTagName("ul");
	function Hiddens(){
		for(var i=0,len=li_btns.length;i<len;i++){
			li_btns[i].id=i;
			li_btns[i].onmouseover=function(){
				hidden_mes.style.display="block";
				hidden_mes_uls[this.id].style.display="block";
			}
			hidden_mes.onmouseout=function(){
				this.style.display="none";
			}
		}
 	}
 	Hiddens();
}