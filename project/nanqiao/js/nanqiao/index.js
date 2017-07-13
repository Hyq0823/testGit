//首页轮播图片的路径
var rollpics =
  [
    "img/index/roll_bg1.png",
    "img/index/roll_bg2.png",
    "img/index/roll_bg3.png"
  ]

 //====================凡是轮播图有变动,加入路径既可=====================================================================

  //动态添加轮播图
  function addRollPics(){
  	$.each(rollpics,function(index,data){
    	$("#rollpic ul").append("<li><img src="+data+"></li>");
 	 });
  }


  addRollPics();//调用添加轮播
