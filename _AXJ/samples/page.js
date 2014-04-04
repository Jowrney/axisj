var pageObj = {
	host:"",
	incHeader:function(){
		var ho = [];
		ho.push("<h3><a href='"+pageObj.host+"index.html'><img src='"+pageObj.host+"AXJ.png' style='width:110px; height:40px;' /></a></h3>");
		ho.push("<ul>");
		ho.push("<li><a href='#'>Common</a></li>");		
		ho.push("<li><a href='#'>UI<span>(Unique)</span></a></li>");				
		ho.push("<li><a href='#'>UI<span>(Complex)</span></a></li>");						
		ho.push("<li><a href='#'>Lab</a></li>");
		ho.push("</ul>");		
		ho.push("<div class='ax-clear'></div>");
		jQuery(".navMenu").append(ho.join(""));
	},
	incFooter:function(){
		var fo = [];
		fo.push("<!--h3>AXISJ Theme</h3-->");
		fo.push("<ul>");
		fo.push("<li><a href='javascript:pageObj.changeTheme(\"arongi\");' class='themeSelector' id='arongi'>Arongi<span>(Default)</span></a></li>");		
		fo.push("<li><a href='javascript:pageObj.changeTheme(\"bulldog\");' class='themeSelector' id='bulldog'>Bulldog</a></li>");				
		fo.push("<li><a href='javascript:pageObj.changeTheme(\"flybasket\");' class='themeSelector' id='flybasket'>Flybasket</a></li>");						
		fo.push("<li><a href='javascript:pageObj.changeTheme(\"kakao\");' class='themeSelector' id='kakao'>Kakao</a></li>");
		fo.push("</ul>");		
		fo.push("<div class='ax-clear'></div>");
		jQuery(".navTheme").append(fo.join(""));				
	},
	changeTheme: function(newTheme){
		//var newTheme = jQuery("#myThemeSelector").val();
		AXUtil.setCookie("AXISTHEME", newTheme);
		toast.push(newTheme+"가 적용 되었습니다.");

		jQuery("link").each(function(){

			var re_common = new RegExp("/css/(.*)_","ig"); //정규식 패턴입니다.
			var re = new RegExp("/ui/(.*)/","ig"); //정규식 패턴입니다.
			var str = this.href;             //검색할 문자열입니다.
			var arr = re.exec(str);               
			var myTheme = RegExp.$1;
			if(myTheme){
				this.href = str.replace("/"+myTheme+"/", "/"+newTheme+"/");
			}else{
				arr = re_common.exec(str); 	
				myTheme = RegExp.$1;
				if(myTheme){
					this.href = str.replace("/"+myTheme+"_", "/"+newTheme+"_");	
				}
			}
		});
		pageObj.changeThemeButton(newTheme);	
	},
	initTheme:function(){
		
		var gt = AXUtil.getCookie("AXISTHEME");
		if(gt){ 
			pageObj.changeTheme(gt);
			//pageObj.changeThemeButton(gt);			
		}
	},
	changeThemeButton:function(tm){
		$(".themeSelector").removeClass("on");
		$("#"+tm).addClass("on");
	}
	
};
