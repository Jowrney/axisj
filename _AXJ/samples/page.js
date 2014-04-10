var pageObj = {
	host:"",
	theme:"arongi",
	themeData:[
		{
			name:"Arongi",
			ver:"1.0",
			developer:"Jowrney Kim",
			mail:"jowrney@axisj.com",
			support:["DX","MX"]
		},		
		{
			name:"Bulldog",
			ver:"1.0",
			developer:"Dongyoung Kim",
			mail:"dongyoung@axisj.com",
			support:["DX"]		
		},		
		{
			name:"Flybasket",
			ver:"1.0",
			developer:"Jowrney Kim",
			mail:"jowrney@axisj.com",
			support:["DX"]					
		},		
		{
			name:"Kakao",
			ver:"1.0",
			developer:"Jowrney Kim",
			mail:"jowrney@axisj.com",
			support:["DX"]					
		}
	],
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
		pageObj.theme = newTheme;
		toast.push(newTheme+"가 적용 되었습니다.");

		var to = [];
		var tdata = {};
		for(var a=0; a<pageObj.themeData.length; a++){
			if(pageObj.theme == pageObj.themeData[a].name.toLowerCase()) tdata = pageObj.themeData[a];
		}
		
		to.push("<div class='logo'><img src='"+pageObj.host+"ui/"+pageObj.theme+"/images/dx-theme-logo.png' /></div>");

		to.push("<h1>");
		to.push("<span>"+tdata.name+"</span> ver"+tdata.ver+"&nbsp;&nbsp;");
		for(var b=0; b<tdata.support.length; b++){
			to.push("<span class='support'>"+tdata.support[b]+"</span>");
		}	
		to.push("</h1>");
		to.push("<h2>Theme Developer. <a href='mailto:"+tdata.mail+"'>"+tdata.developer+"</a></h2>");
		
		to.push("<div class='ax-clear'></div>");
		jQuery(".themeInfo").empty();
		jQuery(".themeInfo").append(to.join(""));

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
