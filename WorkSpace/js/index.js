// JavaScript Document
var i=1;
$(document).ready(function(){
	if(document.getElementById("noticetxt")){ 
    var scrollup = new ScrollText("noticetxt");
		scrollup.LineHeight = 45;      //单排文字滚动的高度
		scrollup.Amount = 1;          //注意:子模块(LineHeight)一定要能整除Amount.
		scrollup.Delay = 10;         //延时
		scrollup.Start();           //文字自动滚动
		scrollup.Direction = "up"; //默认设置为文字向上滚动
	 }
	 
	 /** 图片轮换 **/
	 var mytimer = window.setInterval(changeed,1500);
	 function changeed(){
	   for(m=1;m<6;m++){
		  var objb = $("#b"+m);
		  if(m==i){
			objb.css("backgroundColor","red");
		  }else{
			objb.css("backgroundColor","gray");
		  }   
		   
	   }
	   if(i<6){
		  $("#imgchangeed").attr("src" ,"newsImages/"+i+".jpg");
		  i++;
	   }else{
		  i=1;
		  $("#imgchangeed").attr("src" ,"newsImages/"+i+".jpg");
	   }
	 }


});
//隐藏子菜单
function hiddenmenu(id){
	var obj = $("#"+id);
	obj.css("display","none");	
}
//显示子菜单
function showmenu(id){
	var obj = $("#"+id);
	obj.css("display","block");
}