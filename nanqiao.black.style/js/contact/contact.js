var contact = (function(){
		 var initBaiduMap=function(){
			var map = new BMap.Map("bMap");


		  

			map.centerAndZoom(new BMap.Point(104.096904,30.622649), 13);  // 初始化地图,设置中心点坐标和地图级别
			map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
			//map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			map.disableScrollWheelZoom()
			var point = new BMap.Point(104.0364,30.644763);


			//控件
			var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
			var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
			var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
			map.addControl(top_left_control);        
			map.addControl(top_left_navigation);     
			map.addControl(top_right_navigation);  


			//标注
			var opts = { position : point,  offset   : new BMap.Size(10, -30)};
			var label = new BMap.Label("红星美凯龙双楠店A区", opts);  
			label.setStyle({ color : "red",fontSize : "12px", height : "20px", lineHeight : "20px", fontFamily:"微软雅黑"});
			map.addOverlay(label); 

			//居然之家琉璃店
			var point2 = new BMap.Point(104.100234,30.598428);
			var opts2 = { position : point2,  offset   : new BMap.Size(10, -30)};
			var label2 = new BMap.Label("居然之家琉璃店", opts2); 
			label2.setStyle({ color : "red",fontSize : "12px", height : "20px", lineHeight : "20px", fontFamily:"微软雅黑"});
			map.addOverlay(label2); 



			var marker = new BMap.Marker(point); 
			var marker2 = new BMap.Marker(point2); 

			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

			map.addOverlay(marker);  
			map.addOverlay(marker2);  
		 }
		 return {initBaiduMap:initBaiduMap}

})(window);
window.contact = contact;
